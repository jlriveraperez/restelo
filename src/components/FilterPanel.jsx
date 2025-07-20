import React from 'react';

function FilterPanel({ categories, selectedCategories, onToggleCategory }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <span className="font-semibold">Filtrar por tema:</span>
      {categories.map(cat => (
        <label key={cat} className="flex items-center text-sm">
          <input
            type="checkbox"
            checked={selectedCategories.includes(cat)}
            onChange={() => onToggleCategory(cat)}
            className="mr-1"
          />
          {cat}
        </label>
      ))}
    </div>
  );
}

export default FilterPanel;
