import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Main from "./containers/Main/Main";
import About from "./containers/About/About";
import CountriesInfo from "./containers/Portfolio/CountriesInfo/CountriesInfo";
//todo: can't solve problem with z-index
class App extends Component{
  state = {
    workFlag: false
  };
  workFlagFalse = () => {
    this.setState({workFlag: false});
  };
  workFlagHandler = () => {
    this.setState(prevState => {
      return {workFlag: !prevState.workFlag}
    });
  };
  render(){
    const burgerButton = ['NavLink'];
    if(this.state.workFlag){
      burgerButton.push('active');
    }
    const burgerClass = burgerButton.join(' ');
    return (
        <BrowserRouter>
          <header className='Main-header'>
            <ul>
              <li><NavLink onClick={this.workFlagFalse} className='NavLink' exact to='/'>Main</NavLink></li>
              <li><NavLink onClick={this.workFlagFalse} className='NavLink' to='/about'>About Me</NavLink></li>
              <li className='BurgerWrapper'>
                <span className={burgerClass} onClick={this.workFlagHandler}>Wanna see my works?</span>
                <ul className='Burger' style={{transform: this.state.workFlag ? 'translateY(0)':'translateY(-150%)', transitionDuration: '1s'}}>
                  <li><NavLink onClick={this.workFlagFalse} className='NavLink' to='/countries-info'>Some info about countries</NavLink></li>
                  <li><NavLink onClick={this.workFlagFalse} className='NavLink' to='/kkjkj'>second</NavLink></li>
                  <li><NavLink onClick={this.workFlagFalse} className='NavLink' to='/kkjkj'>third</NavLink></li>
                  <li><NavLink onClick={this.workFlagFalse} className='NavLink' to='/kkjkj'>fourth</NavLink></li>
                </ul>
              </li>
            </ul>
          </header>
          <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/about' component={About}/>
            <Route path='/countries-info' component={CountriesInfo}/>
            <Route render={() => <h1>Page Not Found</h1>}/>
          </Switch>
        </BrowserRouter>
    );
  }
}



export default App;
