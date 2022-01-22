import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import plusSign from './src/plusSign.png';


var Outfit = (props) => {

  var clickHandler = (e) => {
    e.preventDefault();
    props.action(props.index);
  }



  if (props.defaultAdd === true) {

    return (
      <React.Fragment>
      <div className={props.darkMode === false ? "carousel-item relatedProductCards": "carousel-item-dark relatedProductCards" } style={ {width: "20%"} }>
        <div className="carousel-action"></div>
        <div className = {props.darkMode === false ? "carousel-productDetails relatedProductCards": "carousel-productDetails-dark relatedProductCards"} onClick={clickHandler}>
          <img className = 'carousel-productImage' src={plusSign}></img>
          <div className = {props.darkMode === false ? 'carousel-details relatedProductCards': 'carousel-details-dark relatedProductCards'}>
            <div className = {props.darkMode === false ? 'carousel-productCategory relatedProductCards' : 'carousel-productCategory-dark relatedProductCards'}>  </div>
            <div className = 'carousel-productName'>  </div>
            <div className = 'carousel-slogan'>Click Here to Add Current Product to Your Outfit List</div>
            <div className = 'carousel-product-description'> </div>
          </div>
        </div>
      </div>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
      <div className={props.darkMode === false ? "carousel-item relatedProductCards": "carousel-item-dark relatedProductCards" } style={ {width: "20%"} }>
        <div className="carousel-add-action" onClick={clickHandler}>x</div>
        <div className = {props.darkMode === false ? "carousel-productDetails relatedProductCards": "carousel-productDetails-dark relatedProductCards"} onClick={props.product_selection}>
          <img className = 'carousel-productImage'  src={props.product.styles[0].photos[0].thumbnail_url}></img>
          <div className = {props.darkMode === false ? 'carousel-details relatedProductCards': 'carousel-details-dark relatedProductCards'}>
            <div className = {props.darkMode === false ? 'carousel-productCategory relatedProductCards' : 'carousel-productCategory-dark relatedProductCards'} />
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