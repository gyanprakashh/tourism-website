const { model, Schema } = require("mongoose");

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  place: {
    type: String,
    required: true,
    trim: true,
  },
  description:{
      type:String,
      required:true,
  }
},{timestamps:true});

module.exports=model("Blog",blogSchema);