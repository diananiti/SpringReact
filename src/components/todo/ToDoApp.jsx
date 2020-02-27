import React , {Component} from 'react'

class ToDoApp extends Component{
    render(){
        return (
            <div className="ToDoApp">
<LoginComponent></LoginComponent>
            </div>
        )
    }
}


class LoginComponent extends Component{
constructor(props){//any properties are passed on through super class
super(props);
this.state={
    username:'diana',
    password:''
}
this.handleUsernameChange=this.handleUsernameChange.bind(this);
}
handleUsernameChange(event){
console.log(event.target.value);
this.setState(
    {
        username:event.target.value
    }
)
}

    render(){
        return(
            <div>
           User Name: <input type="text" namae ="username" value= {this.state.username} onChange={this.handleUsernameChange}/>
           Password : <input type="text" name="password"value={this.state.password} onChange={this.handlePasswordChange}/>
           <button>
               Login
           </button>
           </div>
        );
    }
}


export default ToDoApp