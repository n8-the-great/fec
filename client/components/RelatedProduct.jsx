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

  var changeShow = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  return (
    <div className="carousel-item" style={ {width: "25%"} } onClick={ () =>
      {changeShow()}
    }>

      <div className="carousel-action" onClick={ () => {changeShow()}}>&#9733;</div>
      <div className = "carousel-productDetails">
        <div className = 'carousel-productImage'> <img src={props.thumbnail}></img> </div>
        <div className = 'carousel-productCategory carousel-details'>{props.category}  </div>
        <div className = 'carousel-productName carousel-details'>{props.itemName} </div>
        <div className = 'carousel-productPrice carousel-details'>{props.price} </div>
      </div>
      <Comparing preview={props.previewProduct} relatedName={props.itemName} relatedFeatures={props.features} show={show}/>
    </div>

  );
}




export default RelatedProduct;