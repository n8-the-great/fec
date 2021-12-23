import React from 'react';
import auth from '../../config.js';
const axios = require('axios');

const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/';

class GeneralProductInfo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      product: {
        name: 'query'
      }
    }
  }

  componentDidMount() {
    this.requestProduct();
  }

  requestProduct() {
    axios.get(API_URL + 'products',
      {
        params: {
          count: 1
        },
        headers: {
          Authorization: auth.GITHUB_AUTH_TOKEN
        }
    })
    .then(results => {
      console.log(results.data[0]);
      this.setState({
        product: results.data[0]
      });
    })
    .catch(error => {
      console.log(error);
    });

  }

  render() {
    return (
      <div className='product-general-info'>
        General Product Info


        <div className='product-info'>
          <h3 className='product-category'>{this.state.product.category}</h3>
          <h1 className='product-title'>{this.state.product.title}</h1>
          <div className='product-price'>{this.state.product.default_price}</div>
          <div className='style-selector-placeholder'>Choose some styles</div>
        </div>

        <div className='gallery-placeholder'>This is where the Gallery will go</div>
        <div className='product-overview'>{this.state.product.description}</div>

      </div>
    )
  }
}

export default GeneralProductInfo;