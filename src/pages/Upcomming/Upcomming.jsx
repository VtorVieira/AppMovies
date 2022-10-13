import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getUpcommingMoveis from '../../Api/get-upcoming';

import { DivUpcomming, DivCard } from './Style';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w220_and_h330_face/';

function Upcomming() {
  const [upcomming, setUpcomming] = useState([]);

  useEffect(() => {
    async function getUpcomming() {
      setUpcomming(await getUpcommingMoveis());
    }
    getUpcomming();
  });

  return (
    <div>
      <DivUpcomming>
        {upcomming.map((movie) => (
          <DivCard key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img src={`${IMAGE_PATH}${movie.poster_path}`} alt={movie.title} />
              <p>{movie.title}</p>
            </Link>
            <p><b>Nota: </b>{movie.vote_average}</p>
            <p>{movie.release_date}</p>
          </DivCard >
        ))
        }
      </DivUpcomming >
    </div>
  );
}

export default Upcomming;
