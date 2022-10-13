import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getPopular from '../../Api/get-popular';

import { DivPopular, DivCard } from './Style';

/* Retorno da APi na esta aprensetando a imagem, foi necessário concatenar com a URL abaixo */
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w220_and_h330_face/';

function Popular() {
  const [movies, setMovies] = useState([]);

  /* useEffect para carregamento dos filmes mais populares */
  useEffect(() => {
    async function getPopularMovies() {
      setMovies(await getPopular());
    }
    getPopularMovies();
  });

  /*
    https://pt.stackoverflow.com/questions/367097/converter-soma-de-minutos-em-formato-de-horas-ex-70min-0110-com-jquery
  */
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
