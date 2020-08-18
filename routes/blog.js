const express=require('express');
const router=express.Router();
const {getAllBlog,getBlogId,createPost} =require('../controllers/blog')
router.get('/blog-post',getAllBlog);
router.get('/blog-post/:id',getBlogId);
router.post('/create-post',createPost);

module.exports=router;