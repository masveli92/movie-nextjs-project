import React from 'react';
import MovieInfo from "@/components/movieInfo/MovieInfo";

const MoviePage = ({searchParams}: any) => {

    let movie = JSON.parse(searchParams.data);

    console.log(movie)

    return (
        <div>
            <MovieInfo movie={movie}/>
        </div>

);
};

export default MoviePage;