import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import '../css/footer.css'
import logo from '../images/logo.png'

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="footer-content">
          <div className="maps-class">
            <iframe title="Agram infotech" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.475286597595!2d84.88296471436823!3d27.01514346217793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993558b671d2faf%3A0x8922702ad8a7ddf5!2sAgram%20InfoTech%20Pvt.%20Ltd%2C%20Panitanki%2C%20Birgunj!5e0!3m2!1sen!2snp!4v1613635250851!5m2!1sen!2snp" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
          </div>
          <div className="footer-content-inner">
            <div className="info">
              <div className="info-inner">
                <img src={logo} alt="Agram logo" className="logo" height="50"></img>
                <p> Agram infotech Pvt. Ltd Company<br></br> Panitanki Birgunj, Nepal</p>
                <div className="contact-email">
                  <div><i className="fa fa-phone" aria-hidden="true"></i> +9779876543210</div>
                  <div><i className="fa fa-envelope" aria-hidden="true"></i> agram@agram.com</div>
                </div>
              </div>
            </div>
            <div className="products">
              <div className="head">products</div>
              <ul>
                <li><NavLink to='/'>Web Application</NavLink></li>
                <li><NavLink to='/'>Cloud Hosting</NavLink></li>
                <li><NavLink to='/'>Mobile Application</NavLink></li>
                <li><NavLink to='/'>Other</NavLink></li>
              </ul>
            </div>
            <div className="services">
              <div className="head">services</div>
              <ul>
                <li><NavLink to='/'>Web Application</NavLink></li>
                <li><NavLink to='/'>Mobile Application</NavLink></li>
                <li><NavLink to='/'>Cloud Hosting</NavLink></li>
              </ul>
            </div>
            <div className="query">
              <div className="head">Any Query?</div>
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Please tell us your query..." rows='4' required />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
          <div className="footer-social">
            <div className="copy-right">Copyright @2021 Agram Infotech</div>
            <div className="privacy">
              <ul>
                <li><NavLink to="/">Privacy</NavLink></li>
                <li><NavLink to="/">Terms</NavLink></li>
                <li><NavLink to="/">Sitemap</NavLink></li>
              </ul>
            </div>
            <div className="social">
              <ul>
                <li><a target='_blank' rel="noreferrer" href='https://www.facebook.com'><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a target="_blank" rel="noreferrer" href='https://www.instagram.com'><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li><a target="_blank" rel="noreferrer" href='https://www.twitter.com'><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a target="_blank" rel="noreferrer" href='https://www.youtube.com'><i className="fa fa-youtube-play you" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>  
    )  
  }  
}

export default Footer;
