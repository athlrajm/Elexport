import React from 'react';
import logo1 from './assets/logo1.png';
import serviceImage from './assets/services_bg1.png';
import img1 from './assets/Rectangle 37.png';
import img2 from './assets/Rectangle 38.png'
import img3 from './assets/Rectangle 40.png'
import icon1 from './assets/Facebook Circled.png'
import icon2 from './assets/Instagram.png'
import icon3 from './assets/WhatsApp.png';
import icon4 from './assets/LinkedIn Circled.png'
import icon5 from './assets/Telegram App.png'
import './assets/Services.css';

function Services() {
  return (
    <div className="service-page">
      <div className='m-div1'>
        <header className="service-header">
          <div className="left-div1">
            <img src={logo1} alt="Logo" className="logo" />
          </div>
          <div className="right-div1">
            <nav className="header-nav">
              <a href="#home">Home</a>
              <a href="#countries">Countries</a>
              <a href="#services">Services</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact Us</a>
            </nav>
          </div>
        </header>
      </div>

      <section className="service-main">
        <img src={serviceImage} alt="Service" className="service-image" />
        <h1 className="service-title">SERVICES</h1>
      </section>
      <section className="service-options">
  <div className="service-option">
    <img src={img1} alt="Career" />
    <button className="service-button">CAREER</button>
  </div>
  <div className="service-option">
    <img src={img2} alt="Universities" />
    <button className="service-button">UNIVERSITIES</button>
  </div>
  <div className="service-option">
    <img src={img3} alt="Admission" />
    <button className="service-button">ADMISSION</button>
  </div>
  <div className="service-option">
    <img src={img2} alt="Visa Services" />
    <button className="service-button">VISA SERVICES</button>
  </div>
  <div className="service-option">
    <img src={img3} alt="Loan Assistance" />
    <button className="service-button">LOAN ASSISTANCE</button>
  </div>
  <div className="service-option">
    <img src={img1} alt="Scholarships" />
    <button className="service-button">SCHOLARSHIPS</button>
  </div>
  <div className="service-option">
    <img src={img2} alt="Accommodation" />
    <button className="service-button">ACCOMMODATION</button>
  </div>
  <div className="service-option">
    <img src={img3} alt="Ticket & Tour" />
    <button className="service-button">TICKET & TOUR</button>
  </div>
</section>

      
      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-info">
          <p>Contact us Now for more Information</p>
          <button className="contact-button">
            <span>+91 8594006050</span>
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-column">
          <h4>Courses</h4>
          <a>MBA Abroad</a><br></br>
          <a>MEM Abroad</a><br></br>
          <a>MIM Abroad</a><br></br>
          <a>MS in Finance</a><br></br>
        </div>
        <div className="footer-column">
          <h4>Popular Countries</h4>
          <a>United States</a><br></br>
          <a>United Kingdom</a><br></br>
          <a>Canada</a><br></br>
          <a>Australia</a><br></br>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <a>About Us</a><br></br>
          <a className='a11'>Privacy Policy</a><br></br>
          <a>Help Center</a><br></br>
          <a>Career</a><br></br>
        </div>
        <div className="footer-column">
          <h4>Contact Info</h4>
          <p>2nd Floor, Above Kairali Ford, Kalpakavadi</p>
          <p>info@euroviewinternational.com</p>
          <button className="contact-info-button">+91 8594006050</button>
        </div>
        <div className="footer-column">
          <h4>Connect here...</h4>
          <div className="social-icons">
            <a href="#"><img src={icon2} alt="WhatsApp" /></a>
            <a href="#"><img src={icon3} alt="LinkedIn" /></a>
            <a href="#"><img src={icon4} alt="Instagram" /></a>
            <a href="#"><img src={icon5} alt="Telegram" /></a>
            <a href="#"><img src={icon1} alt="Telegram" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Services;
