import React, {Component} from 'react';
import './MoviesContainer.css';

import nanoid from 'nanoid';
import ToWatch from "../../../components/Movies/ToWatch/ToWatch";
import WatchList from "../../../components/Movies/WatchList/WatchList";

class MoviesContainer extends Component {
    state = {
        movies: [

        ],
        wishList: '',
    };
    componentDidMount() {
        if(localStorage.getItem('movies')){
            this.setState({movies: JSON.parse(localStorage.getItem('movies'))});
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.setItem('movies', JSON.stringify(this.state.movies));
    }
    changeWishList = (event) => {
        event.preventDefault();
        this.setState({wishList: event.target.value});
    };
    addCurrentWishList = () => {
        const movies = [...this.state.movies];
        if(this.state.wishList === ''){
            alert('Your input is empty');
        } else if(this.state.movies.length === 0){
            movies.push({title: this.state.wishList, id: nanoid()});
            this.setState({movies, wishList: ''});
        }else if (this.state.movies.length !== 0 && movies[movies.length - 1].title !== this.state.wishList){
            movies.push({title: this.state.wishList, id: nanoid()});
            this.setState({movies, wishList: ''});
        } else {
            alert('You\'ve already have it on your wish list');
        }
    };
    changeTitle = (event, id) => {
        event.persist();
        this.setState(prevState => {
            const movies = [...prevState.movies];
            const index = movies.findIndex(film => film.id === id);
            const film = {...movies[index]};
            film.title = event.target.value;
            movies[index] = film;
            return {...prevState, movies}
        });
    };
    removeFilm = id => {
        const movies = [...this.state.movies];
        const index = movies.findIndex(film => film.id === id);
        movies.splice(index, 1);
        this.setState({movies});
    };
    render() {
        return (
            <div className='MoviesContainer'>
                <ToWatch
                    onChange={(event) => this.changeWishList(event)}
                    formSubmit={this.addCurrentWishList}
                    valToWatch={this.state.wishList}
                />
                <WatchList
                    movies={this.state.movies}
                    changeTitle={this.changeTitle}
                    removeFilm={this.removeFilm}
                />
            </div>
        );
    }
}

export default MoviesContainer;