import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SeachContext from '../../context/searchContext';
import { DivSearch, DivCard } from './Style';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w220_and_h330_face/';

function Search() {
  const { searchFinished } = useContext(SeachContext);

  return (
    <div>
      <DivSearch>
        {searchFinished.length === 0 ? <div>Nenhum resultado encontrado</div> : searchFinished.map((movie) => (
          <DivCard key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img src={`${IMAGE_PATH}${movie.poster_path}`} alt={movie.title} />
              <p>{movie.title}</p>
            </Link>
            {/* <p>{movie.overview}</p> */}
            <p>{movie.vote_average}</p>
            <p>{movie.release_date}</p>
          </DivCard >
        ))
        }
      </DivSearch>
    </div >
  );
}

export default Search;
