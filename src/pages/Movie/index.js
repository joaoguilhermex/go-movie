import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import './style.css';
import { toast } from "react-toastify";

function Movie(){
    const {id} = useParams();
    const navigation = useNavigate();

    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadMovie(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "88dc86e0f411008ea2bd7d44edb120c8",
                    language: "en-US",
                }
            })
            .then((response)=>{
                setMovie(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log('Not found movie');
                navigation("/", { replace: true});
                return;
            })
        }
        loadMovie();

        return () => {

        }
    }, [id, navigation])

    function saveMovie(){
        const myList = localStorage.getItem("@gomovie");

        let savedMovies = JSON.parse(myList) || [];

        const hasMovie = savedMovies.some((savedMovies)=>savedMovies.id === movie.id);

        if(hasMovie){
            toast.warn("This movie is already on the list");
            return;
        }

        savedMovies.push(movie);
        localStorage.setItem("@gomovie", JSON.stringify(savedMovies));
        toast.success("Movie saved successfully");
    }

    if(loading){
        return(
            <div className="movie-info">
                <h1>Loading details...</h1>
            </div>
        )
    }

    return(
        <div className="movie-info">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />

            <h3>Overview</h3>
            <span>{movie.overview}</span>
            <strong>Vote average: {movie.vote_average} / 10</strong>

            <div className="area-buttons">
                <button onClick={saveMovie}>Save</button>
                <button>
                    <a target="blank" rel="external noreferrer" href={`https://youtube.com/results?search_query=${movie.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Movie;