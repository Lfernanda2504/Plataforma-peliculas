import {types} from '../type/types'

export const login = (id, displayName)=>{
    return{
        type: types.login,
        payload:{
            id,
            displayName
        }
    }
}