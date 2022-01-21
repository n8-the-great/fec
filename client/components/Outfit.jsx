import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import plusSign from './src/plusSign.png';


var Outfit = (props) => {

  var clickHandler = (e) => {
    e.preventDefault();
    props.action(props.index);
  }



  if (props.defaultAdd === true) {

    return (
      <React.Fragment>
<<<<<<< HEAD
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
=======
      <div className="carousel-item" style={ {width: "25%"} } >
        <div className = "carousel-productDetails">
          <div className = 'carousel-add' onClick={clickHandler}> + <br /> Add to Outfit </div>
>>>>>>> master
        </div>
      </div>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
<<<<<<< HEAD
      <div className="carousel-item" style={ {width: "20%"} }>
        <div className="carousel-action" onClick={clickHandler}>&#9733;</div>
        <div className = "carousel-productDetails" onClick={props.product_selection}>
          <img className = 'carousel-productImage'  src={props.product.styles[0].photos[0].thumbnail_url}></img>
            <div className = 'carousel-details'>
              <div className = 'carousel-productCategory'> Category: {props.product.category}  </div>
              <div className = 'carousel-productName'>{props.product.name}  </div>
              <div className = 'carousel-slogan'>"{props.product.slogan}" </div>
              <div className = 'carousel-product-description'>{props.product.description}</div>
              <div className = 'carousel-productPrice'>price: ${props.product.default_price} </div>
            </div>
=======
        <div className="carousel-item" style={ {width: "25%"} }>
          <div className="carousel-action" onClick={clickHandler}>&#9733;</div>
          <div className = "carousel-productDetails">
            <div className = 'carousel-productImage' src={props.thumbnail} />
            <div className = 'carousel-productCategory carousel-details'>{props.product.category}  </div>
            <div className = 'carousel-productName carousel-details'>{props.product.name} </div>
            <div className = 'carousel-productPrice carousel-details'>{props.product.default_price} </div>
          </div>
>>>>>>> master
        </div>
      </div>
     </React.Fragment>
    );
  }
}




export default Outfit;