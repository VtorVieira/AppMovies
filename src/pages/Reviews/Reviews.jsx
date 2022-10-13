import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getDetails from '../../Api/get-details';

import getReviews from '../../Api/get-reviews';
import {
  DivReviews,
  DivImg,
  DivText,
  HrPosition,
} from './Style';

const DETAIL_IMAGE_PATH = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [image, setImage] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function reviews() {
      setReviews(await getReviews(id));
    }
    reviews();
  }, [id]);

  useEffect(() => {
    async function image() {
      setImage(await getDetails(id));
    }
    image();
  }, [id]);

  function formatDate(date) {
    const datePart = date.match(/\d+/g),
      year = datePart[0],
      month = datePart[1],
      day = datePart[2];
    return day + '/' + month + '/' + year;
  }

  return (
    <div>
      <DivReviews>
        <DivImg>
          <img src={`${DETAIL_IMAGE_PATH}${image.poster_path}`} alt={image.title} />
        </DivImg>
        {reviews.length === 0 ? <p>Sem avaliações</p> :
          <DivText>
            {
              reviews.map((review) => (
                <div key={review.id}>
                  <p>{review.author} ({formatDate(review.created_at)})</p>
                  <p>Nota: {review.author_details.rating}</p>
                  <p>{review.content}</p>
                  <HrPosition />
                </div>
              ))
            }
          </DivText>
        }
      </DivReviews>
    </div >
  );
}

export default Reviews;
