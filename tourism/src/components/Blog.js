import React,{useState,useEffect,useCallback} from 'react';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import BlogCard from './BlogCard';
import {NavLink} from 'react-router-dom'

export default function Blog() {
    const [blog,setBlog]=useState([]);
    const [blogs,setBlogs]=useState([]);
    const [show, setShow]=useState(false);
    const [searchItem, setSearchItem]=useState("");
    const makeCall=useCallback(()=>{
        axios.get('/blog/blog-post').then((res)=>{
            console.log('blog res', res);
            setBlog(res.data.result);
            setShow(false);
           // toast.success('successfully')
        }).catch(err=>{
            if (err && err.response && err.response.data) {
                toast.error(err.response.data.error);
              } 
        })
    },[]);
    useEffect(()=>{
        makeCall();
    },[makeCall]);

    const handleChange=(event)=>{
        //console.log(searchItem);
       setSearchItem(event.target.value);
    }
    const handleSearch=()=>{
        let place=searchItem;
        if(place.length===""){
            makeCall();
            return;
        }
        axios.get(`/blog/blog-post/${place}`).then(res=>{
            setBlogs(res.data.result);
            setShow(true);
          console.log(res.data.result);

        }).catch(err=>{
            if (err && err.response && err.response.data) {
                toast.error(err.response.data.error);
              } 
        })
    }
    return (
        <div className="blog-container-item">
            <div className="blog-container-search">
             <input  type="text" onChange={handleChange}  value={searchItem}  placeholder="Enter place name" />
             <button style={{padding:"1%",marginRight:"30%"}} onClick={handleSearch}>Search..</button>
             <span className="write-blog">
                 <NavLink to='/create-blogs'>Share Your Experience </NavLink>
             </span>
            </div>
            <ToastContainer />
            <ul>
          {!show && blog.map(user=>{
              return <li key={user._id}> <BlogCard title={user.title} place={user.place} author={user.author} description={user.description} /></li> 
          })}
          {show && blogs.map(user=>{
              return <li key={user._id}> <BlogCard title={user.title} place={user.place} author={user.author} description={user.description} /></li> 
          })}

          </ul>  
        </div>
    )
}
