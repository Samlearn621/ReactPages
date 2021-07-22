import React, {useEffect} from "react";
import coverImage from '../../assets/cover/cover-image.jpg';

function Nav(props)
{
    const { pages =[], setCurrentPage, currentPage } = props
    
    useEffect(() => {
        document.title = currentPage.name;
      }, [currentPage]);
    
      return (
        <header className="flex-row space-between px-1">
        <h1>Lernantino</h1>
        <img src={coverImage} alt="wooden background"></img>
        <nav>
        <ul className="flex-row">
          {pages.map((Page) => (
            <li
              className={`mx-5 ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <span
                onClick={() => setCurrentPage(Page)}
              >
                {Page.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
          </header>
      );
}


export default Nav;