import React from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import SecondContainer from "./containers/SecondContainer/SecondContainer";
import Main from "./containers/Main/Main";
import About from "./containers/About/About";

const App = () => {
  return (
      <BrowserRouter>
        <header className='Main-header'>
          <ul>
            <li><NavLink className='NavLink' exact to='/'>Main</NavLink></li>
            <li><NavLink className='NavLink' to='/about'>About Me</NavLink></li>
            <li><NavLink className='NavLink' to='/second-page'>Go to the second page</NavLink></li>
          </ul>
        </header>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/about' component={About}/>
          <Route path='/second-page' component={SecondContainer}/>
          <Route render={() => <h1>Page Not Found</h1>}/>
        </Switch>
      </BrowserRouter>
  );
};

export default App;
