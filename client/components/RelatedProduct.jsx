import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Comparing from './Comparing.jsx';

import token from '../../config.js';

var RelatedProduct = (props) => {

  // handleClick(e) {

  // }

  // console.log('preview product');
  //   console.log(props.previewProduct);

  var [show, setShow] = useState(false);

  var changeShow = (e) => {
    e.preventDefault();
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  var changeProduct = (e) => {
    e.preventDefault();
    // console.log(props);
    props.product_selection(props.relatedProduct.id);
  }


  return (
    <div className="carousel-item" style={ {width: "25%"} }>

      <div className="carousel-action" onClick={ () => {changeShow()}}>&#9733;</div>
      <div className = "carousel-productDetails">
        <div className = 'carousel-productImage' onClick={changeProduct}> <img src={props.relatedProduct.thumbnail_url}></img> </div>
        <div className = 'carousel-productCategory carousel-details'>{props.relatedProduct.category}  </div>
        <div className = 'carousel-productName carousel-details'>{props.relatedProduct.name} </div>
        <div className = 'carousel-productPrice carousel-details'>{props.relatedProduct.default_price} </div>
      </div>
      <Comparing preview={props.previewProduct} relatedName={props.itemName} relatedFeatures={props.features} show={show}/>
    </div>

  );
}




export default RelatedProduct;