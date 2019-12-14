import React from 'react';
import './ToWatch.css';
import Button from "../../UI/Button/Button";

const ToWatch = (props) => {
    return (
        <form action="#" className='ToWatch' onSubmit={props.formSubmit}>
            <input type="text" onChange={props.onChange} value={props.valToWatch}/>
            <Button type='submit' text='Add to wish list'/>
        </form>
    );
};

export default ToWatch;