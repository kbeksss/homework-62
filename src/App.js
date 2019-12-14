import React from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import SecondContainer from "./containers/SecondContainer/SecondContainer";
import Main from "./containers/Main/Main";

const App = () => {
  return (
      <BrowserRouter>
        <header className='Main-header'>
          <ul>
            <li><NavLink className='NavLink' exact to='/'>Main</NavLink></li>
            <li><NavLink className='NavLink' to='/about-us'>Go to the second page</NavLink></li>
          </ul>
        </header>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/about-us' component={SecondContainer}/>
          <Route render={() => <h1>Page Not Found</h1>}/>
        </Switch>
      </BrowserRouter>
  );
};

export default App;
