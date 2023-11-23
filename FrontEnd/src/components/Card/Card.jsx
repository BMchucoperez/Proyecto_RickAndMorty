import style from './Card.module.css';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useState, useEffect} from "react";
import {addFavorite, deleteFavorite} from "../../redux/actions";

export default function Card({
   name,
   species,
   onClose,
   gender,
   status,
   origin,
   image,
   id,
}) {
   
   const dispatch = useDispatch();
   const favorites = useSelector((state) => state.favorites);
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id));
      }
      else{
         setIsFav(true);
         dispatch(
         addFavorite({
            name,
            species,
            onClose,
            gender,
            status,
            origin,
            image,
            id,
         })
         );
      }
   }

   useEffect(() => {
       favorites.forEach((fav) => {
          if (fav.id === id) {
             setIsFav(true);
          }
       });
    }, [favorites]);

   return (
      <div className = {style.container}>
         <div className = {style.card}>
            {onClose 
            ? 
            (
            <button 
            className={style.closeButton} 
            onClick={() => onClose(id)}>
               ✖
            </button>
            ) 
            : 
            null}
            
            <h2>{name}</h2>
            
                       
                     
            <Link to = {`/detail/${id}`} > 
            <img 
            className={style.image}
            src={image} 
            alt ={name} 
            />
            </Link>
            
            <h4>{id}</h4>
            {isFav 
            ? 
            (
             <button onClick={handleFavorite}>❤️</button>
            ) 
            : 
            (
             <button onClick={handleFavorite}>🤍</button>
            )}
         </div>
      </div>
      
   );
}

// export function mapDispatchToProps(dispatch){
//    return{
//       addFavorite: function(character){
//          dispatch(addFavorite(character))
//       },
//       removeFavorites: function(id){
//          dispatch(deleteFavorite(id))
//       },
//    };
// }

// export function mapStateToProps(globalState){
//    return{
//       favorites: globalState.favorites
//    }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Card);