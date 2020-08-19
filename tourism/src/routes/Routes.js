import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PublicRoute";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import FloraAndFaunna from "../components/FloraAndFaunna";
import AdventureCategory from "../components/AdventureCategory";
import Culture from "../components/Culture";
import Cuisine from "../components/Cuisine";
import Festival from "../components/Festival";
import Mountains from "../components/Mountains";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Activate from "../components/Activate";
import Reset from "../components/Reset";
import Forgot from "../components/Forgot";
import Blog from '../components/Blog'
import CreatePost from '../components/CreatePost'
import SignOut from '../components/SignOut';
import AboutPage from '../components/AboutPage'
const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/about" component={AboutPage} />
        <PublicRoute path="/category/flora" exact component={FloraAndFaunna} />
        <PublicRoute
          path="/category/adventure"
          exact
          component={AdventureCategory}
        />
        <PublicRoute path="/category/culture" exact component={Culture} />
        <PublicRoute path="/category/festival" exact component={Festival} />
        <PublicRoute path="/category/mountain" exact component={Mountains} />
        <PublicRoute path="/category/cuisine" exact component={Cuisine} />
        <PublicRoute restricted path="/signin" exact  component={SignIn} />
        <PublicRoute restricted path="/signup" exact  component={SignUp} />
        <PublicRoute
          path="/auth/activate/:token"
          exact
          restricted
          component={Activate}
        />
        <PublicRoute
          path="/auth/password/reset/:token"
          exact
          restricted
          component={Reset}
        />
        <PublicRoute
          path="/auth/password/forgot"
          exact
          restricted
          component={Forgot}
        />
        <PrivateRoute path='/blogs' exact component={Blog} />
        <PrivateRoute path='/create-blogs' exact component={CreatePost} />
        <PrivateRoute path="/signout" exact  component={SignOut} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
