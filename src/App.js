import React from 'react';
import "./App.css"
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import pdf from "./test.pdf";
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function App() {

  const [numPages,setNumPages]=React.useState(null);
  const [currentPage,setCurrentPage]=React.useState(1);
  const [currentHeight,setCurrentHeight]=React.useState(600);

  function onLoadSuccess({numPages}){
    setNumPages(numPages);
    setCurrentPage(1);
  }
  function handlePrev(){
    setCurrentPage(currentPage-1);
  }
  function handleNext(){
    setCurrentPage(currentPage+1);
  }
  function handleZoomIn(){
    setCurrentHeight(currentHeight+300);
  }
  function handleZoomOut(){
    if(currentHeight>0){
    setCurrentHeight(currentHeight-300);
    }
  }
  return (
    <div className="App">
    <header className="App-header">
    <a href="/"><h1 id="logo">PDF VIEWER</h1></a>
    <div className="Nav">
    {currentPage===1 &&
    <button className="NavIcons"><NavigateBeforeIcon /></button>}
        { currentPage > 1 && 
        <button className="NavIcons" onClick={handlePrev}><NavigateBeforeIcon /></button>
        }
    <p id="pg">{currentPage} / {numPages} </p>
      {
        currentPage===numPages &&
        <button className="NavIcons"><NavigateNextIcon /></button>}
        {
          currentPage < numPages &&
          <button className="NavIcons" onClick={handleNext}><NavigateNextIcon /></button>
        }
        <button className="NavIcons" id="zoom" onClick={handleZoomIn}><ZoomInIcon /></button>
        <button className="NavIcons" id="zoom" onClick={handleZoomOut}><ZoomOutIcon /></button>
        </div>
    </header>
      <div className="Pdf-container">
      <div id="doc">
        <Document file={pdf} onLoadSuccess={onLoadSuccess}>
          <Page height={currentHeight} pageNumber={currentPage} />
        </Document>
        </div>
      </div>
     
    </div>
  );
}

export default App;
