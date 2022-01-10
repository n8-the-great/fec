import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import token from '../../config.js';

var RelatedProduct = (props) => {

  return (
    <div className="carousel-item" style={ {width: "50%"} }>

      <div className = "carousel-productDetails">
        <div className = 'related-productImage' src={props.thumbnail} />
        <div className = 'related-productCategory'>{props.category}  </div>
        <div className = 'related-productName'>{props.item} </div>
        <div className = 'related-productPrice'>{props.price} </div>
      </div>
    </div>
  );
}




export default RelatedProduct;