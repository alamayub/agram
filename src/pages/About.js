import '../css/about.css'
function About() {
  const texts = [
    'Fast, dependable, considerate response',
    'Proactive planning to identify needs',
    'Single point of contact experience',
    'Predictable, consistent team of IT experts',
    '“Real-world” experienced service technicians',
    'Focus on dependable, quality solutions',
    'Agile capabilities to support your needs',
    'Full-systems assessments'
  ]
  return (
    <div className="About">
      <div className="about-class">
        <div className="about-class-inner">
          <div className="about-class-inner-img"></div>
          <div className="about-class-inner-text">
            <div className="about-heading">About the company</div>
            <p>
              Agram Infotech is a startup company based in Birgunj, Nepal. Agram strives for developing intelligent and very cost effective software, apps, IoT and any customized software at a client’s request. Agram has highly skilled development team and focuses on quality, cost and timely delivering of any projects.
              <br /><br />
              The company looks forward to working with you or for you.
            </p>
          </div>
        </div>  
        <div className='about-class-why'>
          <h3>Why Agram InfoTech?</h3>
          <span>We help business build an intelligently designed digital future. Tell us about your idea, and we’ll offer the most fitting technological solution.</span>
          <ul>
            { texts.map( (t, i) => (
              <li key={ i }>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                { t }
              </li>
            )) }
          </ul>
        </div>
      </div>  
    </div>
  )
}

export default About;