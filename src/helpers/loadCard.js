import { db } from '../firebase/firabase-config'

export const loadCards = async (uid) => {
    //extraer data de BD
    const peliculaStore = await db.collection(`${uid}/Pelicula/data`).get()
    const peliculas = [];

    peliculaStore.forEach(hijo=>{
        console.log(hijo.data())
    })

    //recorremos el array 
    console.log(peliculaStore)
    return peliculas
}