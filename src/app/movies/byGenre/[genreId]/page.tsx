import MoviesList from '@/components/moviesList/MoviesList';
import { apiService } from '@/services/api.service';
import React, { FC } from 'react';


const MovieByGenrePage = async ({searchParams}:any) => {
    let genre = JSON.parse(searchParams.data)
    console.log(genre.id)

    const moviesByGenreId = await apiService.getAllMovies('3');

    const filtered =  moviesByGenreId.filter(movie => movie.genre_ids.includes(genre.id))
    console.log(filtered)

    return (
        <div>
            filtered movie page
            <MoviesList movies={filtered}/>
        </div>
    );
};

export default MovieByGenrePage;