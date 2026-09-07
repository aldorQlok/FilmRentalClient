import { useEffect, useState } from "react";
import axios from 'axios';

export default function MovieList() {
    const [movies, setMovies] = useState([]);

    async function getMovieList() {
        try {
            const response = await axios.get('https://localhost:7063/api/Movies')
            setMovies(response.data)
            console.log(response.data);
        } catch (error) {
            console.log("Error fetching movies:", error)
        }
    }

    useEffect(() => {
        getMovieList();
    }, [])

    return (
        <>
            <h1>List of Movies!</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.movieId}>
                        <p><b>Movie title:</b> {movie.title}</p>
                        <span><b>Released:</b> {movie.releaseYear}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}