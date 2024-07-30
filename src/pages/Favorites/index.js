import { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Favorites(){

    const [movies, setMovies] = useState([]);

    function removeMovie(id){
        let moviesFilter = movies.filter((item) => {
            return(item.id !== id);
        })
        setMovies(moviesFilter);
        localStorage.setItem("@gomovie", JSON.stringify(moviesFilter));
        toast.success("Movie removed successfully");
    }

    useEffect(()=>{
        const myList = localStorage.getItem("@gomovie");
        setMovies(JSON.parse(myList) || []);
    }, []);

    return(
        <div className='my-movies'>
            <h1>Favorites</h1>

            {movies.length === 0 && <span>You don't have any saved movies</span>}

            <ul>
                {movies.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/movie/${item.id}`}>See details</Link>
                                <button onClick={()=>removeMovie(item.id)}>Remove</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favorites;