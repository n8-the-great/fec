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


      <div className = "carousel-productDetails">
        <div className = 'related-productImage' src={props.thumbnail} />
        <div className = 'related-productCategory related-details'>{props.category}  </div>
        <div className = 'related-productName related-details'>{props.itemName} </div>
        <div className = 'related-productPrice related-details'>{props.price} </div>
      </div>
      <Comparing preview={props.previewProduct} relatedName={props.itemName} relatedFeatures={props.features} show={show}/>
    </div>

  );
}




export default RelatedProduct;