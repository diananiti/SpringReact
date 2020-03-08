
import React,{Component}from 'react'
import {Route,Redirect} from 'react-router-dom'

import AuthentificationService from "./AuthentificationService.js"
class AuthenticatedRoute extends Component{
    render(){
if (AuthentificationService.isUserLoggedIn()){
    return <Route {... this.props} />
    }else{
      return  <Redirect to="/login"/>
    }
}
}
export default AuthenticatedRoute