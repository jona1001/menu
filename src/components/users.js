import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {HomeFillIcon, FileDirectoryIcon, PersonIcon, RepoIcon} from '@primer/octicons-react'

export default class users extends Component {
    render() {
        return (
            <div>
                <div>
                <div class="sidenav">
                   <Link className="navbar-Link" to="/">
                    <HomeFillIcon verticalAlign="middle" size={24}/> home
                    </Link>
                    <Link className="navbar-Link" to="/users">
                    <PersonIcon verticalAlign="middle" size={24}/>Usuarios
                    </Link>
                    <Link className="navbar-Link" to="/cliens">
                    <RepoIcon verticalAlign="middle" size={24} />Clientes
                    </Link>
                    <Link className="navbar-Link" to="/docs">
                    <FileDirectoryIcon verticalAlign="middle" size={24}/> Documents
                    </Link>
                </div>
                </div>
                <div class="main">
                    <h2>Usuarios</h2>
                    <p>Lista de Usuarios</p>
                </div>
            </div>
        )
    }
}
