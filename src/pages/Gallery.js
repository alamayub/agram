import { Component } from 'react';
import axios from 'axios'
import '../css/gallery.css'
class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    }
  }
  componentDidMount() {
    axios.get('https://api.unsplash.com/photos?per_page=50&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k')
    .then( res => {
      console.log(res.data)
      this.setState({ photos: res.data })
    }).catch( e => console.log(e))
  }
  render() {
    return (
      <div className="gallery">
        <div className="gallery-head">Our memorable moments</div>
        <div className="gallery-class">
          { this.state.photos.map( (img, i) => (
            <div className="gallery-item" key={ i }>
              <div className="image">
                <img src={ img.urls.small } alt="Pic Alt" />
              </div>
            </div>
          )) }
        </div>
      </div>   
    )
  }
}
  
export default Gallery