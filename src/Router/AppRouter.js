import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/Login'
import SignUp from '../components/SignUp'



function AppRouter() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/signup' component={SignUp}/>
                    <Route  path='/home' component={Home}/>
                </Switch>
            </Router>
           

            
        </div>
    )
}

export default AppRouter
