import React from 'react';

import MoviesList from '../../../components/moviesList/MoviesList';
import { apiService } from '../../../services/api.service';


interface Params {searchParams?:{query?:string;}}

const MovieBySearchPage = async ({searchParams}:Params ) => {

    const query = searchParams?.query||'';

    const moviesBySearch = await apiService.getMoviesBySearch('1', query);

    return (
        <div>
            <MoviesList movies={moviesBySearch}/>
        </div>
    );
};

export default MovieBySearchPage;