import React, { useEffect, useState, useCallback } from 'react';

import './App.css';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';

function App() {
  const [dummyMovies, setDummyMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMoviesList();
  }, []);

  const getMoviesList = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const moviesList = await fetch('https://react-guide-9f34b.firebaseio.com/movies.json');
      if (moviesList.ok) {
        const res = await moviesList.json();
        const loadedMovies = [];
        for (let r in res) {
          loadedMovies.push(res[r]);
        }
        setDummyMovies(loadedMovies);
      } else {
        throw new error('Something went wrong!')
      }
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
      console.log(error);
    }
  }, [])

  const fetchMoviesHandler = (event) => {
    event.preventDefault();
    getMoviesList();
  }

  async function addMovieHandler(movieData) {
    const movieBody = { ...movieData, id: Math.random() * 1000 };
    setIsLoading(true);
    setError(null);
    const res = await fetch('https://react-guide-9f34b.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movieBody),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const moviesListUpdated = [...dummyMovies];
    moviesListUpdated.unshift(movieBody);
    setDummyMovies(moviesListUpdated);
    setIsLoading(false);
  }

  let content = <p>Found no movies.</p>;

  if (dummyMovies.length > 0) {
    content = <MoviesList movies={dummyMovies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }


  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
