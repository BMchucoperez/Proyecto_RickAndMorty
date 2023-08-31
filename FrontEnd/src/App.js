import Nav from './components/Nav/Nav.jsx';
import React, { useState, useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import Detail from './components/Detail/Detail';
import Form from "./components/Form/Form.jsx"
import Favorites from './components/Favorites/Favorites.jsx';
import style from "./App.module.css";
import axios from "axios";
import Home from "./components/Home/Home";

function App() {

   const[access, setAccess] = React.useState(false);
   const navigate = useNavigate();
   const [errorApi, seterrorApi] = React.useState(false);

   function logout() {
      setAccess(false);
    }

   async function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/user/login/';

      try {
         const backendLogin = await axios(
            URL + `?email=${email}&password=${password}`
          );
          const { data } = backendLogin;
          const { access } = data;
         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         alert(error.message);
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const [characters, setCharacters] = useState([]);
   const location = useLocation();

   async function onSearch(dato) {
      try {
         const backRequest = await axios(
            `http://localhost:3001/character/${dato}`
          );
          if (backRequest.data.name) {
            seterrorApi(false);
            setCharacters((oldChars) => [...oldChars, backRequest.data]);
          } else {
            seterrorApi(true);
          }
      } catch (error) {
         seterrorApi(true);
      }
      
   }
   

   const onClose = (id) => {
      setCharacters(
         characters.filter((pj) => {
           return pj.id !== Number(id);
         })
       );
   };

   return (
      <div className={style.container} >
         {location.pathname !== "/" && <Nav onSearch={onSearch} out={logout} />}
            
         <Routes>
            <Route path="/home" 
            element = {
               !errorApi ? (
               <Home characters={characters} onClose={onClose} />
               ) : (
               <h1>Componente de error 404</h1>
               )
            }
            />
            
            <Route path="/detail/:id" element = {<Detail/>}/>
            <Route path="/" element={<Form login={login} />} />
            <Route path="/favorites" element = {<Favorites/>}/>
            
         </Routes>
                   
      </div>
   );
}

export default App;
