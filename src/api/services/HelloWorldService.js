import axios from 'axios'

class HelloWorldService{
  executeHelloWorldService(){
     return axios.get('http://localhost:8080/hello-world');
     //returns a promise
  }
  executeHelloWorldBeanService(){
    return axios.get('http://localhost:8080/hello-world-bean');
    //returns a promise
 }
}
export default new HelloWorldService()