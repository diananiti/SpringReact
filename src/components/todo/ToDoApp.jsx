import React , {Component} from 'react'
import {BrowserRouter as Router, Route , Switch,Link} from 'react-router-dom'
class ToDoApp extends Component{
    render(){
        return (
            <div className="ToDoApp">
                <Router>
<>
<Switch>
<Route path="/" exact component ={ LoginComponent} ></Route>
                 <Route path="/login" component={LoginComponent}/> 
                 <Route path="/todos" component={ListToDosComponent}/> 
                    <Route path="/welcome/:name" component={WelcomeComponent}/>
                   
                    <Route  component={ErrorComponent}></Route>
                    </Switch>
</>
                </Router>

{/*<LoginComponent></LoginComponent>
<WelcomeComponent>
</WelcomeComponent>*/}
            </div>
        )
    }
}

class ListToDosComponent extends Component {
constructor(props){
super(props)
this.state={
   todos:
   [
   { id:1,description:'Learn Mathemathics',done:false, targetDate: new Date()},
   { id:2,description:'Learn Information Modelling',done:false, targetDate: new Date()},
   { id:3,description:'Learn Physics',done:false, targetDate: new Date()},
   ]
}
}
    render(){
        
        return (
            
       
         <div>
         <h1>List  Todos</h1> 
  <table>
    <thead>
        <tr>
            <id>
                <th>
                    id
                </th>
                <th>
                description
                </th>
                <th>
                    is comepleted
                </th>
                <th>
                targetDate
                </th>
            </id>
        </tr>
    </thead>
    <tbody>
        {this.state.todos.map(
            todos=> <tr>
            <td>
            {todos.id}
            </td>
            <td>
            {todos.description}
            </td>
            <td>
            {todos.done.toString()}
            </td>
            <td>
            {todos.targetDate.toString()}
            </td>
        </tr>
        )}
        
    </tbody>
</table> 

         </div>) 
    }
}
class WelcomeComponent extends Component {
    render(){
        return <div>
            Welcome 
              {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>
        </div>
    }
}

function ErrorComponent(){
    return <div>Error , contact support at jdfkjsfkdsk!</div>
}

class LoginComponent extends Component{



constructor(props){//any properties are passed on through super class constructor
super(props);
this.state={
    username:'diana',
    password:'',
    hasLoginFailed:false,
    showSuccessMessage:false
}
//this.handleUsernameChange=this.handleUsernameChange.bind(this);
//this.handlePasswordChange=this.handlePasswordChange.bind(this);
this.handleChange=this.handleChange.bind(this);
this.loginClicked=this.loginClicked.bind(this);
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
loginClicked(){
    //
   if(this.state.username==='diana'&& this.state.password==='password') {
//console.log('Succesful')
this.props.history.push(`/welcome/${this.state.username}`) //redirecting to welcome after click


//this.setState({showSuccessMessage:true})
//this.setState({hasLoginFailed:false})
}
else{
console.log('Failed')
this.setState({showSuccessMessage:false})
this.setState({hasLoginFailed:true})
}
//console.log(this.state);
}

    render(){
        return(
            <div className="ToDoApp">
             {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCredentials> */}
          {this.state.hasLoginFailed&& <div>Invalid Credentials</div>}
            {/* <showSuccessMessage showSuccessMessage={this.state.showSuccessMessage}></showSuccessMessage> */}
            {this.state.showSuccessMessage && <div> Succesful Login</div>}
            
           User Name: <input type="text" name ="username" value= {this.state.username} onChange={this.handleChange}/>
           Password : <input type="password" name="password"value={this.state.password} onChange={this.handleChange}/>
           <button  onClick={this.loginClicked}>
               Login
           </button>
           </div>
        );
    }
    
}

// function ShowInvalidCredentials(props){
//  if(props.hasLoginFailed){
// return <div>Invalid Credentials</div>
//  }  
//  return  null;    
// }

// function LoginSuccessfull(props){
//     if(props.showSuccessMessage){
//         return <div>Successful Login</div>
//     }
//     return null;
// }
export default ToDoApp