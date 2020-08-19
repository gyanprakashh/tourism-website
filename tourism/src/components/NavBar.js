import "../css/NavBar.css";
import { Link } from "react-router-dom";
import { isAuth } from "../utils/helpers";
import React, { useState ,useEffect} from "react";

export default function NavBar() {
  const [name, setName] = useState("");
  useEffect(()=>{
    if (isAuth()) {
      const user=localStorage.getItem('user')
     // console.log(JSON.parse(user));
      const getname=JSON.parse(user).name;
      setName(getname);
     // window.location.reload(false);
    }
  },[name])
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#3c2946"}}>
        <Link className="navbar-brand" to="/">
          <img
            className="brand-logo"
            src="/images/tlogo.png"
            alt="brand logo"
          />
          <span
            className="web-name"
            style={{
              paddingLeft: "8%",
              fontSize: "30px",
              fontWeight: "500",
              color: "white",
            }}
          >
            {" "}
            <strong>Travels Point</strong>
          </span>{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-link" to="/about">
              About 
            </Link>
            <Link className="nav-link" to="/blogs">
              Blogs
            </Link>
            {/* <Link className="nav-link" to="/create-blogs">
              Write Blog
            </Link> */}
            {isAuth() ? (
              <Link className="nav-link" to="/signin">
                {name}
              </Link>
            ) : (
              <Link className="nav-link" to="/signin">
                LogIn
              </Link>
            )}

            {isAuth() && (
              <Link className="nav-link " to="/signout">
                Signout
              </Link>
            )}
          </div>
        </div>
      </nav>

     
    </>
  );
}
