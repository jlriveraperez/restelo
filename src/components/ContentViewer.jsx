import React from 'react';

function ContentViewer({ sections, searchQuery, selectedCategories }) {
  const query = searchQuery.trim().toLowerCase();
  const filtered = sections
    .filter(sec => selectedCategories.includes(sec.category))
    .filter(sec =>
      !query || sec.title.toLowerCase().includes(query) || sec.content.toLowerCase().includes(query)
    );

  if (filtered.length === 0) return <p>No se encontraron secciones.</p>;

  return (
    <div>
      {filtered.map(sec => (
        <section key={sec.id} id={sec.id} className="mb-8">
          <h3 className="text-2xl font-bold mb-2">{sec.title}</h3>
          <p className="text-gray-800 leading-relaxed">{sec.content}</p>
        </section>
      ))}
    </div>
  );
}

export default ContentViewer;
