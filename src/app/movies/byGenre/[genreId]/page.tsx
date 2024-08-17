import MoviesList from '@/components/moviesList/MoviesList';
import { apiService } from '@/services/api.service';
import React, { FC } from 'react';


const MovieByGenrePage = async ({searchParams}:any) => {
    let genre = JSON.parse(searchParams.data)
    console.log(genre.id)

    const moviesByGenreId = await apiService.getMoviesByGenre('1', genre.id);


    return (
        <div>
            filtered movie page
            <MoviesList movies={moviesByGenreId}/>
        </div>
    );
};

export default MovieByGenrePage;