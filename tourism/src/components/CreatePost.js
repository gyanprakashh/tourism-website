import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "../css/CreatePost.css";
//import { authenticate } from "../utils/helpers";

export default function CreatePost() {
  const [formInputs, setFormInputs] = useState({
    title: "",
    author: "",
    place: "",
    description: "",
    titleError: "",
    placeError: "",
    authorError: "",
    descriptionError: "",
  });

  const {
    title,
    author,
    place,
    description,
    titleError,
    placeError,
    authorError,
    descriptionError,
  } = formInputs;
  const handleChange = (evt) => {
    setFormInputs({
      ...formInputs,
      [evt.target.name]: evt.target.value,
    });
  };
  const validate = () => {
    let authorError,titleError,placeError,descriptionError;
    if(author===""){
       authorError="Author name is required";
    }
    if(place===""){
       placeError="Place name is required field";
      //setFormInputs({...formInputs,placeError});
    }
    if(description===""){
       descriptionError="Description is required field";
     // setFormInputs({...formInputs,descriptionError});
    }
    if (title === "") {
       titleError = "Title must be required field";
      //setFormInputs({ ...formInputs, titleError:titleError });
    }
    if(place==="" || author==="" || title==="" || description===""){
      setFormInputs({...formInputs,authorError,titleError,descriptionError,placeError})
      return false;
    }
    return true;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      axios
        .post("/blog/create-post", {
          ...formInputs,
        })
        .then((res) => {
          console.log("sucessfully created", res.data);
          toast.success("succesfully craeted");
          setFormInputs({
            title: "",
            author: "",
            description: "",
            place: "",
            titleError: "",
            placeError:"",
            authorError:"",
            descriptionError:""
          });
        })
        .catch((err) => {
          if (err && err.response && err.response.data) {
            toast.error(err.response.data.error);
          }
        });
    }
  };
  return (
    <div className="create-post-container">
      <ToastContainer />
      <form className="create-post-form" >
        <h1>Create Post</h1>
        <div className="create-post-title">
          <label>Title:</label>
          <input onChange={handleChange} value={title} name="title" required />
        </div>
        {titleError ? <p style={{color:"red",marginLeft:"80%",position:"realtive", top:"8px"}}>{titleError}</p> : <span>{""}</span>}
        <div className="create-post-author">
          <label>Author:</label>
          <input
            onChange={handleChange}
            value={author}
            name="author"
            required
          />
        </div>
        {authorError ? <p style={{color:"red",marginLeft:"80%",position:"relative", top:"8px"}}>{authorError}</p> : <span>{""}</span>}
        <div className="create-post-place">
          <label>Place:</label>
          <input onChange={handleChange} value={place} name="place" required />
        </div>
        {placeError ? <p style={{color:"red",marginLeft:"80%",position:"relative", top:"10px"}}>{placeError}</p> : <span>{""}</span>}
        <div className="create-post-description">
          <label>Description:</label>
          <br />
          <textarea
            rows={10}
            cols={50}
            onChange={handleChange}
            value={description}
            name="description"
            required
          />
        </div>
        {descriptionError ? <p style={{color:"red",marginLeft:"80%",position:"relative", top:"8px"}}>{descriptionError}</p> : <span>{""}</span>}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
