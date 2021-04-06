
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navigation extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse" >
                <ul className="navbar-nav ml-auto">
                 <li className="nav-item active">
                    <Link className="navbar-Link" to="/">
                        home
                    </Link>
                 </li> 
                 <li className="nav-item">
                    <Link className="navbar-Link" to="/users">
                        users 
                    </Link>
                 </li>
                 <li className="nav-item">
                    <Link className="navbar-Link" to="/docs">
                        Documents
                    </Link>
                 </li>
                </ul>

            </div>
            
        )
    }
}
