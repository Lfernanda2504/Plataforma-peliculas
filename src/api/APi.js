import React from "react";
import CardPelicula from '../components/CardPelicula'
import Axios from 'axios'
import { useEffect, useState } from "react";


export const Data = () => {
  const [dataPeliculas,setDataPeliculas] = useState([])

  useEffect(() => {
     Axios.get('https://api.themoviedb.org/3/movie/550?api_key=2ee32d518857e9c44a37c813fd6262b1&token=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWUzMmQ1MTg4NTdlOWM0NGEzN2M4MTNmZDYyNjJiMSIsInN1YiI6IjYwZjA4MDU3ZmRjMTQ2MDA1ZDNmYTQxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cC6dxThj9YKWfuUFoKdav4ykHyY6gi2qJQ3NnxvMvYU')
     .then(response => 
     {
      setDataPeliculas(response.dataPeliculas)
       console.log(setDataPeliculas)

       
    })
  })


return (
<div>
<CardPelicula />
</div>

      
)

}