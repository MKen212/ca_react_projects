import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";
import { links, social } from "./data";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
    // console.log(linksContainerRef.current.getBoundingClientRect().height);
    // console.log(linksRef.current.getBoundingClientRect().height);
  };

  const linkStyles = {
    height: showLinks ? 
      `auto` :
      `0px`,
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
        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul
            className="links"
            ref={linksRef}
            >
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
      </div>
    </nav>
  );
};

export default NavBar;
