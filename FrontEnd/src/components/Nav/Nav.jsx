import React, { useEffect, useState } from "react";
import style from "./Nav.module.css";
import {Link} from "react-router-dom";
import linkedin from "../../images/linkedinIcon.png";
import git from '../../images/githubIcon.png';

const Nav = () => {

    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prevScrollPos, visible]);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
        setPrevScrollPos(currentScrollPos);
    };

    const navbarClass = visible ? style.navBar : `${style.navBar} ${style.hiddenNavBar}`;

    return(
        <div className={navbarClass}>
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
        </div>
    );
};

export default Nav;