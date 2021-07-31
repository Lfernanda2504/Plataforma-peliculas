import { types } from '../type/types';
const initialState = {
    peliculas:[],
    active: null,
}

export const peliculasReducer = (state = initialState, action)=>{
   
    switch (action.type) {
        case types.PeliculaActive:
            return {
                ...state,
                peliculas:  [action.payload, state.peliculas]
            }
        case types.PeliculaLoad:
            console.log(action.payload)
            return{
                ...state,
                peliculas: [...action.payload]
            }
    
        default:
            return state;
    }
}