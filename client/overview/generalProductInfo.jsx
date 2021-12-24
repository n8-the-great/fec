import React from 'react';
import token from '../../config.js';
// const axios = require('axios');
import axios from 'axios';

const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/';

class GeneralProductInfo extends React.Component {
  constructor (props) {
    super(props);
    this.selectProduct = this.selectProduct.bind(this);
  }

  // requestProduct() {
  //   axios.get(API_URL + 'products',
  //     {
  //       params: {
  //         count: 1
  //       },
  //       headers: {
  //         Authorization: token
  //       }
  //   })
  //   .then(results => {
  //     console.log(results.data[0]);
  //     this.setState({
  //       product: results.data[0]
  //     });
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }

  selectProduct(e) {
    e.preventDefault();
    this.props.productSelector(this.props.product.id);
  }

  render() {
    return (
      <div className='product-general-info'>
        <button onClick={this.selectProduct}>product id get test</button>
        General Product Info

        <div className='product-info'>
          <h3 className='product-category'>{this.props.product.category}</h3>
          <h1 className='product-title'>{this.props.product.name}</h1>
          <div className='product-price'>{this.props.product.default_price}</div>
          <div className='style-selector-placeholder'>Choose some styles</div>
        </div>

        <div className='gallery-placeholder'>This is where the Gallery will go</div>
        <div className='product-overview'>{this.props.product.description}</div>

      </div>
    )
  }
}

export default GeneralProductInfo;