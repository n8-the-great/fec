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
      <div className="carousel-item" style={{ width: width }}>
      <br />

      <div className = 'productImage'> {this.props.thumbnail} </div><br /><br />
      <div className = 'productCategory'>{this.props.category} </div><br /><br />
      <div className = 'productName'>{this.props.item}</div><br /><br />
      <div className = 'productPrice'>{this.props.price}</div><br /><br />

      </div>
    );
  }
}



export default RelatedProduct;