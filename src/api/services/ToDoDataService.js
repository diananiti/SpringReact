import axios from 'axios'
class ToDoDataService{
    retrieveAllTodos(name){
        return axios.get(`http://localhost:8080/users/${name}/todos`);
        //returns a promise
     }
}

export default new ToDoDataService()