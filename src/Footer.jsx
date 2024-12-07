import React, { useState } from "react";

const Footer = () => {

   const year = new Date().getFullYear();

   return (
      <>
         <footer className="fixed-bottom text-center">
            <p> copyright © {year}</p>
         </footer>
      </>
   )
}

export default Footer;