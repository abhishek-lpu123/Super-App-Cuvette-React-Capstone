import React, { useEffect, useState } from 'react';
import './Movies.css'
import ProfileImg from '../../assests/char-img.png'
import { useNavigate } from 'react-router-dom'

function Movies() {
  const [moviesByGenre, setMoviesByGenre] = useState({}); // Use an object to store movies by genre
  const storedGenre = JSON.parse(localStorage.getItem('selectedGenres')) || [];
  const redirectTo = useNavigate();

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      const moviesData = {};

      for (const genre of storedGenre) {
        const url = `https://api.themoviedb.org/3/search/multi?query=${genre}&language=en-US&year=2023`;

        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWM4OGFhMjM0MDRlMWMzODI3Y2RmZTNmZDI3NjRhMiIsInN1YiI6IjY0ZWU0OGU1Y2FhNTA4MDEyYjA1MzlmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0gm5P_jLnDSjQKsJDk7SSFxF46uHk77jE4Ldd_kF6Ng'
            },
          });

          if (response.ok) {
            const data = await response.json();
            moviesData[genre] = data.results.slice(0, 4);
          } else {
            console.error(`Failed to fetch movies for genre ${genre}`);
          }
        } catch (error) {
          console.error(error);
        }
      }

      setMoviesByGenre(moviesData);
    };

    if (storedGenre.length > 0) {
      fetchMoviesByGenre();
    }
  }, [storedGenre]);

  const handleNextPageClick = () => {
    redirectTo('/category')
}

  return (
    <div>
      <img className='profile_image' src={ProfileImg} alt='profile' />
      <h1 className='genreHeader'>Super App</h1>
      <h2 className='genreHead'>Entertainment according to your choice</h2>
      {Object.keys(moviesByGenre).map((genre) => (
        <div key={genre}>
          <h3 className='genreTitle'>{genre}</h3>
          <div className="movie-posters">
            {moviesByGenre[genre].map((movie) => (
              <img className='genre_img'
                key={movie.id}
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
              />
            ))}
          </div>
        </div>
      ))}
      <button id='nextBtn3' onClick={handleNextPageClick}>GoTo Home Page</button>
    </div>
  );
}

export default Movies;
