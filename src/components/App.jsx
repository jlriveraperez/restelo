import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import ContentViewer from './components/ContentViewer';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import ExportPDFButton from './components/ExportPDFButton';

function App() {
  const [sections, setSections] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    fetch('/report.json')
      .then(res => res.json())
      .then(data => {
        setSections(data.sections);
        setSelectedCategories([...new Set(data.sections.map(s => s.category))]);
      });
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  const handleSearchChange = q => setSearchQuery(q);
  const handleToggleCategory = cat => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar sections={sections} onSelectSection={null} className="hidden md:block w-64 bg-gray-100 p-4" />
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-4 border-b bg-white">
          <button onClick={toggleSidebar} className="md:hidden p-2 border rounded">&#9776;</button>
          <SearchBar query={searchQuery} onQueryChange={handleSearchChange} />
          <ExportPDFButton contentRef={contentRef} filename="informe-restelo.pdf" className="ml-2" />
        </header>
        <div className="p-4 border-b bg-gray-50">
          <FilterPanel
            categories={[...new Set(sections.map(s => s.category))]}
            selectedCategories={selectedCategories}
            onToggleCategory={handleToggleCategory}
          />
        </div>
        <main ref={contentRef} className="flex-1 p-4 overflow-y-auto bg-white">
          <ContentViewer sections={sections} searchQuery={searchQuery} selectedCategories={selectedCategories} />
        </main>
      </div>
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20" onClick={closeSidebar}>
          <div className="absolute left-0 top-0 bottom-0 w-3/4 max-w-xs bg-gray-100 p-4" onClick={e => e.stopPropagation()}>
            <Sidebar sections={sections} onSelectSection={closeSidebar} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
