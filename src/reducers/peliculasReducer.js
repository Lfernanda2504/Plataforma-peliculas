import { types} from '../type/types';

export const peliculasReducer = (state =[], action)=>{
    switch (action.type) {
        case types.RegistrarPeliculas:
            
           return{
               nombrePelucula: action.payload.nombre,
               year: action.payload.year,
               genre: action.payload.genre,
               director: action.payload.director,
               
           }
    
        default:
            break;
    }

}