import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Redirect,Route} from 'react-router-dom'
import Rgister from './component/Rgister'
import Signin from './component/Signin';
import Home from './component/Home'
function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/rgister" component={Rgister}></Route>
                <Route path="/signin" component={Signin}></Route>
                <Route path="/home" component={Home}></Route>
                <Redirect from='/' to='/rgister'/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
