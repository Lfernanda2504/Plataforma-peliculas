import React from 'react'
import NavBar from '../components/NavBar'
import App from '../components/App'
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
                <Route exact path="/" component={App} />
            </Switch>
        </BrowserRouter>

    )
}

export default Routers;
