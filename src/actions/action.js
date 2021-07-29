import { types } from "../type/types";
import { db, firebase, google } from "../firebase/firabase-config";
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
export const registroPelicula = (id, nombrePelicula, year, genre, director) => {
  return {
    type: types.RegistrarP,
    payload: {
      id,
      nombrePelicula,
      year,
      genre,
      director
    }
  }
}

export const registrarPelicula = (id, nombrePelicula, year, genre, director) => {
  return async (dispatch) => {

      const nuevasPeliculas = {
        id: id,
        nombrePelicula: nombrePelicula,
        year: year,
        genre: genre,
        director: director
      }

      await db.collection(`/Peliculas`).add(nuevasPeliculas);

      console.log(id,nombrePelicula, year, genre, director);
     dispatch(registroPelicula(id, nombrePelicula, year, genre, director))
  }
}
export const listar = (peliculas)=>{
  return {
    type: types.Listar,
    payload: peliculas
  }
}
export const listarPeliculas = ()=>{
  return async(dispatch)=>{
    const data = await db.collection(`/Peliculas`).get();
    const peliculas = [];
    data.forEach(peli =>{
      peliculas.push({ 
        ...peli.data()
      })
    })
    
    console.log("Estas son las peliculas que resibo", peliculas);
    dispatch(listar(peliculas));
  }

}