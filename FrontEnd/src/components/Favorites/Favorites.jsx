import { connect, useDispatch, useSelector} from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards, reset } from "../../redux/actions";
import style from "./Favorites.module.css"
import React, {useState} from "react";

export default function Favorites () {
    
    const favorites = useSelector((state)=> state.favorites);
    const dispatch = useDispatch();
    const [booleano, setBooleano] = useState(false);
    
    function handleOrder(event){
        dispatch(orderCards(event.target.value))
        setBooleano(!booleano) // Se actualiza el componente
    }

    function handleFilter(event){
        if(event.target.value === "RESET"){
            dispatch(reset())
        }else{
            dispatch(filterCards(event.target.value))
        }
    }

    return(
        <div>
            <div className={style.selects} >
            <select onChange={handleOrder} >
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            
            <select onChange={handleFilter} >
                <option value="RESET">RESET</option>
                <option value="unknown">UNKNOWN</option>
                <option value="Genderless">GENDERLESS</option>
                <option value="Female">FEMALE</option>
                <option value="Male">MALE</option>
            </select>
            </div>
            
            <div className={style.container}>
                {
                favorites?.map((char) => (
                <Card
                image = {char.image}
                id = {char.id}
                name = {char.name}
                status = {char.status}
                species = {char.species}
                gender = {char.gender}
                origin = {char.origin.name}
                />
                ))
            }
            </div>
            
        </div>
    );
}