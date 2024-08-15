import React, {FC} from 'react';
import {posterURL} from "@/configs/urls";
import Link from "next/link";
import {IMovie} from "@/models/IMovie";

interface IProps{
    movie: IMovie
}
const MoviesListCards:FC<IProps> = ({movie}) => {
    return (
        <div>
            <div>
                 <Link href={{pathname: '/movies/' + movie.id, query: {data:JSON.stringify(movie)}}}>
                 <img src={posterURL + movie.poster_path} alt="poster"/>
                 <h3>{movie.title} </h3>
                 </Link>

            </div>
        </div>
    );
};

export default MoviesListCards;