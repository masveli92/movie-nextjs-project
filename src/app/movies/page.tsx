import MoviesList from "@/components/moviesList/MoviesList";
import {apiService} from "@/services/api.service";


const MoviesPage = async () => {
    const allMoviesData = await apiService.getAllMovies('1' )


    return (
        <div >
            <MoviesList movies={allMoviesData}/>
        </div>
    );
};

export default MoviesPage;