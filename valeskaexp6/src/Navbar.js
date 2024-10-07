import React  from "react";
import {BrowserRouter , Link , Route ,Routes } from 'react-router-dom';
import Home from "./Home";
import Contact from "./Contact";
import Session from "./Session";
import './Navbar.css';

function Navbar(){
    return(
        <BrowserRouter>
        <div className=" link ">
          <Link to='/Home'>Home  </Link>
          <Link to='/Session'>Session  </Link>
          <Link to='/Contact'>Contact  </Link>
        </div>

        <div>
            <Routes>
                <Route path='/Home' Component ={Home} ></Route>
                <Route path='/Session' Component ={Session} ></Route>
                <Route path='/Contact' Component ={Contact} ></Route>
            </Routes>
        </div>
        </BrowserRouter>
    )
}

export default  Navbar ;