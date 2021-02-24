import '../css/team-card.css'
function Teamcard (props) {
  const data = props.data
  return (
    <div className="our-team-card">
      <div className="avatar-class">
        <img src={ data.image } />
      </div>
      <div className="info-class">
        <h2 className="title">{ data.name }</h2>
        <p className="position">{ data.position }</p>
      </div>
      <div className="thoughts">
        { data.thougths }
      </div>
      <div className="social-links">
        <ul>
          <li><a target='_blank' rel="noreferrer" href='https://www.facebook.com'><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a target="_blank" rel="noreferrer" href='https://www.instagram.com'><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
          <li><a target="_blank" rel="noreferrer" href='https://www.twitter.com'><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a target="_blank" rel="noreferrer" href='https://www.youtube.com'><i className="fa fa-youtube-play you" aria-hidden="true"></i></a></li>
        </ul>  
      </div>  
    </div>  
  )
}
export default Teamcard