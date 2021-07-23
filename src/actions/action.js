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

export const registro = (id, nombre, apellido, telefono)=>{
    return{
        type: types.Registrar,
        payload:{
            id,
            nombre,
            apellido,
            telefono,
        }
    }
}

export const registroUsuario=( email, password, nombre, apellido)=>{
    return (dispatch)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password,  nombre, apellido,)
        .then(async({user})=>{
            console.log(user);

            await user.updateProfile({displayName: nombre})

            dispatch(
                registro(user.uid, user.displayName)
            )
            })
            .catch(e =>{
                console.log(e)
            })

        }
        

    }

