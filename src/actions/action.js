import {types} from '../type/types'
import {firebase, google} from '../firebase/firabase-config'

export const loginGoogle = ()=>{
    return (dispatch) => {
        firebase.auth().signInWithPopup(google)
        .then(({user}) => {
            console.log(user);
            dispatch(
                login(user.uid,  user.displayName)
            )
        })

    }

}

export const login = (id, displayName)=>{
    return{
        type: types.login,
        payload:{
            id,
            displayName
        }
    }
}

