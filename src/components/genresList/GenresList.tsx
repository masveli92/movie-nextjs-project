import { IGenre } from '@/models/IGenre';
import { apiService } from '@/services/api.service';
import React from 'react';

const GenresList = async () => {
    const genresList = await apiService.getGenres()
    console.log(genresList)
    return (
        <div>
            {genresList.map(genre => (<div key={genre.id}><p>{genre.name}</p></div>))}
        </div>
    );
};

export default GenresList;