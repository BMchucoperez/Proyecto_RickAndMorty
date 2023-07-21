import {ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER, RESET} from "./action-types";

const initialGlobalState = {
    favorites: [],
    allCharacters: [],
    access: false,
    aunMas: [],
};

export default function rootReducer(state = initialGlobalState, action) {
    
    switch(action.type){
        case ADD_FAVORITE:
            
            return{
                ...state,
                favorites: action.payload, 
                allCharacters: action.payload
            };
        
        case DELETE_FAVORITE:
            return{
                ...state,
                favorites: action.payload,
                allCharacters: action.payload
            };

        case FILTER:
            return{
                ...state, 
                favorites: state.allCharacters.filter(pj => pj.gender === action.payload)
            };

        case ORDER:
            let copy = state.favorites.sort((a,b) => {
                if(action.payload === "A"){
                    //ordenar de menor a mayor
                    if(a.id > b.id) return 1
                    if(a.id < b.id) return -1
                    return 0 //Si son iguales no los muevo de posicion
                }
                if(action.payload === "D"){
                    //ordenar de mayor a menor
                    if(a.id > b.id) return -1
                    if(a.id < b.id) return 1
                    return 0 //Si son iguales no los muevo de posicion
                }
            });
            return{
                ...state,
                favorites: copy
            };

        case RESET:
            return{
                ...state,
                favorites: state.allCharacters
            };

        default:
            return{...state}
    }
}

