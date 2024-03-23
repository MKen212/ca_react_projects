import { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";
import { links, social } from "./data";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(true);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className="nav-center">
        {/* Header */}
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        {/* Links */}
        {showLinks && (
          <div className="links-container">
            <ul className="links">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
