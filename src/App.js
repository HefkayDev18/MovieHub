import React from'react';
import './App.css';
import { useState, useEffect } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = 'http://www.omdbapi.com?apikey=1572a283';

const App = () => {

  const [ movies,setMovies ] = useState([]);
  const [ searchedItem, setSearchedItem ] = useState('');

  const searchedMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`); 
    const data = await response.json(); 

    // console.log(data.Search);
    setMovies(data.Search);
  }

  useEffect(() => {
    searchedMovie('Spiderman');  
  }, []);
  
  return (
    <div className="app">
      <h1>MovieHub</h1>

      <div className="search">
        <input placeholder="Search for movies" value={searchedItem} onChange={(e) => setSearchedItem(e.target.value)}>
        </input>
        <img src={SearchIcon} alt="search" onClick={() => searchedMovie(searchedItem)}/>
      </div>

      {
        movies?.length > 0 ? (
        <div className = "container">
          {/* <MovieCard movie1={movies[0]}/> */}
          {movies.map((movie) => (
            <MovieCard movieX={movie}/>
          ))}
        </div>
        ) : (
          <div className='empty'>
            <h2>No movies to be shown</h2>
          </div>
        )
      }

      
    </div>
  );
}

export default App;
