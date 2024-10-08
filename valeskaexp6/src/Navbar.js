import React from "react";
import { BrowserRouter, Link, NavLink ,Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Session from "./Components/Session/Session";
import "./Navbar.css";
import 'font-awesome/css/font-awesome.min.css';

function Navbar() {
  return (

    <BrowserRouter>
      <div className=" link ">
      <NavLink  to="/Home" activeClassName="active" >Home </NavLink>
        <NavLink  to="/Session" activeClassName="active">Session </NavLink>
        <NavLink to="/Contact" activeClassName="active">Contact </NavLink>

        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank"
            rel="noopener noreferrer" aria-label="Facebook"
          >
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://www.youtube.com"   target="_blank"
            rel="noopener noreferrer"   aria-label="YouTube"
          >
            <i className="fa fa-youtube" aria-hidden="true"></i>
          </a>
          <a   href="https://www.instagram.com"   target="_blank"
            rel="noopener noreferrer"     aria-label="Instagram"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>


    <link
    rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </div>
      </div>

      <div>
        <Routes>
          <Route path="/Home" Component={Home}></Route>
          <Route path="/Session" Component={Session}></Route>
          <Route path="/Contact" Component={Contact}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Navbar;
