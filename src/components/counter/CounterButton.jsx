import React,{Component} from 'react';
import './CounterButton.css'
import propTypes from 'prop-types';

class Counter extends Component{

    constructor(){
        super();
        this.state={
            counter:0
        }
        this.increment=this.increment.bind(this);
    }

    render(){
        return (
          <div className="Counter">
          <CounterButton by={1} incrementMethod={this.increment}>
          </CounterButton>
          <CounterButton by={7}incrementMethod={this.increment}>
          </CounterButton>
          <CounterButton by={17}incrementMethod={this.increment}>
          </CounterButton>
          <span className="count">
              {this.state.counter}
            </span>
          </div>
        );
        }
        increment(by) {
            //console.log(`increment from parent -${by}`)
            this.setState({
                counter:this.state.counter+by
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
    }

render(){
    return (
        <div className="counter">
            <button onClick={this.increment}>
                +{this.props.by}
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


}
CounterButton.defaultProps={
    by:1
}
CounterButton.propTypes={
    by:propTypes.number
}
export default Counter