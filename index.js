const app = require("express")();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const {authorize}=require('./midddlewares/auth');
const authRoute=require('./routes/auth');
const blogPost=require('./routes/blog');
const weatherTemp=require('./routes/temp');
const { NODE_PORT, NODE_ENV, DATABASE_URL } = process.env;
const PORT = NODE_PORT || 8000;
const isdevelopement = NODE_ENV === "developement";

if (isdevelopement) {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.options('*', cors()) 
app.use('/api',authRoute);
app.use('/api/blog',authorize, blogPost);
app.use('/api/weather',weatherTemp)
mongoose.connect(DATABASE_URL,{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useNewUrlParser:true
}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on ${process.env.NODE_PORT}`)
    })
}).catch(err=>{
    console.log(`Db connection faied ${err}`)
});