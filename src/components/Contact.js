import React from 'react';
import { FaLocationArrow, FaEnvelope, FaMobile } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2 className="text-center py-2 text-primary fw-bold">CONTACT US</h2>
          <div id="horizontal_line"></div>
          <p className="text-center py-2">
            You Have to raise a complaint through our website or application.But for
            any other concern you can contact or give us a feedback.
          </p>
        </div>
        <div className="row my-4">
          <div className="col-lg-5 d-flex align-items-stretch loca_tion">
            <div className="info">
              <div className="address mx-5">
                <a className="px-3 "><FaLocationArrow /></a>
                <h4>Location:</h4>
                <p>Plot no 113, 2nd Floor,Sector 44,Gurugram,Haryana,122003</p>
              </div>
              <div className="email mx-5">
                <a className="px-3"><FaEnvelope /></a>
                <h4>Email:</h4>
                <p>info@truesays.com</p>
              </div>
              <div className="phone mx-5">
                <a className="px-3" href="#"><FaMobile /></a>
                <h4>Call:</h4>
                <p>+91 9810397750</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9345370808956!2d77.0696583143093!3d28.451389699008754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18ecf6b95123%3A0x131ca338bbdcb1df!2s113%2C%20Sector%2044%20Rd%2C%20Sector%2044%2C%20Gurugram%2C%20Haryana%20122003!5e0!3m2!1sen!2sin!4v1638517517506!5m2!1sen!2sin"
                frameBorder={0}
                style={{ border: 0, width: "100%", height: 290 }}
                allowFullScreen=""
              />
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 mx-lg-5 d-flex align-items-stretch message_form">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required=""
                  />
                </div>
                <div className="form-group col-md-6 mt-3 mt-md-0">
                  <label htmlFor="name">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="name">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  required=""
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="name">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows={10}
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center py-5">
                <button type="submit" className="bg-success btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact;