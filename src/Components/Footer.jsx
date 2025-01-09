import React from "react"; 

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-2">
            <p className="mb-0">
              <strong>EMAIL.</strong> info@doremonlabs.com
            </p>
          </div>
          <div className="col-md-6 mb-2">
            <p className="mb-0">
              <strong>SOCIAL MEDIA.</strong>
              <i className="bi bi-twitter ms-2"></i>
            </p>
          </div>
        </div>
        <hr className="bg-white my-2" />
        <p className="mb-1">Copyright © 2021 DM Labs - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
