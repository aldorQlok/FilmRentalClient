import MovieList from './components/MovieList';
import MovieCreate from './components/MovieCreate';
import './App.css'
import { MovieProvider } from "./context/MovieContext"

function App() {

  return (
    <MovieProvider>
      <MovieList />
      <MovieCreate />
    </MovieProvider>
  )
}

export default App
