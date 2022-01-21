import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import plusSign from './src/plusSign.png';


var Outfit = (props) => {

  var clickHandler = (e) => {
    e.preventDefault();
    props.action(props.index);
  }

  console.log(props);


  if (props.defaultAdd === true) {

    return (
      <React.Fragment>
      <div className="carousel-item" style={ {width: "20%"} }>
        <div className="carousel-action"></div>
        <div className = "carousel-productDetails" onClick={clickHandler}>
          <img className = 'carousel-productImage' src={plusSign}></img>
            <div className = 'carousel-details'>
              <div className = 'carousel-productCategory'>  </div>
              <div className = 'carousel-productName'>  </div>
              <div className = 'carousel-slogan'>Click Here to Add Current Product to Your Outfit List</div>
              <div className = 'carousel-product-description'>+</div>
            </div>
        </div>
      </div>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
      <div className="carousel-item" style={ {width: "20%"} }>
        <div className="carousel-add-action" onClick={clickHandler}>X</div>
        <div className = "carousel-productDetails" onClick={props.product_selection}>
          <img className = 'carousel-productImage'  src={props.product.styles[0].photos[0].thumbnail_url}></img>
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