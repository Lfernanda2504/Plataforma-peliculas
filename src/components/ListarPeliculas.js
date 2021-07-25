import React from 'react'
import { Container, Table } from 'react-bootstrap';
import { useSelector} from "react-redux";

const ListarPeliculas = () => {

    //consulta el estado al store
    const {peliculas} = useSelector(store => store.peliculas);
    console.log("vengo de listar", peliculas);

    return (
        <Container fluid>
             <Table>
                <thead>
                    <tr>
                        <th>Nombre Pelicula</th>
                        <th>Año</th>
                        <th>Genero</th>
                        <th>Director</th>
                    </tr>
                </thead>
                <tbody>
                {
                    (peliculas)?
                        (
                            peliculas.map(pelicula => (
                                <tr key={pelicula.id}>
                                    <td>{pelicula.nombrePelicula}</td>
                                    <td>{pelicula.year}</td>
                                    <td>{pelicula.genre}</td>
                                    <td>{pelicula.director}</td>
                                </tr>
                            )
                            )
                     ):
                    <p>Datos no disponibles</p>
                   

                }
                   
                </tbody>
            </Table>
    </Container>
    )
}

export default ListarPeliculas
