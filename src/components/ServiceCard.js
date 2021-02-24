import '../css/service-card.css'
function ServiceCard(props) {
  const service = props.service
  return (
    <div className="service-class-card">
      <div className="service-class-card-img">
        <img src={ service.image } alt={ service.name } />  
      </div>  
      <div className="service-class-card-text">
        <h3>{ service.name }</h3>  
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>  
  )  
}
export default ServiceCard