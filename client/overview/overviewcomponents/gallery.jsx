import React from 'react';
import token from '../../../config.js';
// const axios = require('axios');
import axios from 'axios';

const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0
    }
  }

  scrollGallery(e) {
    e.preventDefault();
    if (e.target.value === 'Right') {
      if (this.state.photoIndex === this.props.currentStyle.photos.length - 1) {
        this.setState({
          photoIndex: 0
        });
      } else {
        this.setState({
          photoIndex: this.state.photoIndex + 1
        });
      }

    } else {
      if (this.state.photoIndex === 0) {
        this.setState({
          photoIndex: this.props.currentStyle.photos.length - 1
        });
      } else {
        this.setState({
          photoIndex: this.state.photoIndex - 1
        });
      }

    }

    console.log(this.state.photoIndex);

  }


  render() {
    var photoURL;
    if (this.props.currentStyle.photos !== undefined) {
      photoURL = this.props.currentStyle.photos[this.state.photoIndex].url;
    }
    return (
      <div className="gallery">
      <img className="gallery-main-image" src={photoURL}></img>
      <button value="Left" onClick={this.scrollGallery.bind(this)} className="gallery-scroll-button scroll-left">Scroll Image Left</button>
      <button value="Right" onClick={this.scrollGallery.bind(this)} className="gallery-scroll-button scroll-right">Scroll Image Right</button>
      </div>
    )
  }
};

/*

*/

export default Gallery;