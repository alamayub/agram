import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import '../css/navbar.css'

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

  componentDidMount() {
    this.toggleMenu();
    window.addEventListener('resize', () => {
      console.log(window.innerWidth)
      var t = document.querySelector('.toggle')
      var ul = document.querySelector('.menu ul')
      if(window.innerWidth < 760) {
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
        <div className="logo"><NavLink exact to='/'>Agram</NavLink></div>
        <div className="menu">
          <div className="toggle" onClick={this.toggleMenu}></div>
          <ul>
            <li><NavLink exact to='/' activeClassName="activeNavbarClass">Home</NavLink></li>
            <li><NavLink to='/services' activeClassName="activeNavbarClass">Services</NavLink></li>
            <li><NavLink to='/ourteam' activeClassName="activeNavbarClass">OurTeam</NavLink></li>
            <li><NavLink to='/contact' activeClassName="activeNavbarClass">Contact</NavLink></li>
            <li><NavLink to='/about' activeClassName="activeNavbarClass">About</NavLink></li>
            <li><NavLink to='/careers' activeClassName="activeNavbarClass">Careers</NavLink></li>
          </ul>
        </div>
      </header> 
    )  
  }
}
export default Navbar;