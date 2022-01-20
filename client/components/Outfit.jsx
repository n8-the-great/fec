import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import token from '../../config.js';

var Outfit = (props) => {

  var clickHandler = (e) => {
    e.preventDefault();
    props.action(props.index);
  }

  console.log(props);


  if (props.defaultAdd === true) {
    return (
      <React.Fragment>
      <div className="carousel-item" style={ {width: "20%"} } >
        <div className = "carousel-productDetails">
          <div className = 'carousel-add' onClick={clickHandler}> + <br /> Add to Outfit </div>
        </div>
      </div>
      </React.Fragment>
    )
  } else {


    return (
      <React.Fragment>
        <div className="carousel-item" style={ {width: "20%"} }>
          <div className="carousel-action" onClick={clickHandler}>&#9733;</div>
          <div className = "carousel-productDetails" onClick={props.product_selection}>

            <img className = 'carousel-productImage'  src={props.product.thumbnail_url}></img>
              <div className = 'carousel-details'>
                <div className = 'carousel-productCategory'> Category: {props.product.category}  </div>
                <div className = 'carousel-productName'>{props.product.name}  </div>
                <div className = 'carousel-slogan'>"{props.product.slogan}" </div>
                <div className = 'carousel-product-description'>{props.product.description}</div>
                <div className = 'carousel-productPrice'>price: ${props.product.default_price} </div>
              </div>
          </div>
        </div>
    </React.Fragment>
    );
  }
}




export default Outfit;