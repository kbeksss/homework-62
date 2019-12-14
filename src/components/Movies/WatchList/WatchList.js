import React from 'react';
import './WatchList.css';

import Movie from "./Movie/Movie";

const WatchList = (props) => {
    return (
        <div className='WatchList'>
            <ul>
                {props.movies.map(movie => (
                    <Movie
                        key={movie.id}
                        valTitle={movie.title}
                        changeTitle={(event) => props.changeTitle(event, movie.id)}
                        remove={() => props.removeFilm(movie.id)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default WatchList;