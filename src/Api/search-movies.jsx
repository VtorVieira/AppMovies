const API_KEY = '32b2538fae9d6a2e14d1539dde85893f';

async function searchMoveis(search) {
  const cleanSearch = encodeURI(search).replaceAll('%20', '+');
  const API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${cleanSearch}&page=1&include_adult=false`;
  try {
    const data = await fetch(API).then((response) => response.json());
    return data.results;
  } catch (err) {
    return err;
  }
}

export default searchMoveis;
