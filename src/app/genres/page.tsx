import GenresList from '@/components/genresList/GenresList';
import { apiService } from '@/services/api.service';
import React from 'react';

const GenresPage = async () => {

    const genresList = await apiService.getGenres()

    return (
        <div>
            <GenresList genres = {genresList}/>
        </div>
    );
};

export default GenresPage;

