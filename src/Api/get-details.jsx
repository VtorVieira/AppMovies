const API_KEY = '32b2538fae9d6a2e14d1539dde85893f';

async function getDetails(movieId) {
  const API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1`;
  try {
    const data = await fetch(API).then((response) => response.json());
    return data;
  } catch (err) {
    return err;
  }
}

export default getDetails;
