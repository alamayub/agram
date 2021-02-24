import ServiceCard from '../components/ServiceCard'
import '../css/services.css'
import Web1 from '../images/web-1.png'
import Custom from '../images/custom.png'
import Data from '../images/data.png'
import IOT from '../images/iot.jpg'
import Cloud from '../images/cloud.png'
import AI from '../images/AI.png'
function Services() {
  const services = [
    { name: 'Web And Mobile Solutions', image: Web1 },
    { name: 'Customized Software', image: Custom },
    { name: 'Data and Analytics', image: Data },
    { name: 'Internet of Things (IoT)', image: IOT },
    { name: 'Cloud Services', image: Cloud },
    { name: 'Artificial Intelligence (AI)', image: AI }
  ];
  const list = [
    { count: 445, para: 'Projects compeleted' },
    { count: 55, para: 'Our media partners' },
    { count: 557, para: 'Sponsored companies' },
    { count: 3554, para: 'Happy customers' }
  ]
  return (
    <div className="Services">
      <div className="services-class">
        <div className="services-class-head">
          <h3>Our Services</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
        </div>
        <div className="services-class-data">
          { services.map( s => <ServiceCard service={s} key={services.indexOf(s)} />) }
        </div>
      </div> 
      <div className="services-counting">
        <div className="services-counting-in">
          <div className="services-counting-inner">
            {list.map((l, i) => (
              <div key={ i }>
                <h3>{ l.count }+</h3>
                <p>{ l.para }</p>
              </div>
            ))}
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Services;