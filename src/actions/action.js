import { types } from "../type/types";
import { firebase, google } from "../firebase/firabase-config";
import {startLoading, finishLoading} from "../actions/uiError";

export const loginGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(google)
      .then(({ user }) => {
        console.log(user);
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (id, displayName) => {
  return {
    type: types.login,
    payload: {
      id,
      displayName
    },
  };
};

export const loginEmailPassword = (email, password)=>{
  return (dispatch)=>
  {
    firebase.auth().signInWithEmailAndPassword(email, password).then(({user})=>{

      dispatch(startLoading)
      dispatch(login(user.uid, user.displayName));
    
    })
    .catch(e =>{
      dispatch(finishLoading)
      console.log(e)
    })
  }
}
export const startLogout = () => {
  return async (dispatch) => {
      await firebase.auth().signOut();
      dispatch(logout());
  }
}
export const logout = () => ({
  type: types.logout
})


export const registro = ( nombre,apellido, email, password) => {
  return {
    type: types.Registrar,
    payload: {
      nombre,
      apellido,
      email, 
      password
    },
  };
};

export const registroUsuario = (email, password, nombre) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        console.log(user);

        await user.updateProfile({ displayName: nombre });

        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};


