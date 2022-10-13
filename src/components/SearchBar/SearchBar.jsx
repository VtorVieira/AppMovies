import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchMoveis from '../../Api/search-movies';
import SeachContext from '../../context/searchContext';
import { SeachInput, SeachButton } from './Style';

function SearchBar() {
  const { setSeachFinished } = useContext(SeachContext);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  function handleChange({ target }) {
    setSearch(target.value);
  };

  /* Envia a pesquisa para o estado global e direciona para a pagina Search */
  async function sendSeach() {
    const result = await searchMoveis(search);
    setSeachFinished(result);
    navigate('/search', { replace: true });
  }

  return (
    <section>
      <SeachInput
        type="text"
        name='search'
        value={search}
        onChange={handleChange}
        placeholder="Busque um filme"
      />
      <SeachButton
        type="button"
        disabled={search.length < 2}
        onClick={sendSeach}
      >
        Search
      </SeachButton>
    </section>
  );
}

export default SearchBar;
