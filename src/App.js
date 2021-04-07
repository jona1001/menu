import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import users from './components/users';
import Documents from './components/Documents';
import home from './components/home';
import Clientes from './components/Clientes';

function App() {
    return (
        <div>
            <Router>
                <Navigation />
                <div>
                    <Route path="/" exact component={home} />
                    <Route path="/users" exact component={users} />
                    <Route path="/docs" exact component={Documents} />
                    <Route path="/cliens" exact component={Clientes} />
                </div>
            </Router>
        </div>

    );
}

export default App;