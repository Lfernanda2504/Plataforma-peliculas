import React from 'react'
import NavBar from '../components/NavBar'
import Login from '../components/Login'
import Peliculas from '../components/Peliculas'
import Registro from '../components/Registro'
import {
    BrowserRouter,
    Switch,
    Route,
    //Link
} from "react-router-dom";




const AppRouters = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Registro" component={Registro} />
                <Route exact path="/Peliculas" component={Peliculas} />
            </Switch>
        </BrowserRouter>

    )
}

export default AppRouters;
