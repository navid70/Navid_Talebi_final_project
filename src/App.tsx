import React from 'react';
import {Route, Link, Switch, BrowserRouter} from "react-router-dom"
import {NavbarComponent, NavbarBottom, Menu, Footer} from './components';
import {routers} from './routers/routers';
import "./App.scss"


function App() {

    return (
        <>

            <BrowserRouter>
                <NavbarComponent/>
                <NavbarBottom/>
                <Menu/>
                <Switch>
                    {routers.map(({path, exact, Component}, index) => (
                        <Route key={index} path={path} exact={exact} render={(props) => <Component {...props}/>}/>
                    ))}
                </Switch>

                <Footer/>
            </BrowserRouter>


        </>
    );
}

export default App;
