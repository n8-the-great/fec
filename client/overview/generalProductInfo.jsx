import React from 'react';
import token from '../../config.js';
// const axios = require('axios');
import axios from 'axios';
import StyleSelector from './overviewcomponents/styleselector.jsx';
import Gallery from './overviewcomponents/gallery.jsx';


const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/';

class GeneralProductInfo extends React.Component {
  constructor (props) {
    super(props);
    this.selectProduct = this.selectProduct.bind(this);
    this.state = {
      styles: [],
      currentStyle: {},
    };
  }

  requestProductStyles() {
    axios.get(API_URL + 'products/' + this.props.product.id + '/styles',
      {
        headers: {
          Authorization: token
        }
    })
    .then(results => {
      console.log('GPI.jsx line 29 results: ', results.data.results);
      this.setState({
        styles: results.data.results,
        currentStyle: results.data.results[0]
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    if (this.state.styles.length === 0) {
        this.requestProductStyles();
    }

  }

  selectProduct(e) {
    e.preventDefault();
    this.props.productSelector(this.props.product.id);
  }

  updateGallery = (newStyle) => {
    this.setState({
      currentStyle: newStyle
    });
  }

  render() {
    return (
      <div className='product-general-info'>
        General Product Info

        <div className='product-info'>
          <h3 className='product-category'>{this.props.product.category}</h3>
          <h1 className='product-title'>{this.props.product.name}</h1>
          <div className='product-price'>{this.props.product.default_price}</div>
          <StyleSelector updateGallery={this.updateGallery.bind(this)} styles={this.state.styles}/>
        </div>

        <Gallery currentStyle={this.state.currentStyle}/>
        <div className='product-overview'>{this.props.product.description}</div>

      </div>
    )
  }
}

export default GeneralProductInfo;