import React, {FC} from 'react';
import {posterURL} from "@/configs/urls";
import {IMovie} from "@/models/IMovie";
import { IGenre } from '@/models/IGenre';

interface IProps{
    movie: IMovie
}

const MovieInfo:FC<IProps> = ({movie}) => {

    return (
        <div>
            <div><img src={posterURL + movie.poster_path} alt="poster"/></div>
            <div>{movie.title}</div>
            <div>{movie.genre_ids}</div>
            <div>{movie.overview}</div>
        </div>
    );
};

export default MovieInfo;