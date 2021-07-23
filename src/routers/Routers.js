import React from 'react'
import NavBar from '../components/NavBar'
import Login from '../components/Login'
import Registro from '../components/Registro'
import {
    BrowserRouter,
    Switch,
    Route,
    //Link
} from "react-router-dom";



const Routers = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Registro" component={Registro} />
            </Switch>
        </BrowserRouter>

    )
}

export default Routers;
