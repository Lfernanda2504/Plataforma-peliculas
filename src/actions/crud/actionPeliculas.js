import { types } from "../../type/types";
import {fileUpload} from '../../helpers/fileUpload'
import { db} from "../../firebase/firabase-config";
import { loadCard} from '../../helpers/loadCard'

export const peliculasAction=(peliculas)=>{
  return async(dispatch, getSate)=>{
    const uid = getSate().login.id
    
    const nuevaPelicula = {
      nombrePelicula: '',
      description: '',
      year: '',
      genre: '',
      director:'',
      url: ''
    }
    const docRef = await db.collection(`${uid}/pelicula/data`).add(nuevaPelicula);
    console.log("enviando datos a la bd",docRef)
  }
  
}

export const NuevaCard = (pelicula, file) => {
   
  return async(dispatch, getSate)=> {
       let fileUlr=[]
       const {uid} = getSate().login.id

       //para validar 
       try 
       {
               fileUlr= await fileUpload(file)
           
       } catch (error) {
           fileUlr=[]
           
       }
       const nuevaPelicula = {
        nombrePelicula: pelicula.nombrePelicula,
        description: pelicula.description,
        year: pelicula.year,
        genre: pelicula.genre,
        director: pelicula.director,
        url: fileUlr
      }

      const docRef= await db.collection(`${uid}/Pelicula/data`).add(nuevaPelicula)
      dispatch(agregarNuevaPelicula(uid, nuevaPelicula))
      console.log('estos son los datos de ', nuevaPelicula)
   }
     
  }
//FUNCIÓN SINCRÓNICA 

export const agregarNuevaPelicula = ( id, pelicula ) => ({
   type: types.PeliculaActive,
   payload: {
       id, ...pelicula
   }
})
export const setPelicula =(peliculas)=>{
    return{
      type: types.PeliculaLoad,
      payload: peliculas
    }

}

//función Listar 
//export const ListarPelicula = (uid) => {
   //return async (dispatch) => {
       //const cardPelicula = await loadCards(uid)
       //dispatch(setPelicula(cardPelicula))
 //  }
//}

//export const setPelicula = (peliculas) => {
  // return {
       //type: types.cardLoad,
      // payload: peliculas
  // }
//}

