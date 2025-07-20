import React from 'react';
import html2pdf from 'html2pdf.js';

function ExportPDFButton({ contentRef, filename = 'document.pdf', className }) {
  const handleExport = () => {
    if (!contentRef.current) return;
    html2pdf().set({
      margin: 0.5,
      filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    }).from(contentRef.current).save();
  };

  return (
    <button onClick={handleExport} className={`px-4 py-2 bg-blue-600 text-white font-semibold rounded ${className}`}>
      Exportar PDF
    </button>
  );
}

export default ExportPDFButton;
