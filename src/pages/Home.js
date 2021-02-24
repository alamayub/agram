import IOS from '../images/techs/ios.webp'
import Android from '../images/techs/android.webp'
import Flutter from '../images/techs/flutter.webp'
import Ionic from '../images/techs/ionic.png'
import Swift from '../images/techs/swift.webp'
import Angular from '../images/techs/angular.png'
import ReactJs from '../images/techs/react.png'
import Vue from '../images/techs/vue.png'
import HTML5 from '../images/techs/html5.png'
import Bootstrap from '../images/techs/bootstrap.png'
import Mongo from '../images/techs/mongo.png'
import MySQL from '../images/techs/mysql.png'
import Firebase from '../images/techs/firebase.png'
import Oracle from '../images/techs/oracle.webp'
import php from '../images/techs/php.webp'
import NET from '../images/techs/aspnet.png'
import Java from '../images/techs/java.webp'
import Node from '../images/techs/node.webp'
import Python from '../images/techs/python.webp'
import Drupal from '../images/techs/drupal.webp'
import Magento from '../images/techs/magento.webp'
import Wordpress from '../images/techs/wordpress.webp'
import Shopify from '../images/techs/shopify.webp'
import Joolma from '../images/techs/joolma.png'
import '../css/home.css'
import React, { Component } from 'react';
class Home extends Component {

  state = { current: 0 }
  showList = (i) => {
    this.setState({ current: i })
    console.log(this.state.current)
  }
  render() {
    const techs = [
      { name: 'iOS', image: IOS }, { name: 'Android', image: Android }, { name: 'Flutter', image: Flutter },
      { name: 'Ionic', image: Ionic }, { name: 'Swift', image: Swift }, { name: 'Angular.js', image: Angular },
      { name: 'React.js', image: ReactJs }, { name: 'Vue.js', image: Vue }, { name: 'HTML5', image: HTML5 }, 
      { name: 'Bootstrap', image: Bootstrap }, { name: 'Mongo DB', image: Mongo }, {name: 'MySQL', image: MySQL },
      { name: 'Firebase', image: Firebase }, { name: 'Oracle', image: Oracle }, { name: 'PHP', image: php },
      { name: '.net', image: NET }, { name: 'Java', image: Java }, { name: 'Node.js', image: Node }, 
      { name: 'Python', image: Python }, { name: 'Drupal', image: Drupal }, { name: 'Magento', image: Magento },
      { name: 'Wordpress', image: Wordpress }, { name: 'Shopify', image: Shopify }, { name: 'Joolma', image: Joolma }
    ]
    
    return (
      <div className="Home">
        <div className="home-class">
          <div className="home-class-inner">
            <div><h4>you dream,<br></br>we make it happen</h4> </div> 
            <div><button>explore</button></div>
          </div>
        </div>
        <div className="home-technology">
          <div className="home-technology-header">Technologies We Work With</div>
          <div className="home-technology-content">
            {techs.map( (tech, t) => (
              <div className="home-tech-card" key={t}>
                <div className="home-tech-card-head" onClick={() => this.showList(t)}>
                  <img src={ tech.image } alt={tech.name} />
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default Home;

// const techs = [
//   { name: 'Mobile', lists: ['iOS', 'Android', 'React Native', 'Flutter', 'Ionic', 'Swift'] },
//   { name: 'Front End', lists: ['Angular.js', 'React.js', 'Vue.js', 'HTML5', 'Bootstrap'] },
//   { name: 'Database', lists: ['Mongo DB', 'MySQL', 'Firebase', 'Oracle'] },
//   { name: 'Backend', lists: ['PHP', '.net', 'Java', 'Node.js', 'Python'] },
//   { name: 'CMS', lists: ['Drupal', 'Magento', 'Wordpress', 'Shopify', 'Joolma'] },
// ]
// {techs.map( (tech, t) => {
//   if (t == 2) {
//     return <div className="home-tech-card" key={t}>
//       <div className="home-tech-card-head" onClick={() => this.showList(t)}>
//         <img src={ tech.image } />
//         {tech.name}
//       </div>
//     </div>
//   } else {
//     return <div>else</div>
//   }
// })}