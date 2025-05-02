import { pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

// Libs
import { useState, useEffect } from 'react'
import { Document, Page } from 'react-pdf'
import { getPdfData } from '../services/blogService'

// Components
import ArrowBtn from './ArrowBtn'

// Pdf styles
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import '../styles/pdf.css'

export default function PDFViewer({ pdfUrl }: { pdfUrl: string }) {
  const [numPages, setNumPages] = useState<number>()
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [pdfData, setPdfData] = useState<Blob | null>(null)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }

  useEffect(() => {
    const fetchPdfData = async () => {
      const pdfBlob = await getPdfData(pdfUrl)
      setPdfData(pdfBlob)
    }
    fetchPdfData()
  }, [pdfUrl])

  const goToPreviousPage = () => {
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1))
  }

  const goToNextPage = () => {
    setPageNumber((prevPageNumber) =>
      numPages ? Math.min(prevPageNumber + 1, numPages) : prevPageNumber
    )
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return

    const touchEndX = e.changedTouches[0].clientX
    const touchDifference = touchStartX - touchEndX

    if (touchDifference > 50) {
      // Swipe left
      goToNextPage()
    } else if (touchDifference < -50) {
      // Swipe right
      goToPreviousPage()
    }

    setTouchStartX(null)
  }

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`
        relative
        pdf-viewer-container
      `}
    >
      <Document
        file={pdfData}
        onLoadSuccess={onDocumentLoadSuccess}
        className={`pdf-document`}
      >
        <Page pageNumber={pageNumber} />
        <div className={`hidden md:block`}>
          <ArrowBtn
            onClick={goToPreviousPage}
            disable={pageNumber === 1}
            className='left-2'
          />
          <ArrowBtn
            onClick={goToNextPage}
            disable={pageNumber === numPages}
            className='rotate-180 right-2'
          />
        </div>
      </Document>
      <p className={``}>
        Page {pageNumber} of {numPages}
      </p>
      <div></div>
    </div>
  )
}
