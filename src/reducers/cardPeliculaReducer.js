import { types } from '../type/types';

const initialState = {
    peliculas:[]
    
}

export const cardPeliculasReducer = (state = initialState, action)=>{
   
    switch (action.type) {
        case types.NuevaPelicula:
            return {
                ...state,
                peliculas:  [action.payload, ...state.peliculas]
            }
        default:
            return state;
    }
}