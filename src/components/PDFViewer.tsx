import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { getPdfData } from '../services/blogService';

// Pdf styles
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

export default function PDFViewer({ pdfUrl }: { pdfUrl: string }) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pdfData, setPdfData] = useState<Blob | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  useEffect(() => {
    const fetchPdfData = async () => {
      const pdfBlob = await getPdfData(pdfUrl);
      setPdfData(pdfBlob);
    };
    fetchPdfData();
  }, [pdfUrl]);

  const goToPreviousPage = () => {
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prevPageNumber) =>
      numPages ? Math.min(prevPageNumber + 1, numPages) : prevPageNumber
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchDifference = touchStartX - touchEndX;

    if (touchDifference > 50) {
      // Swipe left
      goToNextPage();
    } else if (touchDifference < -50) {
      // Swipe right
      goToPreviousPage();
    }

    setTouchStartX(null);
  };

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <Document file={pdfData} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <div>
        <button onClick={goToPreviousPage} disabled={pageNumber <= 1}>
          Previous
        </button>
        <button onClick={goToNextPage} disabled={numPages && pageNumber >= numPages}>
          Next
        </button>
      </div>
    </div>
  );
}