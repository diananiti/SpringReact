import React,{Component} from 'react';
import './CounterButton.css'
//import propTypes from 'prop-types';

class Counter extends Component{

    constructor(){
        super();
        this.state={
            counter:0
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.reset=this.reset.bind(this);
    }

    render(){
        return (
          <div className="Counter">
          <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}>
          </CounterButton>
          <CounterButton by={7}incrementMethod={this.increment} decrementMethod={this.decrement}>
          </CounterButton>
          <CounterButton by={17}incrementMethod={this.increment} decrementMethod={this.decrement}>
          </CounterButton>
          <div> <button className="reset" onClick={this.reset}>
             Reset
       </button > </div> 
          <span className="count">
              {this.state.counter}
            </span>
          </div>
        );
        }

        reset(by){
this.setState(
    (prevState)=>{
        return {counter:0}
    }
);
        }
        increment(by) {
            //console.log(`increment from parent -${by}`)
            this.setState({
                counter:this.state.counter+by
            });
        
        }
        decrement(by){
    this.setState({
counter:this.state.counter-by
});
        }
}



class  CounterButton extends Component{

    //define the initial state in a constructor
    //state => counter 0

    constructor(){
        super();//error without super, while trying to access "this" from render method
        this.state={
            counter:0
        }

        this.increment= this.increment.bind(this);
        // so i can access it from increment method i need binding
        this.decrement=this.decrement.bind(this);
    }

render(){
    return (
        <div className="counter">
            <button onClick={this.increment}>
                +{this.props.by}
            </button>
            <button onClick={this.decrement}>
                -{this.props.by}
            </button>
            <span className="count">
              {this.state.counter}
            </span>
        </div>
    )
   
}
increment() {
    this.setState({
        counter:this.state.counter+this.props.by
    });
this.props.incrementMethod(this.props.by);
}
decrement(){
    this.setState({
counter:this.state.counter-this.props.by
});
this.props.decrementMethod(this.props.by);

}
}
//CounterButton.defaultProps={
 //   by:1
//}
//CounterButton.propTypes={
 //   by:propTypes.number
///}
export default Counter