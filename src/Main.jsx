import React, { useState } from "react";
import Navbar from "./Navbar";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";

const Main = () => {
   const [addItem, setAddItem] = useState([]);

   //here we write note becaz to access all data in note which is in createNote component
   const addNote = (note) => {
      //here using this we added all data which is in note in createnote component
      setAddItem((prevData) => {
         return [...prevData, note];
      })
   }

   const deleteItem = (id) => {
      //here we access all previous data that we have in olddata
      //&
      //here we are using filter method and in olddata in which we already access data and in that olddata using arrow function we again access all data in oldval & return only those element whose id is note similar to current component using id. and we already access its id by putting it in props
      setAddItem((oldData) => oldData.filter((oldVal, index) => {
            return index !== id;
         })
      )
   }

   return (
      <>
         <Navbar />
         <CreateNote passNote={addNote} />
         <div className="d-flex justify-content-evenly flex-wrap mt-4">
         {/* here map method will only run when we click on plus button & then addnote function will call and after that map function will run */}
            {addItem.map((val, index) => {
               return (
                  <Note
                     key={index}
                     id={index}
                     title={val.title}
                     content={val.content}
                     passDelete={deleteItem}
                  />
               )
            })}
            </div>
         <Footer />
      </>
   )
}

export default Main;