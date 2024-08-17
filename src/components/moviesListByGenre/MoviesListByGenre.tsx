
import { IGenre } from '@/models/IGenre';
import { IMovie } from '@/models/IMovie';
import React, { FC } from 'react';


interface IProps{
    movie: IMovie[]
}

const MoviesListByGenre:FC<IProps> = ({ movie}) => {







    return (
        <div>
            {/*<div>{genre.name}</div>*/}

        </div>
    );
};

export default MoviesListByGenre;