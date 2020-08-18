const app = require("express")();
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const {authorize}=require('./servers/midddlewares/auth');
const authRoute=require('./servers/routes/auth');
const blogPost=require('./servers/routes/blog');
const weatherTemp=require('./servers/routes/temp');
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
if (isdevelopement) {
  // production
  // app.use(cors({ origin: CLIENT_URL, optionsSuccessStatus: 200 }));
  app.use(cors());
} 
app.use(express.static(path.join(__dirname, "/tourism/build")));

app.use('/api',authRoute);
app.use('/api/blog',authorize, blogPost);
app.use('/api/weather',weatherTemp)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/tourism/build/index.html"));
});
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