import React, {Component} from 'react';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import ForthComponent from './components/learning-examples/ForthComponent';
//import logo from './logo.svg';
import CounterButton from './components/counter/CounterButton'
import Counter from './components/counter/CounterButton'
import ToDoApp from './components/todo/ToDoApp'
import './App.css';



class  App extends Component {
  render(){
  return (
    <div className="App">
    {/*<Counter></Counter>*/}

    <ToDoApp>

    </ToDoApp>
    
    </div>
  );
  }
}




class LearningComponents extends Component{
  render(){
    return (
      <div className="LearningComponents">
        My Hello world
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <ForthComponent></ForthComponent>
      </div>
    );
    }
}



export default App;
