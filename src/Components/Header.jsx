import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white">
      <div className="container d-flex align-items-center justify-content-between py-3">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <img
            src="logo.png" // Replace with your logo URL
            alt="Doremon Labs Logo"
            className="me-2"
            style={{ width: '40px', height: '40px' }}
          />
          <h1 className="h5 mb-0">Doremon Labs</h1>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a href="#contact" className="nav-link text-white">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="#mahakumbh" className="nav-link text-warning">
                Mahakumbh
              </a>
            </li>
            <li className="nav-item">
              <a href="#devops" className="nav-link text-white">
                DevOps
              </a>
            </li>
            <li className="nav-item">
              <a href="#more" className="nav-link text-white">
                More
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact Us Button */}
        <a href="#contact-us" className="btn btn-dark">
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;
