
import React,{Component}from 'react'
import HelloWorldService from '../../api/services/HelloWorldService.js'
import { BrowserRouter as  Link } from 'react-router-dom'
class WelcomeComponent extends Component {

    constructor(props){
        super(props)
        this.retrieveWelcomeMessage=this.retrieveWelcomeMessage.bind(this)
    }
    render() {
        return (
            <>
                <h1>
                    Welcome
           </h1>
                <div className="container">
                    Welcome
              {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click here to get a customised welcome message
             <button onClick={this.retrieveWelcomeMessage}
             className="btn btn-success"
             >Get Wecome Message</button>
                </div>
            </>
        )
    }
retrieveWelcomeMessage(){

 HelloWorldService.executeHelloWorldService()
 .then(response=>console.log(response)) //if the call is successfull
 //.catch()  //if the call is not successfull


    }
}
export default WelcomeComponent