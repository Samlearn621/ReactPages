import React, { useState } from "react";
import Nav from "./components/Nav";
import Page from "./components/Page";
import './App.css';

function App() {

  const [pages] = useState([
      {
        name: "about me"
      },
      { name: "portfolio" },
      { name: "contact" },
      {
        name: "resume"
      }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
   <div>
      <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav> 
         <main>
        <Page currentPage={currentPage}></Page>
      </main>
   </div>
  );
}

export default App;
