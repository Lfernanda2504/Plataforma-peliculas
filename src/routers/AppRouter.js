import React, { useEffect, useState } from 'react';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { firebase } from '../firebase/firabase-config';
import { useDispatch } from 'react-redux';
import { AuthRouter } from './AuthRouter';
import {AuthPrivate} from './AuthPrivate'
import { login } from '../actions/action';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { loadCards } from '../helpers/loadCard';
import { setPelicula } from '../actions/crud/actionPeliculas';


export const AppRouter = () => {
    const [checking, setChecking] = useState(true);
    const [isLooggedIn, setIsLooggedIn] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setIsLooggedIn(true)
             
                const peliculas = await loadCards(user.uid)
                dispatch(setPelicula(peliculas))
            } else {
                setIsLooggedIn(false)
            }
            setChecking(false)
        })
    }, [dispatch, setChecking])

    if (checking) {
        return (

            <Spinner animation="border" variant="dark" />, <h1>Cargando...</h1>
        )
    }


    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated ={isLooggedIn}
                    />

                    <PrivateRoute
                        exact
                        path="/"
                        component={AuthPrivate}
                        isAuthenticated ={isLooggedIn}
                    />
                    
                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;
