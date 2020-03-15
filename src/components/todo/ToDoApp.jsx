import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AuthentificationService from './AuthentificationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListToDosComponent from './ListTodosComponent.jsx'

import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
//import HeaderComponent from './HeaderComponent.jsx'

class ToDoApp extends Component {
    render() {
        return (
            <div className="ToDoApp">
                <Router>
                    <>
                        <HeaderComponent></HeaderComponent>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} ></Route>
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute path="/todos" component={ListToDosComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            <Route component={ErrorComponent}></Route>
                        </Switch>
                        <FooterComponent></FooterComponent>
                    </>
                </Router>

                {/*<LoginComponent></LoginComponent>
<WelcomeComponent>
</WelcomeComponent>*/}
            </div>
        )
    }
}


class HeaderComponent extends Component {


    render() {
        const isUserLoggedIn = AuthentificationService.isUserLoggedIn();
        console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar-expand-md navbar-dark  bg-dark">
                    <div>
                        <a href="http://www.google.com" className="navbar=brand">something</a>
                    </div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li ><Link className="nav-link" to="/welcome/diana">Home</Link>

                        </li>}
                        {isUserLoggedIn && <li ><Link className="nav-link" to="/todos">Todos</Link>

                        </li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li ><Link className="nav-link" to="/login">Login</Link>

                        </li>
                        {isUserLoggedIn && <li ><Link className="nav-link" to="/logout" onClick={AuthentificationService.logout}>Logout</Link>
                            {/* mapping on click event to this method call , not the method  which means no () is neccessary*/}

                        </li>}
                    </ul>
                </nav>
            </header>


        )
    }
}




export default ToDoApp