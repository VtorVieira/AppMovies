import React, { useState, useMemo } from 'react';
import SearchContext from './searchContext';

/*
Provider criado para receber a informação da pesquisa realizado pelo cliente
e assim direcionar para a pagina de pesquisa
*/

function SearchProvider({ children }) {
  const [searchFinished, setSeachFinished] = useState([]);

  const contextValue = useMemo(() => ({
    searchFinished,
    setSeachFinished,
  }), [
    searchFinished,
  ]);

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
