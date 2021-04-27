import { Component } from "react";
import '../css/request-model.css'

class RequestModel extends Component {
  openModel = () =>{ document.getElementById('request-model-id').style.display = 'block' }
  closeModel = () => { document.getElementById('request-model-id').style.display = 'none' }

  render () {
    const socials = [
      { name: 'Facebook', icon: 'fa fa-facebook', to: 'https://www.facebook.com' },
      { name: 'Instagram', icon: 'fa fa-instagram', to: 'https://www.instagram.com' },
      { name: 'Twitter', icon: 'fa fa-twitter', to: 'https://www.twitter.com' },
      { name: 'YouTube', icon: 'fa fa-youtube', to: 'https://www.youtube.com' }
    ];
    return (
      <div className='requestModel'>
        <div className='requet-btn' onClick={ this.openModel }> request call </div>
        <div className="request-model" id="request-model-id">
          <div className="request-model-content">
            <div className='section-form'>
              <div className="form-title">tell us about query</div> 
              <form>
                <input type="text" placeholder="John Doe" />
                <input type="email" placeholder="john@doe.com" />
                <input type="number" placeholder="+977 9876543210" />
                <textarea placeholder="Type your message..." rows="6" />
                <input type="submit" value="Submit" />
              </form>
            </div>
            <div className="section-info">
              <div className="section-info-header">We Love To Support You</div>
              <div className="section-info-social">
                <div className="social-header">need more help?</div>
                <div className='section-social'>
                  { socials.map( (s, i) => (
                    <a target='_blank' rel="noreferrer" key={ i } href={ s.to }>
                      <i className={ s.icon } aria-hidden="true"></i>
                    </a>
                  )) }
                </div>
              </div>
            </div>
            <div className='close-btn' onClick={ this.closeModel }>
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div> 
    )
  }  
}

export default RequestModel