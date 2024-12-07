import React from "react";

const Note = (props) => {

   const deleteEvent = () => {
      //here we added props.id with passdelete props to get id of current component which is prop we created in main component
      props.passDelete(props.id);
   }

   return (
      <>

         <div className="w-25 ps-2 pe-2 border border-2 rounded-2 mb-4 mx-5">
            <div className="flex-wrap" >
               <h4 className="h4 text-capitalize text-wrap text-center overflow-x-auto overflow-hidden"> {props.title} </h4>
               <p className="text-wrap text-center overflow-x-auto overflow-hidden">
                  {props.content}
               </p>

               <div className="d-flex justify-content-end">
                  <button 
                  onClick={deleteEvent}
                  className="btn border-0 bg-transparant">
                     <i className="fa-solid fa-trash fs-4 text-danger mx-auto link-danger"></i>
                  </button>
               </div>
            </div>
         </div>

      </>
   )
}

export default Note;
