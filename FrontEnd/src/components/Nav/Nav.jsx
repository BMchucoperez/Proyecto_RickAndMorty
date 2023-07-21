import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import {Link} from "react-router-dom";

const Nav = (props) => {
    return(
        <div className={style.container} >
            
            <Link to="/" >LogOut</Link>
            <Link to="/about" >About</Link>
            <SearchBar onSearch={props.onSearch} />
            <Link to="/home" >Home</Link>
            <Link to="/favorites" >Favorites</Link>
            
        </div>

    );
};

export default Nav;