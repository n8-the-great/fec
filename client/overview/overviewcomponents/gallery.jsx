import React from 'react';
import token from '../../../config.js';
// const axios = require('axios');
import axios from 'axios';
import GallerySideBar from './GallerySideBar.jsx';
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/';
class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      expanded: false
    }
  }
  componentDidMount() {
    if (this.state.photoIndex !== 0) {
      this.setState({
        photoIndex: 0
      })
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
  }
  changePhoto(newPhotoIndex) {
    if (newPhotoIndex !== undefined) {
      this.setState({
        photoIndex: newPhotoIndex
      })
    }
  }
  expand(e) {
    e.preventDefault();
    this.setState({
      expanded: !this.state.expanded
    })
  }
  render() {
    var photoURL;
    var photoIndex = this.state.photoIndex;
    if (this.props.currentStyle.photos !== undefined) {
      if(this.props.currentStyle.photos.length <= this.state.photoIndex) {
        photoIndex = this.props.currentStyle.photos.length - 1;
      }
      photoURL = this.props.currentStyle.photos[photoIndex].url;
    }

    return (
      <div className="gallery overview">
      <GallerySideBar currentStyle={this.props.currentStyle} changePhoto={this.changePhoto.bind(this)}/>
      <img className="gallery-main-image overview" src={photoURL}></img>
      <button value="Left" onClick={this.scrollGallery.bind(this)} className="gallery-scroll-button scroll-left overview">Scroll Image Left</button>
      <button value="Right" onClick={this.scrollGallery.bind(this)} className="gallery-scroll-button scroll-right overview">Scroll Image Right</button>
      </div>


    )
  }
};
/**/
export default Gallery;