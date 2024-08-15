import React from 'react';
import MoviesList from "@/components/moviesList/MoviesList";
import {apiService} from "@/services/api.service";

const MoviesPage = async () => {
    const allMovies = await apiService.getAllMovies('1');

    return (
        <div >
            <MoviesList movies={allMovies}/>
        </div>
    );
};

export default MoviesPage;