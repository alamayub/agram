import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import '../css/navbar.css'
import Logo from '../images/agram_logo.png'

class Navbar extends Component {
  toggleMenu = () => {
    if(document.querySelector('.toggle').classList.contains('active')) {
      document.querySelector('.toggle').classList.remove('active')
      document.querySelector('ul').style.display = 'none';
    } else {
      document.querySelector('.toggle').classList.add('active')
      document.querySelector('ul').style.display = 'block';
    } 
  }

  closeMenu = () => {
    if(window.innerWidth < 900) {
      document.querySelector('.toggle').classList.remove('active')
      document.querySelector('ul').style.display = 'none';
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      console.log(window.innerWidth)
      var t = document.querySelector('.toggle')
      var ul = document.querySelector('.menu ul')
      if(window.innerWidth <= 900) {
        t.classList.remove('active')
        t.style.display = 'block'
        ul.style.display = 'none'
      } else {
        t.style.display = 'none'
        ul.style.display = 'block'
      }
    })
  }

  render() {
    return (
      <header>
        <div className="logo">
          <NavLink to='/'>
            <img src={Logo} alt='Agram Infotech' />
          </NavLink>
        </div>
        <div className="menu">
          <div className="toggle" onClick={this.toggleMenu}></div>
          <ul>
            <li><NavLink exact to='/' activeClassName="activeNavbarClass" onClick={this.closeMenu}>Home</NavLink></li>
            <li><NavLink to='/company/about-us' activeClassName="activeNavbarClass" onClick={this.closeMenu}>Company</NavLink></li>
            <li><NavLink to='/services' activeClassName="activeNavbarClass" onClick={this.closeMenu}>Services</NavLink></li>
            <li><NavLink to='/solutions' activeClassName="activeNavbarClass" onClick={this.closeMenu}>Solutions</NavLink></li>
            <li><NavLink to='/ourteam' activeClassName="activeNavbarClass" onClick={this.closeMenu}>Our Team</NavLink></li>
            <li><NavLink to='/blog' activeClassName="activeNavbarClass" onClick={this.closeMenu}>Blog</NavLink></li>
            <li><NavLink to='/contact' activeClassName="activeNavbarClass" onClick={this.closeMenu}>Contact Us</NavLink></li>
          </ul>
        </div>
      </header> 
    )  
  }
}
export default Navbar;