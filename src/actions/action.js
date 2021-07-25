import { types } from "../type/types";
import { db, firebase, google } from "../firebase/firabase-config";

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

export const registro = (id, nombre, apellido, telefono) => {
  return {
    type: types.Registrar,
    payload: {
      id,
      nombre,
      apellido,
      telefono
    },
  };
};

export const registroUsuario = (email, password, nombre, apellido) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password, nombre, apellido)
      .then(async ({ user }) => {
        console.log(user);

        await user.updateProfile({ displayName: nombre });

        dispatch(registro(user.uid, user.displayName));
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