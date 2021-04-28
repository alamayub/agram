import Android from '../images/techs/android.webp'
import ReactJs from '../images/techs/react.png'
import Drupal from '../images/techs/drupal.webp'
import Shopify from '../images/techs/shopify.webp'
import '../css/home.css'
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class Home extends Component {
  render() {
    const services = [
      { name: 'App Development(Mobile & Web App)', img: Android },
      { name: 'Web Development', img: ReactJs },
      { name: 'Digital Marketing Services', img: Drupal },
      { name: 'Ecommerce Services', img: Shopify },
    ]
    const blogs = [
      { name: 'Office event with tomorrowland', img: 'https://weraveyou.com/wp-content/uploads/2020/04/Tomorrowland-2019-footage.jpg' },
      { name: 'Office event with tomorrowland', img: 'https://media.wired.com/photos/5e618502dd088e00081102a9/2:1/w_2400,h_1200,c_limit/Biz-conference-187591171.jpg' },
      { name: 'Office event with tomorrowland', img: 'https://foxeventnepal.com/uploads/image/19-12-23-30982.png' },
    ]
    const colors = [
      { title: 'Development', sub: 'Transform Your Business Through Technoogy', img: 'https://www.eventige.com/hubfs/web-development-agency-1.png', color: '#20B2AA' },
      { title: 'Design', sub: 'Elevate Your User Experience', img: 'https://www.trade-schools.net/graphics/web-design-development-information-fb.png', color: '#FFBF00' },
      { title: 'Cloud and DevOps', sub: 'Future-Proof and Scale Your Infrastructure', img: 'https://www.devopsgroup.com/wp-content/uploads/2019/03/services_cloudop_landscape_002.png', color: '#00BFFF' },
      { title: 'Support', sub: 'Keep Your Software Running At Its Best', img: 'https://opltechnologies.com/wp-content/uploads/2018/07/Call-Center.jpg', color: '#C71585' },
    ]
    
    return (
      <div className="Home">
        <div className="home-class">
          <div className="home-class-inner">
            <div><h4>you dream,<br></br>we make it happen</h4> </div> 
            <div><button>explore</button></div>
          </div>
        </div>
        <div className="home-technology container">
          <div className='home-technology-head'>
            <div className="home-technology-header">Our Services</div>
            <NavLink to='/services' activeClassName='' className='view-all'>View All</NavLink>
          </div>
          <div className="home-technology-content">
            {services.map( (service, s) => (
              <div className="home-service-card" key={s}>
                <img src={ service.img } alt={ service.name } />
                <div>{ service.name }</div>
              </div>
            ))}
          </div>
        </div>
        {/* services */}
        <div className='services-new container'>
          <div className='home-technology-head'>
            <div className="home-technology-header">Our Services</div>
            <NavLink to='/services' activeClassName='' className='view-all'>View All</NavLink>
          </div>
          <div className='service-new-content'>
            { colors.map( ({title, sub, img, color}, i) => (
              <div className='service-new-service' key={ i } style={{ backgroundColor: color }}>
                <div className='service-new-service-title'>{ title }</div>
                <div className='service-new-service-sub'>{ sub }</div>
                <div className='service-new-service-img' style={{ backgroundImage: `url(${img})` }}></div>
              </div>
            )) }
          </div>
        </div>      
        <div className='form-blog container'>
          <div className='form'>
            <div className='home-form-head'>
              <h3>Let's make somthing together</h3>
              <p>Feel free to contact us whenever you want. Just tell us your query we will revert back with a solution shortly.</p>
            </div>
            <form>
              <div>
                <input type='text' placeholder='Full Name' required />
                <input type='email' placeholder='Email' required />
              </div>
              <div>
                <input type='number' placeholder='Mobile Number' required />
                <select required>
                  <option value="volvo">Web development</option>
                  <option value="saab">Mobile App</option>
                  <option value="opel">IoT</option>
                  <option value="audi">SEO</option>
                </select>
              </div>
              <textarea placeholder='Your message...' rows='4' required />
              <input type='submit' value='Submit' />
            </form>
          </div>
          <div className='home-blog'>
            <div className='home-blog-head'>
              <h3>Explore our latest blog</h3>
              <NavLink to='/blog' activeClassName='' className='view-all'>View All</NavLink>
            </div>
            <div className='home-blog-content'>
              { blogs.map( (b, i) => (
                <div className='home-blog-item' key={ i }>
                  <div className='home-blog-item-img'>
                    <img src={ b.img } alt={ b.name } />
                  </div>
                  <div className='home-blog-item-content'>
                    <h6>{ b.name }</h6>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                  </div>
                </div>
              )) }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;
