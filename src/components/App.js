import React, { Component } from 'react';
import { Switch, Route } from 'react-router' 
import { HashRouter } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import Details from './Details';
import Users from './Users';
import Computers from './Computers';
import './App.css';

class App extends Component {
    constructor() {
        super(); 
        this.state = {
            users: [],
            computers: []
        };
    }

    componentDidMount() {
        fetch(`https://sb-backendapi.azurewebsites.net/api/Computers`)
            .then(res => res.json())
            .then(json => this.setState({ computers: json }))
            .catch(error => console.error(`Fetch Error =\n`, error));

            fetch(`https://sb-backendapi.azurewebsites.net/api/Users`)
            .then(res => res.json())
            .then(json => this.setState({ users: json }))
            .catch(error => console.error(`Fetch Error =\n`, error));
    }

    render() {
        return (
            <HashRouter>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route path="/" exact render={props => <Dashboard userCount={this.state.users.length} computerCount={this.state.computers.length} />} />
                        <Route path="/computers/:id" render={props => <Details computers={this.state.computers} match={props.match} />} />
                        <Route path="/computers" exact render={props => <Computers computers={this.state.computers} /> } />
                        <Route path="/users/:id" render={props => <Details users={this.state.users} match={props.match} />} />
                        <Route path="/users" exact render={props => <Users users={this.state.users} />} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;
