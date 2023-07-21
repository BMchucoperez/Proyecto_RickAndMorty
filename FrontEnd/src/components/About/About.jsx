import React from "react";
import style from "./About.module.css";

export default function About(){
    return(
        <div className={style.container} >
        <h1>Información sobre esta página:</h1>
        <hr />
        <h3>Este es un avance del proyecto de integración correspondiente al módulo 2 de HENRY</h3>
        <hr />
        <h3>Hecho por: Bryann Martín Chuco Pérez</h3>
    </div>
    );    
}