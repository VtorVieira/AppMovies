import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getPopular from '../../Api/get-popular';

import { DivPopular, DivCard } from './Style';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w220_and_h330_face/';

function Popular() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getPopularMovies() {
      setMovies(await getPopular());
    }
    getPopularMovies();
  });

  function formatDate(date) {
    const datePart = date.match(/\d+/g),
      year = datePart[0],
      month = datePart[1],
      day = datePart[2];
    return day + '/' + month + '/' + year;
  }

  return (
    <div>
      <DivPopular>
        {movies.map((movie) => (
          <DivCard key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img src={`${IMAGE_PATH}${movie.poster_path}`} alt={movie.title} className={'gallery'} />
              <p>{movie.title}</p>
            </Link>
            <p><b>Nota:</b> {movie.vote_average}</p>
            <p>{formatDate(movie.release_date)}</p>
          </DivCard >
        ))
        }
      </DivPopular>
    </div >
  );
}

export default Popular;
