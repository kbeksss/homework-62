import React, {Fragment} from 'react';
import './Main.css';
const Main = () => {
    return (
        <Fragment>
            <div className='Main'>
                <div className='MeWrapper'>
                    <div>Hello,</div>
                    <div className='Name'>I'm <span>Beks</span>,</div>
                    <div className='Job'>a beginner <span>Web Developer.</span></div>
                    <div>Welcome to my page!</div>
                </div>
            </div>
        </Fragment>
    );
};
export default Main;