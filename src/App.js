import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products';
import Services from './pages/Services'
import OurTeam from './pages/OurTeam'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import React, { Component } from 'react'

class App extends Component {
  componentDidMount() {
    document.querySelectorAll('a').forEach( a => a.classList.remove('active'))
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/products' component={ Products } />
          <Route path='/services' component={ Services } />
          <Route path='/ourteam' component={ OurTeam } />
          <Route path='/contact' component={ Contact } />
          <Route path='/careers' component={ Careers } />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
