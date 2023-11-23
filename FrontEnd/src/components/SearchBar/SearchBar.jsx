import React, { useState } from "react";
import style from "./SearchBar.module.css";
import Swal from 'sweetalert2';


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
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a character ID.',
         });
         return;
      }

      if (!isValidId(id)) {
         Swal.fire({
            icon: 'error',
            title: 'Invalid ID!',
            text: 'Please enter a valid ID between 1 and 825.',
         });
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
            placeholder ="Add a character..."
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