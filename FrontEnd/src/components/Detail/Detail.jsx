import {useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios";
import style from "./Detail.module.css"

export default function Detail(){
    const {id} = useParams();

    const [pjDetail, setPjDetail] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
          .then(({data}) => {
            if (data.name) {
              
              setPjDetail(data);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          
    
        // desmontaje
        return setPjDetail({});
        
        
      }, []);

    return(
        <div className={style.container}>
            
            <h1>{pjDetail.name && pjDetail.name}</h1>
            <h2>{pjDetail.status ? pjDetail.status : ":( no hay status"}</h2>
            <img 
            className={style.cardImage}
            src={pjDetail.image} alt={pjDetail.name} />
            <section className={style.cardInfo}>
              <span>{pjDetail.species}</span>
              <span>{pjDetail.gender}</span>
              <span>{pjDetail.origin?.name}</span>
            </section>
                        
        </div>
                   
       
    );
}