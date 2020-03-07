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



constructor(props){//any properties are passed on through super class constructor
super(props);
this.state={
    username:'diana',
    password:''
}
//this.handleUsernameChange=this.handleUsernameChange.bind(this);
//this.handlePasswordChange=this.handlePasswordChange.bind(this);
this.handleChange=this.handleChange.bind(this);
}

handleChange(event){
    console.log(event.target.name);//gives the value which is being changed(int he console debug)
    this.setState(
        {
          [event.target.name]:event.target.value
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

    render(){
        return(
            <div className="ToDoApp">
           User Name: <input type="text" name ="username" value= {this.state.username} onChange={this.handleChange}/>
           Password : <input type="password" name="password"value={this.state.password} onChange={this.handleChange}/>
           <button>
               Login
           </button>
           </div>
        );
    }
}


export default ToDoApp