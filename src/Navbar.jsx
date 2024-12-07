import React from "react";
import KPLogo from "./Images/logo.png";

const Navbar = () => {
   return (
         <div className="d-flex bg-success text-light">
            <a className="navbar-brand h1 fs-1" href="#">
               <img src={KPLogo} alt="kp logo" height="50" className="d-inline-block align-text-top mx-1"/>
                 </a>
                 <h1 className="h1">keepNotes
                 </h1>
         </div>
   )
}

export default Navbar;