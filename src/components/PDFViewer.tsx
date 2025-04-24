import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';

export default function PDFViewer({ pdfUrl }: { pdfUrl: string }) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  async function downloadPdf() {
    const response = await fetch('https://filebrowser.apps.darideveloper.com/api/public/dl/C7CNDwxd/ftf/praxia/Cancun%20Concierge%20Presentation%202025.%20.pdf', { mode: 'no-cors' });
    console.log(response)
    const blob = await response.blob();
    console.log(blob)
  }

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  useEffect(() => {
    downloadPdf();
  }, []);

  return (
    <div>
      {/* <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document> */}
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}