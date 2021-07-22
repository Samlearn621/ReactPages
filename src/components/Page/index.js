import React from 'react';
import About from '../About'
import Contact from '../Contact';
import PageContent from '../PageContent'

function Page({ currentPage }){

    const renderPage = () => {
        switch (currentPage.name) {
          case 'about me':
            return <About />;    
        case 'contact':
            return <Contact />;        
          default:
            return <About />;
        }
      };
        return (
            <section>
              <h2>{currentPage.name}</h2>
              <PageContent>{renderPage()}</PageContent>
            </section>
          );
}

export default Page;