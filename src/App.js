import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Solutions from './pages/Solutions';
import Services from './pages/Services'
import OurTeam from './pages/OurTeam'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Careers from './pages/Careers'
import React, { Component } from 'react'
import Company from './pages/Company'
import Stories from './pages/Stories'
import Portfolios from './pages/Portfolio'
import Events from './pages/Events'
import Gallery from './pages/Gallery'

import RequestModel from './components/RequestModel'

class App extends Component {
  componentDidMount() {
    document.querySelectorAll('a').forEach( a => a.classList.remove('active'))
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <RequestModel />
          <Navbar />
          <Route exact path='/' component={ Home } />
          <Route path='/company' component={ Company } />
          <Route path='/company/about-us' component={ About } />
          <Route path='/company/success-stories' component={ Stories } />
          <Route path='/company/portfolios' component={ Portfolios } />
          <Route path='/company/careers' component={ Careers } />
          <Route path='/company/gallery' component={ Gallery } />
          <Route path='/solutions' component={ Solutions } />
          <Route path='/services' component={ Services } />
          <Route path='/blog' component={ Blog } />
          <Route path='/ourteam' component={ OurTeam } />
          <Route path='/contact' component={ Contact } />
          <Route path='/events' component={ Events } />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


// /* /index.html  200