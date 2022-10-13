import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Carousel from 'react-elastic-carousel';
import getDetails from '../../Api/get-details';
import getRecommendations from '../../Api/get-movie-recommendations';

import {
  DivDetails,
  DivImg,
  DivText,
  DivGenres,
  DivCarousel,
  ParagrahPosition,
} from './Style';

/* Retorno da APi na esta aprensetando a imagem, foi necessário concatenar com a URL abaixo */
const DETAIL_IMAGE_PATH = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
const RECOMMENDATION_IMAGE_PATH = 'https://image.tmdb.org/t/p/w250_and_h141_face/';

function Details() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [recommendation, setRecommendation] = useState([]);

  const { id } = useParams();

  /* useEffect para carregamento dos detalhes do filme */
  useEffect(() => {
    async function detail() {
      setMovieDetails(await getDetails(id));
    }
    detail();
  }, [id]);

  /* useEffect para carregamento das recomendacoes de filmes */
  useEffect(() => {
    async function recommendation() {
      setRecommendation(await getRecommendations(id));
    }
    recommendation();
  }, [id]);

  /*
  https://stackoverflow.com/questions/2086744/javascript-function-to-convert-date-yyyy-mm-dd-to-dd-mm-yy
  */
  function converter(minutos) {
    const horas = Math.floor(minutos / 60);
    const min = minutos % 60;
    const textoHoras = (`00${horas}`).slice(-2);
    const textoMinutos = (`00${min}`).slice(-2);

    return `${textoHoras}h ${textoMinutos}m`;
  };

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
      {movieDetails.length === 0 ? <p>Loading ...</p> :
        <DivDetails>
          <DivImg>
            <img src={`${DETAIL_IMAGE_PATH}${movieDetails.poster_path}`} alt={movieDetails.title} />
          </DivImg>
          <DivText>
            <p><b>Titulo:</b></p>
            <p>{movieDetails.title} ({movieDetails.release_date.slice(0, 4)})</p>
            <p><b>Data de Lançamento:</b></p>
            <p>{formatDate(movieDetails.release_date)}</p>
            <p><b>Gênero:</b></p>
            <DivGenres>
              {movieDetails.genres && movieDetails.genres.map((movie) => (
                <div key={movie.id} >
                  <p>- {movie.name}</p>
                </div >
              ))
              }
            </DivGenres>
            <p><b>Duração:</b></p>
            <p>{converter(movieDetails.runtime)}</p>
            <Link to={`/reviews/${movieDetails.id}`}>
              Avaliação
            </Link>
            <p>{movieDetails.tagline}</p>
            <p>Sinopse: </p>
            <p>{movieDetails.overview}</p>
          </DivText>
        </DivDetails>
      }
      <ParagrahPosition>Recomendações:</ParagrahPosition>
      <DivCarousel>
        <Carousel itemsToShow={6} className='carousel'>
          {
            recommendation.map((movies) => (
              <div key={movies.id}>
                <Link to={`/details/${movies.id}`}>
                  <div>
                    <img src={`${RECOMMENDATION_IMAGE_PATH}${movies.poster_path}`} alt={movies.title} />
                  </div>
                  <div id='movieTitle'>
                    <p>{movies.title}</p>
                  </div>
                </Link>
              </div>
            ))
          }
        </Carousel>
      </DivCarousel>
    </div >
  );
}

export default Details;
