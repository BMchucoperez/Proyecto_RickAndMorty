import React, { useState } from "react";
import style from "./SearchBar.module.css";


export default function SearchBar(props) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      const inputValue = event.target.value;
      if (isValidInput(inputValue)) {
         setId(inputValue);
      }
   };

   const handleAddClick = () => {
      if (id.trim() === "") {
         alert("Please enter a character ID.");
         return;
      }

      if (!isValidId(id)) {
         alert("Invalid character ID. Please enter a valid ID between 1 and 825.");
         return;
      }

      props.onSearch(id);
   };

   const isValidInput = (input) => {
      return /^[0-9]*$/.test(input); // Only allow digits
   };

   const isValidId = (input) => {
      const numericValue = parseInt(input, 10);
      return numericValue > 0 && numericValue < 826;
   };
   
   return (
      <div className= {style.div} >
         <input 
         type ='search' 
         placeholder ="Find a character..."
         onChange = {handleChange}
         value = {id}
         />
         <button
         className={style.btn}
         onClick={handleAddClick}
         >
            ADD
         </button>
      </div>
   );
}
