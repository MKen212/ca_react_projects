import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";
import { links, social } from "./data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    // console.log(linksHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  });

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className="nav-center">
        {/* Header */}
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        {/* Links */}
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
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

        {/* Social Icons */}
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )

          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
