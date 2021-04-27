import { NavLink } from 'react-router-dom'
import '../css/company.css'
function Company() {
  return (
    <div className='company'>
      <div className='company-tab-class'>
        <ul>
          <li><NavLink to='/company/about-us' activeClassName="companyNavbarClass">About Us</NavLink></li>
          <li><NavLink to='/company/success-stories' activeClassName="companyNavbarClass">Success Stories</NavLink></li>
          <li><NavLink to='/company/portfolios' activeClassName="companyNavbarClass">Portfolios</NavLink></li>
          <li><NavLink to='/company/careers' activeClassName="companyNavbarClass">Careers</NavLink></li> 
          <li><NavLink to='/company/gallery' activeClassName="companyNavbarClass">Gallery</NavLink></li> 
        </ul>  
      </div>
    </div>  
  )  
}

export default Company