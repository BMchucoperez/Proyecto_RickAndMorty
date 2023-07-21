import Card from '../Card/Card';
import {CardsContainer} from "./styledComponents";


export default function Cards(props) {
   
   return (
      <CardsContainer>
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
      </CardsContainer>
   );
}
