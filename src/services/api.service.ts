import {IMovie} from "@/models/IMovie"
import {baseURL, urls} from "@/configs/urls";
import { IGenre } from "@/models/IGenre";


const token: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzliYWNlZGExMzc3Yzc2MDUxNjQwNjVlZWMyMWNhYSIsInN1YiI6IjYzNGEwOGJjZjE3NTljMDA3ZmMwMDkyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0bWxWpgdFYwdUojerArBVJrlu286XhRaK0fZhzPbl58'

const apiService = {

    getAllMovies: async (page: string): Promise<IMovie[]> => {
        const movieData = await fetch(baseURL + urls.allMovies + '?page=' + page , {

            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(value => value.json())

        return movieData.results;
    },

    getMoviesByGenre: async (page: string, with_genres:string): Promise<IMovie[]> => {
        const movieData = await fetch(baseURL + urls.allMovies + '?with_genres=' + with_genres + '&page=' +page, {

            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(value => value.json())

        return movieData.results;
    },

    getMoviesBySearch: async (page: string, query:string ): Promise<IMovie[]> => {
        const movieData = await fetch(baseURL + urls.searchMovie + '?query=' + query + '&page=' +page, {

            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(value => value.json())

        return movieData.results;
    },

    getGenres:async():Promise<IGenre[]> =>{
        const genres = await fetch(baseURL + urls.genres, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(value => value.json())
            .then(value => value.genres)
        return genres;
    }

}
export {
    apiService
}