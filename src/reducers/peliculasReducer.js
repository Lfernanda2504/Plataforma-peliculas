import { types } from '../type/types';

export const peliculasReducer = (state =[], action)=>{
   
    switch (action.type) {
        case types.RegistrarP:
            return {
                id: action.payload.id,
               nombrePelicula: action.payload.nombrePelicula,
               year: action.payload.year,
               genre: action.payload.genre,
               director: action.payload.director  
            }
        case types.Listar:
            return{
                ...state,
                peliculas: [...action.payload]
            }
    
        default:
            return state;
    }
}