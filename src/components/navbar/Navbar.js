import { useEffect, useState } from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import "./scroll.css";
import "../aos/aos-com";
import "./Navbar.css";

const Navbar = () => {

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  


  
  return (
    <div>
      <nav  className="navbar navbar-dark navbar-expand-lg fixed-nav navbar ${scrolling ? 'scrolled' : ''}">
        <div className="container-fluid">
          <a className="logo-nav">
            <img className="logo" src={logo}></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav max-auto">
              <li className="nav-item">
              <Link className="nav-link" to="/home">HOME</Link>
               
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/stock-list">  STOCK LIST</Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="nav-item li-nav">
                  <Link  className="nav-item nav-route"  to="/about">   ABOUT US</Link>
                   
                  </li>
                  <li className="nav-item li-nav">
                  <Link className="nav-item nav-route"  to="/warranty">    WARRANTY</Link>

                   
                  </li>
                </ul>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/finance">FINANCE</Link>
               
              </li>
              <li className="nav-item">

                
              <Link className="nav-link" to="/contact">CONTACT</Link>
               
              </li>
            </ul>
            <ul className="navbar-nav ul-account">
              <li className="nav-item myaccount">
                <a className="nav-link account" aria-current="page" href="#">
                  MY ACCOUNT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

   
    </div>
  );
};
export default Navbar;
