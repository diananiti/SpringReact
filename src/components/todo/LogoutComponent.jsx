
import React,{Component}from 'react'
import {Route,Redirect} from 'react-router-dom'
import AuthentificationService from "./AuthentificationService.js"
class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>
                    You are logged out
              </h1>
                <div className="container">Thank you </div>
            </div>
        )
    }
}
export default LogoutComponent
