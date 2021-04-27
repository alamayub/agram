import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import '../css/footer.css'
import logo from '../images/agram_logo.png'

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="footer-content">
          <div className="footer-content-inner">
            <div className="info">
              <div className="info-inner">
                <img src={logo} alt="Agram logo" className="logo" height="50"></img>
                <p> Agram infotech Pvt. Ltd Company<br></br> Panitanki Birgunj, Nepal</p>
                <div className="contact-email">
                  <div><i className="fa fa-phone" aria-hidden="true"></i> +977 98550 21475</div>
                  <div><i className="fa fa-envelope" aria-hidden="true"></i> info@agraminfotech.com</div>
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
              <div className="head">Company</div>
              <ul>
                <li><NavLink to='/company/about-us' activeClassName=''>About Us</NavLink></li>
                <li><NavLink to='/company/success-stories' activeClassName=''>Success Stories</NavLink></li>
                <li><NavLink to='/company/portfolios' activeClassName=''>Portfolio</NavLink></li>
                <li><NavLink to='/company/careers' activeClassName=''>Careers</NavLink></li>
              </ul>
            </div>
            <div className="query">
              <div className="head">Any Query?</div>
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="number" placeholder="Phone Number" required />
                <textarea placeholder="Please tell us your query..." rows='4' required />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
          <div className="footer-social container">
            <div className="copy-right">Copyright @2021 Agram Infotech</div>
            <div className="privacy">
              <ul>
                <li><NavLink to="/">Privacy</NavLink></li>
                <li><NavLink to="/">Terms</NavLink></li>
              </ul>
            </div>
            <div className="social">
              <ul>
                {/* eslint-disable-next-line */}
                <li><a target='_blank' rel="noreferrer" href='https://www.facebook.com'><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                {/* eslint-disable-next-line */}
                <li><a target="_blank" rel="noreferrer" href='https://www.instagram.com'><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                {/* eslint-disable-next-line */}
                <li><a target="_blank" rel="noreferrer" href='https://www.twitter.com'><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                {/* eslint-disable-next-line */}
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
