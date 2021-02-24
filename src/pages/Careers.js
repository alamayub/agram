import '../css/career.css';
/* Benfits */
import Team from '../images/icons/team.png'
import Real from '../images/icons/real.png'
import Benefit from '../images/icons/benefit.png'
import Work from '../images/icons/work.png'
import Education from '../images/icons/education.png'
import Relationship from '../images/icons/relationships.jpg'
/* Jobs */
import Web from '../images/jobs/web.jpeg'
function Careers() {
  const career = [
    { name: 'Great Team', icon: Team, para: 'Lorem Ipsum is simply dummy text' },
    { name: 'Real Impact', icon: Real, para: 'Lorem Ipsum is simply dummy text' },
    { name: 'Benefits', icon: Benefit, para: 'Lorem Ipsum is simply dummy text' },
    { name: 'Dynamic Workspace', icon: Work, para: 'Lorem Ipsum is simply dummy text' },
    { name: 'Education', icon: Education, para: 'Lorem Ipsum is simply dummy text' },
    { name: 'Relationships', icon: Relationship, para: 'Lorem Ipsum is simply dummy text' }
  ]
  const jobs = [
    { position: 'Web Developer', vacancy: 2, image: Web, description: 'Lorem Ipsum is simply dummy text' }  ,
    { position: 'Web Developer', vacancy: 2, image: Web, description: 'Lorem Ipsum is simply dummy text' }  ,
    { position: 'Web Developer', vacancy: 2, image: Web, description: 'Lorem Ipsum is simply dummy text' }  ,
    { position: 'Web Developer', vacancy: 2, image: Web, description: 'Lorem Ipsum is simply dummy text' },
    { position: 'Web Developer', vacancy: 2, image: Web, description: 'Lorem Ipsum is simply dummy text' }  
  ]
  return (
    <div className="Career">
      <div className="career-class">
        <div className="career-class-header">
          <h3>Benefit of working with us</h3>
          <p>Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text</p>  
        </div>  
        <div className="career-class-content">
          {career.map( (c, i) => (
            <div className="career-class-content-card" key={i}>
              <div className="career-class-icon">
                <img src={c.icon} alt={c.name} />  
              </div>
              <div className="career-class-content-card-content">
                <h3>{c.name}</h3> 
                <p>{c.para}</p> 
              </div>
            </div>  
          ))}  
        </div>
        <div className="career-class-job-header">
          <h3>Available Jobs</h3>
        </div>   
        <div className="career-class-job-section">
          {jobs.map( (j, i) => (
            <div className="career-class-job-section-card" key={i}>
              <div className="career-class-job-section-card-img">
                <img src={j.image} alt={j.position} />  
              </div>
              <div className="career-class-job-section-card-content">
                <h3>{j.position}</h3> 
                <p>{j.vacancy}</p> 
                <span>Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text</span>
              </div>
            </div>  
          ))} 
        </div>
      </div>  
    </div>
  )
}

export default Careers;