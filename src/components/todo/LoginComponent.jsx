import React,{Component}from 'react'
import {Route,Redirect} from 'react-router-dom'
import AuthentificationService from "./AuthentificationService.js"

class LoginComponent extends Component {



    constructor(props) {//any properties are passed on through super class constructor
        super(props);
        this.state = {
            username: 'diana',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        //this.handleUsernameChange=this.handleUsernameChange.bind(this);
        //this.handlePasswordChange=this.handlePasswordChange.bind(this);

        //this is some test
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        console.log(event.target.name);//gives the value which is being changed(int he console debug)
        this.setState(
            {
                [event.target.name]: event.target.value
            }
            //whenever username is changed , the state is updated 
        )
    }
    // handleUsernameChange(event){
    // console.log(event.target.name);//gives the value which is being changed(int he console debug)
    // this.setState(
    //     {
    //       [event.target.name]:event.target.value
    //     }
    //     //whenever username is changed , the state is updated 
    // )
    // }
    // handlePasswordChange(event){
    //     console.log(event.target.value);
    //     this.setState(
    //         {
    //            password:event.target.value 
    //         }
    //     )
    // }
    loginClicked() {
        //
        if (this.state.username === 'diana' && this.state.password === 'password') {
            //console.log('Succesful')
            AuthentificationService.registerSuccessfulLogin(this.state.username, this.state.password);//pass in the username and password
            this.props.history.push(`/welcome/${this.state.username}`) //redirecting to welcome after click


            //this.setState({showSuccessMessage:true})
            //this.setState({hasLoginFailed:false})
        }
        else {
            console.log('Failed')
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }
        //console.log(this.state);
    }

    render() {
        return (
            <div >
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCredentials> */}
                    {this.state.hasLoginFailed && <div className="alert-warning">Invalid Credentials</div>}
                    {/* <showSuccessMessage showSuccessMessage={this.state.showSuccessMessage}></showSuccessMessage> */}
                    {this.state.showSuccessMessage && <div > Succesful Login</div>}

                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>
                        Login
           </button>
                </div>

            </div>
        );
    }

}
export default LoginComponent