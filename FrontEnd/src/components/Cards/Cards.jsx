import Card from '../Card/Card';
import style from "./Cards.module.css";


export default function Cards(props) {
   
   return (
      <div className={style.container}>
         {
         props.characters.map((pj) => {
            return (
            <Card 
               key={pj.id}
               image = {pj.image}
               id = {pj.id}
               name = {pj.name}
               status = {pj.status}
               species = {pj.species}
               gender = {pj.gender}
               origin = {pj.origin.name}
               onClose = {props.onClose}
            />
            );
         })
      }
      </div>
   );
}
