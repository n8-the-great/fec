import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import token from '../../config.js';

var Outfit = (props) => {


  var [show, setShow] = useState(false);

  var changeShow = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  if (props.defaultAdd === true) {
    return (
      <React.Fragment>
      <div className="carousel-item" style={ {width: "25%"} } >
        <div className="carousel-action" onClick={ () => {changeShow()}}>&#9733;</div>

        <div className = "carousel-productDetails">
          <div className = 'carousel-add'> + <br /> Add to Outfit </div>
        </div>
      </div>
      </React.Fragment>
    )
  } else {


    return (
      <React.Fragment>
        <div className="carousel-item" style={ {width: "25%"} } onClick={ () =>
          {changeShow()}
        }>

          <div className="carousel-action" onClick={ () => {changeShow()}}>&#9733;</div>
          <div className = "carousel-productDetails">
            <div className = 'related-productImage' src={props.thumbnail} />
            <div className = 'related-productCategory related-details'>{props.product.category}  </div>
            <div className = 'related-productName related-details'>{props.product.name} </div>
            <div className = 'related-productPrice related-details'>{props.product.default_price} </div>
          </div>

        </div>
    </React.Fragment>
    );
  }
}




export default Outfit;