import MovieList from '../components/MovieList';
import MovieCreate from '../components/MovieCreate';
import { MovieProvider } from "../context/MovieContext"
import Button from '@mui/material/Button';


export default function Movies() {

    return (
        <MovieProvider>
            <Button variant="outlined" color='error' size='large'>C# och React</Button>
            <MovieList />
            <MovieCreate />
        </MovieProvider>
    )
}