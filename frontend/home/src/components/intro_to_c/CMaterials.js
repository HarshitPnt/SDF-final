import React from "react";
import { useState } from "react";
//pdfjs.GlobalWorkerOptions.workerSrc = `../file`;
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"
import pdfFile from "../../documents/EP.pdf";

function CMaterails () {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div className="file">
            <h1>Lab Manual</h1>
            {/* <iframe data="../documents/lecture1.pdf" width="80%" height="600px" /> */}
            <div className="all-page-container">
                <Document
                    file={pdfFile}
                    onLoadSuccess={onDocumentLoadSuccess}>
                     {Array.from( new Array(numPages), (el, index) => (
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                     ))}
                </Document>
            </div>
        </div>
    );
}

export default CMaterails