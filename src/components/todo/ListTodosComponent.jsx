
import React,{Component}from 'react'
import ToDoDataService from '../../api/services/ToDoDataService.js'
// import {Route,Redirect} from 'react-router-dom'
 import AuthentificationService from './AuthentificationService.js'
class ListToDosComponent extends Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            todos:
                [
                //     { id: 1, description: 'Learn Mathemathics', done: false, targetDate: new Date() },
                //     { id: 2, description: 'Learn Information Modelling', done: false, targetDate: new Date() },
                //     { id: 3, description: 'Learn Physics', done: false, targetDate: new Date() },
                // 
            ]
        }
    }

    //lifecycle
componentWillUnmount(){
    console.log("componentUnmountMount")
}

shouldComponentUpdate(nextProps,nextState){
    console.log('shouldComponentUpdate')
    console.log(nextProps)
    console.log(nextState)
    return false;
}
    componentDidMount(){
        console.log("componentDidMount")
        let username=AuthentificationService.getLoggedInUserName();
        ToDoDataService.retrieveAllTodos(username)
        .then(
response=>{this.setState({todos:response.data})
    //console.log(response);
}

        ) 
         //if its successfull
    }

    

    render() {
console.log("its rendering")
        return (


            <div>
                <h1>List  Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>


                                <th>description</th>
                                <th>is comepleted</th>
                                <th>targetDate</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map(
                                todos => <tr key={todos.id}>

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
                </div>
            </div>)
    }
}
export default ListToDosComponent