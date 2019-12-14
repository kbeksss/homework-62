import React, {Component} from 'react';
import './Movie.css';
import Button from "../../../UI/Button/Button";
class Movie extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.valTitle !== this.props.valTitle;
    }
    render() {
        return (
            <li className='Movie'>
                <input type="text" onChange={this.props.changeTitle} value={this.props.valTitle}/>
                <Button type='button' onClick={this.props.remove} text='X'/>
            </li>
        );
    }
}

export default Movie;