import React, { useState, useMemo } from 'react';
import SearchContext from './searchContext';

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
