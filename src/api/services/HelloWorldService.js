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
 executeHelloWorldPathVariableService(name){
    //console.log('executed service')
    return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`);
 }
}
export default new HelloWorldService()