import React from "react";
import Cards from "../Cards/Cards";
import style from "./Home.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Home = (props) => {
  return (
    <div className={style.container}>
      <div className={style.barra}>
        <SearchBar onSearch={props.onSearch} className={style.search} />
      </div>
      <div className={style.card}>
        <Cards characters={props.characters} onClose={props.onClose} />
      </div>      
    </div>
  );
}

export default Home;