import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import nowPlaying from '../../Api/get-now-playing';
import {
  DivDetails,
  DivImg,
  DivText,
  Text
} from './Style';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w220_and_h330_face/';

function Playing() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      setMovies(await nowPlaying());
    }
    getMovies();
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
      <div>
        {movies.map((movie) => (
          <DivDetails key={movie.id}>
            <DivImg>
              <Link to={`/details/${movie.id}`}>
                <img src={`${IMAGE_PATH}${movie.poster_path}`} alt={movie.title} className={'gallery'} />
              </Link>
            </DivImg>
            <DivText>
              <Text>
                <p><b>Titulo:</b></p>
                <Link to={`/details/${movie.id}`}>
                  <p>{movie.title}</p>
                </Link>
                <p><b>Sinopse:</b></p>
                <p>{movie.overview}</p>
                <p><b>Nota:</b></p>
                <p>{movie.vote_average}</p>
                <p><b>Data de Lançamento:</b></p>
                <p>{formatDate(movie.release_date)}</p>
              </Text>
            </DivText>
          </DivDetails >
        ))
        }
      </div>
    </div >
  );
}

export default Playing;
