const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const _ = require("lodash");
const User = require("../Models/auth");

var transport = nodemailer.createTransport({
  service: "gmail",
 // port: 2525,
  auth: {
    user: "gyanprakash.gp98010@gmail.com",
    pass: "7352313300gy",
  },
});

exports.signUp = (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email }).exec((err, user) => {
    if (err) {
      return res.status(401).json({
        error: `something went wrong`,
      });
    }
    if (user) {
      return res.status(400).json({
        error: `Email already exist`,
      });
    }
    const token = jwt.sign(
      { name, email, password },
      process.env.JWT_ACCOUNT_ACTIVATION,
      { expiresIn: "10m" }
    );
    const activateLink = `${process.env.CLIENT_URL}/auth/activate/${token}`;
    const emailData = {
      to: [
        {
          address: email,
          name,
        },
      ],
      from: {
        address: process.env.EMAIL_FROM,
        name: `TourismApp`,
      },
      subject: `Account Activation Link`,
      html: `
            <div>
              <h1>Please use the following link to activate the account.</h1>
    
              <a href="${activateLink}" target="_blank">
                ${activateLink}
              </a>
    
              <hr />
    
              <p>This email contains sensitive information</p>
              <a href="${process.env.CLIENT_URL}" target="_blank">
                ${process.env.CLIENT_URL}
              </a>
            </div>
          `,
    };
    transport.sendMail(emailData, (err, info) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.json({
        message: `Link has been successfully sent to ${email}. please follow the instriction to activate your account`,
      });
    });
  });
};

exports.activateAccount = (req, res) => {
  const { token } = req.body;
  if (token) {
    return jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err) => {
      if (err) {
        return res.status(401).json({
          error: err,
        });
      }
      const { name, email, password } = jwt.decode(token);
      const newUser = new User({ name, email, password });
      User.findOne({ email }).exec((err, user) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        if (user) {
          return res.status(400).json({
            error: `Account has  already been activated`,
          });
        }
        newUser.save((err, userData) => {
          if (err) {
            return res.status.json({
              error: `something went wrong`,
            });
          }
          res.json({
            message: `Hey!! ${name} welcome, to the app`,
          });
        });
      });
    });
  }
  return res.status(401).json({
    error: `token is invalid`,
  });
};

exports.signIn = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "user does not found of this email",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "password is incorrect",
      });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    const { _id, name, email, role } = user;
    return res.json({
      token,
      user: {
        _id,
        email,
        role,
        name,
      },
      message: "successfully signed In",
    });
  });
};
exports.forgotPassword = (req, res) => {
  const { email } = req.body;
  User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: `user doesn't exists`,
      });
    }
    const token = jwt.sign(
      { _id: user._id, name: user.name },
      process.env.JWT_RESET_PASSWORD,
      {
        expiresIn: "10m",
      }
    );

    const link = `${process.env.CLIENT_URL}/auth/password/reset/${token}`;
    const emailData = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Password Reset Link",
      html: `
              <h1>Please use the following link to reset your password:</h1>
      
              <a href="${link}" target="_blank">${link}</a>
            `,
    };
    return user.updateOne({ resetPasswordLink: token }).exec((err, success) => {
      if (err) {
        return res.status(400).json({
          error: `There is error in saving the reset password`,
        });
      }
      transport
        .sendMail(emailData)
        .then(() => {
          return res.json(`Email has been sucessfuly sent to ${email}`);
        })
        .then((err) => {
          return res.status(400).json({
            error: `There was an error in sending email`,
          });
        });
    });
  });
};

exports.resetPassword = (req, res) => {
  const { resetPasswordLink, newPassword } = req.body;
  if (resetPasswordLink) {
    return jwt.verify( resetPasswordLink , process.env.JWT_RESET_PASSWORD, (err) => {
      if (err) {
        return res.status(400).json({
          error: `Link has been expired`,
        });
      }
      User.findOne({ resetPasswordLink }).exec((err, user) => {
        if (err || !user) {
          return res.status(400).json({
            error: `Something went wrong please try again`,
          });
        }
        const updateField = {
          password: newPassword,
          resetPasswordLink: "",
        };
        user = _.extend(user, updateField);
        user.save((err) => {
          if (err) {
            return res.status(400).json({
              error: `Something went wrong in reseeting password`,
            });
          }
          return res.json({
            message: `Password has been reset`,
          });
        });
      });
    });
  }
  return res.status(400).json({
    error: `we have not received any reset password link`,
  });
};
