import { apiService } from '@/services/api.service';
import React, { FC } from 'react';
import css from './GenresList.module.css'
import Link from 'next/dist/client/link';
import { IGenre } from '@/models/IGenre';


interface IProps{
    genres: IGenre[]
}

const GenresList:FC <IProps> = async ({genres}) => {


    return (
        <div className={css.genreBar}>
            {genres.map(genre => (
                <Link href={{pathname: '/movies/byGenre/' + genre.id, query: {data:JSON.stringify(genre)}}}>
                <p>{genre.name}</p>
                </Link>
                ))}
        </div>
    );
};

export default GenresList;