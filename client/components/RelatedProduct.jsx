import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import token from '../../config.js';

class RelatedProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: undefined
    }
  };



  render() {
    // console.log('relatedProduct prop');
    // console.log(this.props);
    return (
      <div>
      <br />
      <br />
      <div className = 'productImage'> {this.props.thumbnail} </div>
      <div className = 'productCategory'>{this.props.category} </div>
      <div className = 'productName'>{this.props.item}</div>
      <div className = 'productPrice'>{this.props.price}</div>

      </div>
    );
  }
}



export default RelatedProduct;