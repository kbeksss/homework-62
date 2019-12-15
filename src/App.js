import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Main from "./containers/Main/Main";
import About from "./containers/About/About";
import CountriesInfo from "./containers/Portfolio/CountriesInfo/CountriesInfo";
import Messenger from "./containers/Portfolio/Messenger/Messenger";
import MoviesContainer from "./containers/Portfolio/MoviesContainer/MoviesContainer";
class App extends Component{
  state = {
      showImage: true,
      workFlag: false
  };
  toggleImage = () => {
      this.setState(prevState => {
          return {showImage: !prevState.showImage}
      })
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
    const burgerButton = ['NavLink', 'BurgerButton'];
    if(this.state.workFlag){
      burgerButton.push('active');
    }
    const burgerClass = burgerButton.join(' ');
    return (
        <BrowserRouter>
          <main className='Main'>
            <aside className='Aside'>
              <div className='MyPhoto'>
                <img style={{display: this.state.showImage ? 'block': 'none'}} src={require('./my-photo.jpg')} alt="me"/>
                <p onClick={this.toggleImage} style={{position: this.state.showImage ? 'absolute' : 'static', background: this.state.showImage ? 'rgba(6, 26, 73, 0.58)' : '#022352'}}>Beks Kadyrbekov</p>
              </div>
              <ul className='Main-nav'>
                <li><NavLink onClick={this.workFlagFalse} className='NavLink' exact to='/'>Main</NavLink></li>
                <li><NavLink onClick={this.workFlagFalse} className='NavLink' to='/about'>About Me</NavLink></li>
                <li className='BurgerWrapper'>
                  <span className={burgerClass} onClick={this.workFlagHandler}>Portfolio</span>
                  <ul className='Burger' style={{transform: this.state.workFlag ? 'translateY(0)' : 'translateY(-150%)'}}>
                    <li><NavLink onClick={this.workFlagFalse} className='NavLink' to='/countries-info'>Countries</NavLink></li>
                    <li><NavLink onClick={this.workFlagFalse} className='NavLink' to='/messenger'>Messenger</NavLink></li>
                    <li><NavLink onClick={this.workFlagFalse} className='NavLink' to='/watchlist'>Watchlist</NavLink></li>
                  </ul>
                </li>
              </ul>
            </aside>
            <Switch>
              <Route path='/' exact component={Main}/>
              <Route path='/about' component={About}/>
              <Route path='/countries-info' component={CountriesInfo}/>
              <Route path='/messenger' component={Messenger}/>
              <Route path='/watchlist' component={MoviesContainer}/>
              <Route render={() => <h1>Page Not Found</h1>}/>
            </Switch>
          </main>
        </BrowserRouter>
    );
  }
}



export default App;
