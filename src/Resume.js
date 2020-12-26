
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () =>{
    return(
        <center>
        <Document file='cv.pdf' onLoadError = {console.error}>
            <Page pageNumber={1} />
        </Document>
        </center>
    );
}

export default Resume;