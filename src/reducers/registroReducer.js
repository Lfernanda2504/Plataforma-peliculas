import { types } from '../type/types';

export const registroReducer = (state =[], action)=>{
   
    switch (action.type) {
        case types.Registrar:
            
            return {
                nombre: action.payload.nombre, 
                apellido: action.payload.apellido,
                email: action.payload.email,
                password: action.payload.password,
                
            }
    
        default:
            return state;
    }
}