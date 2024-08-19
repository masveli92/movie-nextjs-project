import React, {FC} from 'react';
import Link from "next/link";
import {posterURL} from "@/configs/urls";
import {IMovie} from "@/models/IMovie";
import css from './MoviesListCards.module.css'
import { StarsRating } from '../starsRating/StarsRating';

interface IProps{
    movie: IMovie
}
const MoviesListCards:FC<IProps> = ({movie}) => {
    return (
            <div className={css.movieBlock}>
                 <Link href={{pathname: '/movies/' + movie.id, query: {data:JSON.stringify(movie)}}}>
                 <img className={css.movieBlockImg} src={posterURL + movie.poster_path} alt="poster"/>
                 <div><StarsRating>{movie.vote_average}</StarsRating></div>
                 <p>{movie.title} </p>
                 </Link>
            </div>
    );
};

export default MoviesListCards;