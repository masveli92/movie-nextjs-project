'useclient'
import React, {FC} from 'react';
import {posterURL} from "@/configs/urls";
import {IMovie} from "@/models/IMovie";
import { StarsRating } from '../starsRating/StarsRating';
import css from './MovieInfo.module.css'


interface IProps{
    movie: IMovie
}

const MovieInfo:FC<IProps> = ({movie}) => {




    return (
        <div className={css.container}>
            <div><img className={css.image} src={posterURL + movie.poster_path} alt="poster"/></div>
            <div>
            <h2>{movie.title}</h2>
            <h4><StarsRating>{movie.vote_average}</StarsRating></h4>
            <div>{movie.overview}</div>
            </div>
        </div>
    );
};

export default MovieInfo;