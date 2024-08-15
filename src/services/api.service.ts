import {IMovie, IMovieData} from "@/models/IMovie"
import {baseURL, urls} from "@/configs/urls";


const token: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzliYWNlZGExMzc3Yzc2MDUxNjQwNjVlZWMyMWNhYSIsInN1YiI6IjYzNGEwOGJjZjE3NTljMDA3ZmMwMDkyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0bWxWpgdFYwdUojerArBVJrlu286XhRaK0fZhzPbl58'

const apiService = {
    getAllMovies: async (page: string): Promise<IMovie[]> => {
        const movieData:IMovieData = await fetch(baseURL + urls.allMovies, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(value => value.json())

        return movieData.results;
    }


}
export {
    apiService
}