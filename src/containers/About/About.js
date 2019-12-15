import React, {Fragment} from 'react';
import './About.css';

const About = () => {
    return (
        <Fragment>
            <div className='About'>
                <div className='AboutWrapper'>
                    <h2>About me</h2>
                    <h3>Who am I</h3>
                    <div className="AboutItems">
                        <div className='AboutElement'>
                            <h3>Who am I?</h3>
                            <p>I am a beginner Web Developer that wants to enter IT World. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi consectetur cumque debitis deserunt eaque earum exercitationem harum, iste itaque, magni minus mollitia neque nisi qui similique sit vero voluptatem? Ad eius error ex impedit incidunt itaque officiis quod tempore!</p>
                        </div>
                        <div className='AboutElement'>
                            <h3>Why Me?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem consequuntur culpa dicta hic id, illo impedit ipsum itaque iusto magnam mollitia natus nulla obcaecati pariatur praesentium recusandae reprehenderit sit suscipit, ut velit vero?</p>
                        </div>
                        <div className='AboutElement'>
                            <h3>Who IT?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dicta doloribus eaque impedit perferendis perspiciatis voluptates. Accusantium animi commodi consequuntur cum delectus eum, facere facilis harum id itaque minima molestiae non provident quaerat quasi, suscipit voluptates. Adipisci aspernatur at consectetur dolore facere itaque laudantium neque, odio quaerat similique, velit veritatis?</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default About;