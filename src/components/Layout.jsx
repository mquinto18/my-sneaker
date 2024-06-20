import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import './layout.css'
function Layout() {

    const [activeLink, setActiveLink] = useState(null)

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

  return (
    <div>
      <div className="navigation-container">
        <nav className="navigation-menu">
            <div className="box-navigation">
                <ul>
                    <li>
                        <Link
                            to="/"
                            className={`no-line ${activeLink === 0 ? 'active' : ''}`}
                            onClick={() => handleLinkClick(0)}>Men</Link>
                    </li>
                    <li>
                        <Link
                            to="/Women"
                            className={`no-line ${activeLink === 1 ? 'active' : ''}`}
                            onClick={() => handleLinkClick(1)}>Women</Link>
                    </li>
                    <li>
                        <Link
                            to="/Kids"
                            className={`no-line ${activeLink === 2 ? 'active' : ''}`}
                            onClick={() => handleLinkClick(2)} >Kids</Link>
                    </li>
                </ul>
            </div>
        </nav>
      </div>
      <Outlet/>
    </div>
  )
}

export default Layout
