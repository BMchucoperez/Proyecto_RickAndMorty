import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import {Link} from "react-router-dom";
import linkedin from "../../images/linkedinIcon.png";
import git from '../../images/githubIcon.png'

const Nav = (props) => {
    return(
        <nav className={style.container}>
            <ul className={style.subcontenedor}>
                <Link to="/" className={style.link}>Log Out</Link>
            
            <Link to="/home" className={style.link}>Home</Link>
            <Link to="/favorites" className={style.link}>Favorites</Link>
            <li>
                <a target='_blank' href='https://www.linkedin.com/in/bryann-mart%C3%ADn-chuco-p%C3%A9rez-8565b81a6' rel="noreferrer">
                     <img src={linkedin} alt="Linkedin" className={style.iconLinkedin}/>
                </a>
            </li>
                    
            <li>
                <a target='_blank' href='https://github.com/BMchucoperez' rel="noreferrer">
                    <img src={git} alt="GitHub" className={style.iconGitHub}/>
                </a>
            </li>
            <SearchBar onSearch={props.onSearch} className={style.search} />
            </ul>
            
        </nav>
        

    );
};

export default Nav;