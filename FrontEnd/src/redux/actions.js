import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER,  RESET } from "./action-types";
import axios from "axios";

// export const addFavorite = (objCharacter) => {
//     return{
//         type: ADD_FAVORITE,
//         payload: objCharacter
//     }
// }

// ACTION | addFav
export const addFavorite = (character) => {
    const endpoint = "http://localhost:3001/favorites/";
    return async(dispatch) => {
      try {
        const response = await axios.post(endpoint, character); // Enviamos character por body
        const { data } = response;
        return dispatch({
          type: ADD_FAVORITE,
          payload: data,
        });
      } catch (error) {
        alert(error.message);
      }
    };
  };

// export const deleteFavorite = (id) => {
//     return {
//         type: DELETE_FAVORITE, 
//         payload: id
//     }
// }
export const deleteFavorite = (id) => {
    const endpoint = "http://localhost:3001/favorites/" + id;
    
    return async (dispatch) => {
      try {
        const response = await axios.delete(endpoint);
        const { data } = response;
        return dispatch({
          type: DELETE_FAVORITE,
          payload: data,
        });
      } catch (error) {
        alert(error.message);
      }
  };
};

export function filterCards(gender){
    return {
        type: FILTER,
        payload: gender
    };
}

export function orderCards(order){
    return{
        type: ORDER,
        payload: order
    };
}

export function reset(){
    return{
        type: RESET
    };
}