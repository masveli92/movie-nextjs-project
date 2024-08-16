import React, {FC} from 'react';
import MoviesListCards from "@/components/MoviesListCards/MoviesListCards";
import {IMovie} from "@/models/IMovie";

interface IProps{
    movies: IMovie[]
}
const MoviesList :FC<IProps> =  ({movies}) => {

    return (
        <div>
            {movies.map(movie =>(<MoviesListCards
                    key={movie.id}
                    movie={movie}
                />
            ))}
        </div>
    );
};

export default MoviesList;