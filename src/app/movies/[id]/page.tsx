import React from 'react';
import {posterURL} from "@/configs/urls";
import MovieInfo from "@/components/movieInfo/MovieInfo";

const MoviePage = ({searchParams}: any) => {

    let movie = JSON.parse(searchParams.data);

    return (
        <div>
            <MovieInfo movie={movie}/>
        </div>

);
};

export default MoviePage;