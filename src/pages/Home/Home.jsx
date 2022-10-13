import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import getPopular from '../../Api/get-popular';
import SearchBar from '../../components/SearchBar/SearchBar';
import {
  StyledMain,
  MovieList,
  ContentPosition,
  ParagrahPosition,
  SearcPosition,
  TextContent,
  Image,
} from './Style';

/* Retorno da APi na esta aprensetando a imagem, foi necessário concatenar com a URL abaixo */
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w220_and_h330_face/';

function Home() {
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
    <StyledMain>
      <SearcPosition>
        <SearchBar />
      </SearcPosition>
      <ParagrahPosition>Os Mais Populares:</ParagrahPosition>
      <MovieList>
        <Carousel itemsToShow={6}>
          {movies.map((movie) => (
            <ContentPosition key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <Image src={`${IMAGE_PATH}${movie.poster_path}`} alt={movie.title} className={'gallery'} />
              </Link>
              <TextContent>
                <Link to={`/details/${movie.id}`}>
                  <span>{movie.title}</span>
                </Link>
                <span>Nota: {movie.vote_average}</span>
                <span>{formatDate(movie.release_date)}</span>
              </TextContent>
            </ContentPosition >
          ))
          }
        </Carousel>
      </MovieList>
    </StyledMain >
  );
}

export default Home;
