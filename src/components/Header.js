import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaMobile } from "react-icons/fa";

function Header() {
  return (
    <React.Fragment>
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <a className="px-3 text-black" href="mailto:info@truesays.com"><FaEnvelope />info@truesays.com</a>
            <a className="px-3 text-black" href="#"><FaMobile />+91 9810397750</a>
          </div>
          <div className="social-links d-none d-md-block">
            <a className="px-3" href="#"><FaTwitter /></a>
            <a className="px-3" href="#"><FaFacebook /></a>
            <a className="px-3 text-danger" href="#"><FaInstagram /></a>
            <a className="px-3 linkedin" href="https://www.linkedin.com/company/true-says/" target="_blank"><FaLinkedin /></a>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
export default Header; 