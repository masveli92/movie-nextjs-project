import MoviesList from '@/components/moviesList/MoviesList';
import { apiService } from '@/services/api.service';
import React, { FC } from 'react';


const MovieByGenrePage = async ({searchParams}:any) => {
    let genre = JSON.parse(searchParams.data)

    const moviesByGenreId = await apiService.getMoviesByGenre('1', genre.id);

    return (
        <div>
            <MoviesList movies={moviesByGenreId}/>
        </div>
    );
};

export default MovieByGenrePage;