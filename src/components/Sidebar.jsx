import React from 'react';

function Sidebar({ sections, onSelectSection, className }) {
  return (
    <nav className={className || ''}>
      <h2 className="text-xl font-bold mb-4">Secciones</h2>
      <ul>
        {sections.map(sec => (
          <li key={sec.id} className="mb-2">
            <a
              href={`#${sec.id}`}
              className="text-blue-600 hover:underline"
              onClick={() => onSelectSection && onSelectSection(sec.id)}
            >
              {sec.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
