import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Home from './Home';
import Accounts from './Accounts';
import List from './List';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

function Index() {
    return (
        <div className="container">
            <Router>
                <Header/>
                <Switch>
                    <Route exact path = "/">
                        <Home/>
                    </Route>

                    <Route exact path = "/accounts">
                        <Accounts/>
                    </Route>

                    <Route exact path = "/list">
                        <List/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
