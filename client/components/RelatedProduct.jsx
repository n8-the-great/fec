import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Comparing from './Comparing.jsx';

import token from '../../config.js';

var RelatedProduct = (props) => {

  var [show, setShow] = useState(false);

  var changeShow = (e) => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  var changeProduct = (e) => {
    e.preventDefault();
    // console.log(props);
    props.product_selection(props.relatedProduct);
  }


  return (
    <div className="carousel-item" style={ {width: "20%"} }>

      <div className="carousel-action" onClick={ () => {changeShow()}}>&#9733;</div>
      <div className = "carousel-productDetails" onClick={changeProduct} >

      <img className = 'carousel-productImage' src={props.relatedProduct.thumbnail_url}></img>
        <div className = 'carousel-details'>
          <div className = 'carousel-productCategory'> Category: {props.relatedProduct.category}  </div>
          <div className = 'carousel-productName'>{props.relatedProduct.name}  </div>
          <div className = 'carousel-slogan'>"{props.relatedProduct.slogan}" </div>
          <div className = 'carousel-product-description'>{props.relatedProduct.description}</div>
          <div className = 'carousel-productPrice'>price: ${props.relatedProduct.default_price} </div>
        </div>
      </div>
      <Comparing previewProduct={props.previewProduct} relatedProduct={props.relatedProduct} show={show} hide={changeShow}/>
    </div>

  );
}




export default RelatedProduct;