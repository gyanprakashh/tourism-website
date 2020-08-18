const Blog = require("../Models/blog");

exports.getAllBlog = (req, res) => {
  Blog.find({}).exec((err, blog) => {
    if (err) {
      return res.status(400).json({
        error: `Something went wrong.`,
      });
    }
    return res.json({
      result: blog,
    });
  });
};

exports.getBlogId = (req, res) => {
  const place = req.params.id;
  Blog.find({ place:  { "$regex": place, "$options": "i" } }).exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: `Something went wrong`,
      });
    }
    return res.json({
      result: result,
    });
  });
};

exports.createPost = (req, res) => {
  const { title, author, place, description } = req.body;
  if (title === "" || author === "" || description === "" || place === "") {
    return res.status(400).json({
      error: `All fields are mandatory`,
    });
  }
  const newPost = new Blog({ title, author, place, description });
  newPost.save((err, userPost) => {
    if (err) {
      return res.status(400).json({
        error: `Something went wrong in saving data`,
      });
    }
    return res.json({
      message: `Thanks for sharing your experience`,
    });
  });
};
