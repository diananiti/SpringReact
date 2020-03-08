
import React,{Component}from 'react'
import {Route,Redirect} from 'react-router-dom'
import AuthentificationService from './AuthentificationService.js'
class ListToDosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
                [
                    { id: 1, description: 'Learn Mathemathics', done: false, targetDate: new Date() },
                    { id: 2, description: 'Learn Information Modelling', done: false, targetDate: new Date() },
                    { id: 3, description: 'Learn Physics', done: false, targetDate: new Date() },
                ]
        }
    }
    render() {

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