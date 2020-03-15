import { withRouter } from "react-router-dom";
import React,{Component}from 'react'
import {Route,Redirect} from 'react-router-dom'
import AuthentificationService from "./AuthentificationService.js"
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'
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
export default withRouter(HeaderComponent);