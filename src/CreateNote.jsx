import React, { useState } from "react";

const CreateNote = (props) => {

   const [note, setNote] = useState({
      title: "",
      content: "",
   })

   const InputEvent = (event) => {
      //to get input value from user
      const value = event.target.value;
      const name = event.target.name;

      setNote((prevNotes) => {
         return {
            ...prevNotes,
            [name]: value,
         }
      })
   }

   //when we click button then this function will call but in this one props is passed and its function will pass which is addNote function which is in Main component because if we write function here then how note component get data? so we added function in main component so there we can link this function to note component 
   const addEvent = () => {
      //here we added note with props to get all data while doing this function
      props.passNote(note);

      setNote({
         title: "",
         content: "",
      })
   }


   return (
      <>
         <div className="d-flex justify-content-center mx-auto w-75 border border-2 rounded-2 shadow-sm mt-3">
            <div className="text-center w-100">
               <input
                  type="text"
                  name="title"
                  value={note.title}
                  onChange={InputEvent}
                  placeholder="Title"
                  className="w-100 border border-0 px-1 overflow-x-auto h2"
                  autoComplete="off"
               />
               <textarea
                  type="text"
                  name="content"
                  value={note.content}
                  onChange={InputEvent}
                  className="w-100 border border-0 px-1 overflow-x-auto"
                  placeholder="Write a note..." >
               </textarea>
               <div className="d-flex justify-content-end">
                  <button
                     onClick={addEvent}
                     className="btn border-0 bg-transparant">
                     <i className="fa-solid fa-circle-plus fs-1 text-success link-success"></i>
                  </button>
               </div>
            </div>
         </div>
      </>
   )
}

export default CreateNote;