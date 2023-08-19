import { useEffect, useState } from 'react';
import ButtonNavbar from '../Components/ButtonNavbar';
import Ulnavbar from '../Components/Ulnavbar';

const Navbar = () => {
  const [navScroll, setNavScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light style-4 ${
        navScroll ? 'nav-scroll' : ''
      }`}
      id="main-nav"
    >
      <div className="container">
        <a className="navbar-brand" href="#" data-scroll-nav="0">
          <img
            src="../src/assets/img/Nucleo-img/Nucleo_Check_Logovariables-02.png"
            alt="Logo nucleo Check"
          />
        </a>
        <button
          className={`navbar-toggler ${menuOpen ? '' : 'collapsed'}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={`${menuOpen ? true : false}`}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`navbar-collapse ${
            menuOpen ? 'navbarCollapseActive' : 'navbarCollapse'
          }`}
          id="navbarSupportedContent"
        >
          <Ulnavbar />
          <ButtonNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
