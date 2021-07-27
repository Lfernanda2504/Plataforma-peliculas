import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { AllPeliculas } from "../containers/AllPeliculas"
import AddPeliculas  from "../components/AddPeliculas"
import MasVisto from "../components/MasVisto"
import MenosVisto from "../components/MenosVisto"
import NavBar from "../components/NavBar"

export const AuthPrivate = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <BrowserRouter>
                 <NavBar />
                    <Switch>
                        <Route 
                            exact
                            path="/"
                            component={AllPeliculas}
                        />

                        <Route 
                            exact
                            path="/AddPeliculas"
                            component={AddPeliculas}
                        />
                        <Route 
                            exact
                            path="/MasValorado"
                            component={MasVisto}
                        />

                        <Route 
                            exact
                            path="/MenosValorado"
                            component={MenosVisto}
                        />
                        <Redirect to="/" />


                    </Switch>
                </BrowserRouter>
            </div>

        </div>
)
}