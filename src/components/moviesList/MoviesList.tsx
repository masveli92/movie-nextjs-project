import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import css from './MoviesList.module.css'
import MoviesListCards from '../moviesListCards/MoviesListCards';



interface IProps{
    movies: IMovie[]
}
const MoviesList :FC<IProps> =  ({movies}) => {

    return (
        <div className={css.movieList}>
            {movies.map(movie =>(<MoviesListCards
                    key={movie.id}
                    movie={movie}
                />
            ))}
        </div>
    );
};

export default MoviesList;