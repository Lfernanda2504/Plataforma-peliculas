import { db } from '../firebase/firebase-config'

export const loadCards = async (uid) => {
    //extraer data de BD
    const cardStore = await db.collection(`${uid}/Card/data`).get()
    const cardsList = [];

    //recorremos el array 
    cardStore.forEach(hijo=>{
        cardsList.push({
        id:hijo.id,
        ...hijo.data()
       })
    })
   
    return loadCards
}