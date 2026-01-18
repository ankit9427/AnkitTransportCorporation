import React, { Suspense, lazy, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import logo from "./images/2-2-om-png-image.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IconButton, CircularProgress } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "./ThemeContext";

const Home = lazy(() => import("./components/Home"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const About = lazy(() => import("./components/About"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const PortfolioDetail = lazy(() => import("./components/PortfolioDetail"));
const ServiceDetail = lazy(() => import("./components/ServiceDetail"));
const News = lazy(() => import("./components/News"));

function App() {
  const { mode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <div className="app-container" data-theme={mode}>
        {/* Sticky Navigation Bar */}
        <nav className="sticky-nav">
          <div className="nav-container">
            {/* Logo and Company Name */}
            <div className="logo-container">
              <img src={logo} alt="Ankit Transport Logo" className="logo" />
              <h1>Ankit Transport Corporation</h1>
            </div>
            
            {/* Hamburger Menu Icon */}
            <div className="menu-toggle">
              <IconButton
                onClick={toggleMenu}
                color="inherit"
                aria-label="menu"
                className="hamburger-button"
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </div>

            {/* Navigation Links */}
            <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
              <li>
                <NavLink to="/" activeClassName="active" onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" activeClassName="active" onClick={closeMenu}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active" onClick={closeMenu}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" activeClassName="active" onClick={closeMenu}>
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/news" activeClassName="active" onClick={closeMenu}>
                  News
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active" onClick={closeMenu}>
                  Contact
                </NavLink>
              </li>
              <li className="theme-toggle-mobile">
                <button onClick={() => { toggleTheme(); closeMenu(); }} className="theme-btn">
                  {mode === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </button>
              </li>
            </ul>

            {/* Theme Toggle Button */}
            <IconButton onClick={toggleTheme} color="inherit" className="theme-toggle">
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><CircularProgress /></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:id" element={<PortfolioDetail />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        {/* Sticky Footer */}
        <footer>
          <p>&copy; 2024 Ankit Transport Corporation. All Rights Reserved.</p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
