import '../css/team-card.css'
function Teamcard (props) {
  const data = props.data
  return (
    <div className="our-team-card">
      <div className="avatar-class">
        <img src={ data.image } alt={ data.name } />
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
          {data.socials.map( t => (
            <li key={data.socials.indexOf(t)}>
              <a target='_blank' rel="noreferrer" href={t.link}>
                <i className={t.icon} aria-hidden="true"></i>
              </a>
            </li>
          ))}
        </ul>
      </div>  
    </div>  
  )
}
export default Teamcard