import React, { useEffect, useState } from 'react';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { firebase } from '../firebase/firabase-config';
import { useDispatch } from 'react-redux';
import { AuthRouter } from './AuthRouter';
import {AuthPrivate} from './AuthPrivate'
import { login } from '../actions/action';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';


export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLooggedIn, setIsLooggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLooggedIn(true)

            } else {
                setIsLooggedIn(false)
            }
            
        setChecking(false)
        })

    }, [dispatch, setChecking])

    if (checking) {
        return (
            <h1>Wait...</h1>
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
