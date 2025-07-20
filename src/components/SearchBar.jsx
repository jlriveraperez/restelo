import React from 'react';

function SearchBar({ query, onQueryChange }) {
  return (
    <input
      type="text"
      placeholder="Buscar..."
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded"
    />
  );
}

export default SearchBar;
