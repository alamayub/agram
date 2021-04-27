import '../css/our-team.css'
import Teamcard from '../components/TeamCard';

function OurTeam () {
  const team = [
    { name: 'Thomas Shelby', position: 'CEO', socials: [
        { icon: 'fa fa-facebook', link: 'https://www.facebook.com' },
        { icon: 'fa fa-instagram', link: 'https://www.instagram.com' },
        { icon: 'fa fa-twitter', link: 'https://www.twitter.com' }
      ], thougths: 'This is me Thomas shelby of Peaky blinders speking to all of the England', image: 'https://qph.fs.quoracdn.net/main-qimg-220cbc8eee555db1048c5ed1870430f5' },
    { name: 'Tony Stark', position: 'Avengers Initiator', socials: [
        { icon: 'fa fa-facebook', link: 'https://www.facebook.com' },
        { icon: 'fa fa-youtube-play you', link: 'https://www.youtbe.com' },
        { icon: 'fa fa-twitter', link: 'https://www.twitter.com' }
      ], thougths: 'You know me...', image: 'https://eyemartnepal.com/wp-content/uploads/2019/05/Screenshot_20200303-215853__01.jpg' },
    { name: 'Klaus Mickaelson', position: 'Oldest Vampire', socials: [
        { icon: 'fa fa-facebook', link: 'https://www.facebook.com' },
        { icon: 'fa fa-youtube-play you', link: 'https://www.youtbe.com' },
        { icon: 'fa fa-twitter', link: 'https://www.twitter.com' }
      ],  thougths: 'Always and Forever', image: 'https://i.pinimg.com/474x/e1/d6/0e/e1d60ed55eb237d34a0ca2ec3e9b682d.jpg' },
    { name: 'John Snow', position: 'Warden of North', socials: [
        { icon: 'fa fa-facebook', link: 'https://www.facebook.com' },
        { icon: 'fa fa-instagram', link: 'https://www.instagram.com' },
        { icon: 'fa fa-twitter', link: 'https://www.twitter.com' }
      ], thougths: 'Winter is coming', image: 'https://i.insider.com/5cb3c8e96afbee373d4f2b62?width=700' },
    { name: 'Bryan Mills', position: 'Preventor', socials: [
        { icon: 'fa fa-facebook', link: 'https://www.facebook.com' },
        { icon: 'fa fa-instagram', link: 'https://www.instagram.com' },
        { icon: 'fa fa-youtube-play you', link: 'https://www.youtube.com' },
        { icon: 'fa fa-twitter', link: 'https://www.twitter.com' }
      ], thougths: 'If you let my daughter go now, that will be the end of it - I will not look for you, I will not pursue you... but if you don\'t, I will look for you, I will find you... and I will kill you', image: 'https://static4.comicvine.com/uploads/original/11130/111309754/5807232-bryan_mills.jpg' }
  ]  
  return (
    <div className="ourteam"> 
      <div className="our-team container"> 
        <div className="our-team-head">
          <h3>Meet Our Team</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
        </div> 
        <div className="our-team-data">
          { team.map( t => <Teamcard data={ t } key={team.indexOf(t)} />) }
        </div>   
      </div>  
    </div>
  )
}

export default OurTeam;