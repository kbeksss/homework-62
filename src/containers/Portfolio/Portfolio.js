import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

class Portfolio extends Component {
    render() {
        return (
            <BrowserRouter>
                My portfolio will be here
                <Switch>
                    <Route path='/dasfdasf'/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Portfolio;