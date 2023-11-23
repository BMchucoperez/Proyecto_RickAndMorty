import Nav from './components/Nav/Nav.jsx';
import React, { useState } from 'react';
import {Routes, Route, useLocation} from "react-router-dom";
import Detail from './components/Detail/Detail';
import Register from './components/Register/Register.jsx';
import Form from "./components/Form/Form.jsx"
import Favorites from './components/Favorites/Favorites.jsx';
import style from "./App.module.css";
import axios from "axios";
import Home from "./components/Home/Home";

function App() {

   const [characters, setCharacters] = useState([]);
   const location = useLocation();

   const onSearch = async (dato) => {
      try {
         const backRequest = await axios(
            `http://localhost:3001/character/${dato}`
          );
          if (backRequest.data.name) {
            setCharacters((oldChars) => [...oldChars, backRequest.data]);
          }
      } catch (error) {
         console.error('Error:', error);
      }
   };
   
   const onClose = (id) => {
      setCharacters(
         characters.filter((pj) => {
           return pj.id !== Number(id);
         })
       );
   };

   return (
      <div className={style.container} >
         {location.pathname !== "/" && location.pathname !== "/register" && <Nav/>}
            
         <Routes>
            <Route path="/home" 
            element = {
               <Home onSearch={onSearch} characters={characters} onClose={onClose} />
            }
            />
            
            <Route path="/detail/:id" element = {<Detail/>}/>
            <Route path="/register" element = {<Register/>}/>
            <Route path="/" element={<Form/>} />
            <Route path="/favorites" element = {<Favorites/>}/>
            
         </Routes>                  
      </div>
   );
}

export default App;