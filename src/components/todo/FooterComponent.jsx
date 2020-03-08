import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AuthentificationService from './AuthentificationService.js'
class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserved Diana </span>
            </footer>
        )
    }
}
export default FooterComponent