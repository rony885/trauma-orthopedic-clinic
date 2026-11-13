import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ menuOpen, toggleMenu, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isOpenDepartment, setIsOpenDepartment] = useState(false);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="header header-layout1">
      <div className="header-topbar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between">
                <ul className="contact__list d-flex flex-wrap align-items-center list-unstyled mb-0">
                  <li className={isOpen ? "active" : ""}>
                    <button
                      type="button"
                      className={`miniPopup-emergency-trigger ${
                        isOpen ? "active" : ""
                      }`}
                      onClick={togglePopup}
                    >
                      24/7 Emergency
                    </button>

                    <div
                      id="miniPopup-emergency"
                      className={`miniPopup miniPopup-emergency text-center ${
                        isOpen ? "active" : ""
                      }`}
                    >
                      <div className="emergency__icon">
                        <i className="icon-call3"></i>
                      </div>

                      <Link to="tel:01700000000" className="phone__number">
                        <i className="icon-phone"></i>
                        <span>01700000000</span>
                      </Link>

                      <p>
                        Please feel free to contact our friendly reception staff
                        with any general or medical enquiry.
                      </p>

                      <Link
                        to="/appointment"
                        className="btn btn__secondary btn__link btn__block"
                      >
                        <span>Make Appointment</span>
                        <i className="icon-arrow-right"></i>
                      </Link>
                    </div>
                  </li>

                  <li>
                    <i className="icon-phone"></i>
                    <Link to="tel:01700000000">01700000000</Link>
                  </li>
                  <li>
                    <i className="icon-location"></i>
                    <Link to="#">
                      Trauma Centre & Advanced Orthopedic Clinic, Kishoreganj
                    </Link>
                  </li>
                  <li>
                    <i className="icon-clock"></i>
                    <Link to="#">SAT - THU : 0:00 am - 00:00 pm</Link>
                  </li>
                </ul>

                <div className="d-flex">
                  <ul className="social-icons list-unstyled mb-0 mr-30">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-x"></i>
                      </Link>
                    </li>
                  </ul>

                  <form className="header-topbar__search">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                    <button className="header-topbar__search-btn">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.header-top --> */}
      <nav className="navbar navbar-expand-lg sticky-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="/assets/images/logo-dark.png"
              className="logo-light"
              alt="logo"
            />
            <img
              src="/assets/images/logo/logo-dark.png"
              className="logo-dark"
              alt="logo"
            />
          </Link>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="menu-lines">
              <span></span>
            </span>
          </button>

          <div
            className={`collapse navbar-collapse ${menuOpen ? "menu-opened" : ""}`}
            id="mainNavigation"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav__item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  হোম
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  সম্বন্ধে
                </NavLink>
              </li>
              {/* <li className="nav__item">
                <NavLink
                  to="/ortho-smart"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Ortho Smart
                </NavLink>
              </li> */}

              <li className="nav__item">
                <NavLink
                  to="/doctors"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  ডাক্তার সমূহ
                </NavLink>
              </li>

              {/* <li className="nav__item">
                <NavLink
                  to="/packages"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Packages
                </NavLink>
              </li> */}

              <li className="nav__item">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  সেবা সমূহ
                </NavLink>
              </li>
              {/* 
              <li className="nav__item">
                <NavLink
                  to="/doctors"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Our Consultants
                </NavLink>
              </li> */}

              <li className="nav__item">
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  গ্যালারি
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="/health-info"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  রোগীর জন্য
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  যোগাযোগ
                </NavLink>
              </li>
              <li className="nav__item d-lg-none d-md-block">
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  লাইভ সিরিয়াল / TV Queue
                </NavLink>
              </li>
            </ul>

            <button
              onClick={closeMenu}
              className="close-mobile-menu d-block d-lg-none"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="d-none d-xl-flex align-items-center position-relative ml-30">
            <Link to="#" className="btn btn__primary btn__rounded ml-30">
              <i className="icon-calendar"></i>
              <span>লাইভ সিরিয়াল / TV Queue</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
