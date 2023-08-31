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
        <div className={style.total}>
            <div className={style.list} >
            <select onChange={handleOrder} className={style.selects}>
                <option value="option1" disabled selected hidden>
                    Order by number
                </option>
                <option value="A">Ascending</option>
                <option value="D">Descending</option>
            </select>
            
            <select onChange={handleFilter} className={style.selects}>
                <option value="option2" disabled selected hidden>
                    Order by gender
                </option>
                <option value="unknown">Unknown</option>
                <option value="Genderless">Genderless</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="RESET">RESET</option>
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