import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Outfit from './Outfit.jsx';

import token from '../../config.js';

class Outfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      wardrobe: [],
      activeCarousel: 0,
      carouselSize: 4

    }
    this.requestPromise = this.requestPromise.bind(this);
    this.productRequest = this.productRequest.bind(this);
    this.relatedProductsRequest = this.relatedProductsRequest.bind(this);
    this.productStylesRequest = this.productStylesRequest.bind(this);

  };


  requestPromise(urlReq, id) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: urlReq,
        type: 'GET',
        // data: JSON.stringify(dataObj),
        beforeSend: function (xhr) {
          xhr.setRequestHeader('Authorization', token.ID);
        },
        contentType: 'application/json',
        dataType: 'json',
        success: function (response) {
          resolve(response);
          // runs a cb on an array of nums
        },
        failure: function (response) {
          console.log('failed!');
          reject(response);
        }
      });
    })
  }


  productRequest(id) {
    var getProdFromURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`;

    return this.requestPromise(getProdFromURL, id);
  }

  relatedProductsRequest(id) {
    var getRelatedFromURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/related`;

    return this.requestPromise(getRelatedFromURL, id);
  }

  productStylesRequest(id) {
    var getStylesFromURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/styles`;

    return this.requestPromise(getStylesFromURL, id);
  }

  updateCarousel(newIndex) {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= this.state.related.count) {
      newIndex = this.state.related.count - 1;
    }

    this.setState({
      activeCarousel: newIndex,
    });
  }


  // componentDidMount() {
  //   this.props.productSelector()
  //     .then(() => {
  //       if (Object.keys(this.props.product).length !== 0) {

  //         this.relatedProductsRequest(this.props.product.id)
  //           .then((relatedProductArray) => {

  //             var doNextPromise = (p) => {
  //               this.productRequest(relatedProductArray[p])
  //                 .then((product) => {
  //                   this.setState({
  //                     related: [...this.state.related, product],
  //                   })

  //                   return this.productStylesRequest(relatedProductArray[p]);
  //                 })
  //                 .then((productStyles) => {

  //                   // make shallow copy of item
  //                   var relatedItems = [...this.state.related];

  //                   // shallow copy of item to mutate
  //                   var relatedItem = {...relatedItems[p]};

  //                   // replace property
  //                   relatedItem.thumbnail_url = productStyles.results[0].photos[0].thumbnail_url;
  //                   relatedItems[p] = relatedItem;


  //                   this.setState({
  //                     related: relatedItems
  //                   });

  //                   p++;
  //                   if (p < relatedProductArray.length) {
  //                     doNextPromise(p);
  //                   }
  //                 })
  //             }
  //             // call the above recursive function on the first index
  //             doNextPromise(0);
  //           })
  //           .catch((error) => {
  //             console.log(error);
  //           })
  //         } else {
  //           console.log('props.product is empty');
  //         }
  //   })
  // }

  // always render a Outfit add

  render() {
    if (this.state.wardrobe.length === 0) {
      return (
        <div className="carousel">
          <div className="carousel-inner">
            <Outfit key = {0} defaultAdd = {true} />
          </div>
        </div>
      )
    }
    else {
      return(
        <div className="carousel">
          <div className="carousel-inner"
                style={{ transform: `translateX(-${(this.state.activeCarousel * 100)/4}%)` }}>
            Outfits <br />
            <Outfit key = {0} defaultAdd = {true} />
            {
              this.state.wardrobe.map((item, index) => (

                // return React.cloneElement(item, {width: "100%"})
                <Outfit
                  key = {index + 1}
                  previewProduct = {this.props.product}
                  features = {this.props.features}
                  category = {this.props.category}
                  itemName = {this.props.name}
                  price = {this.props.default_price}
                  thumbnail = {this.props.thumbnail_url}
                  img_url = {this.props.img_url}
                  // add star rating later
                />
              ))
            }

          </div>
          <div className="carousel-buttons">
            <button onClick = {() => { this.updateCarousel(this.state.activeCarousel - 1);}}>Previous</button>
            <button onClick = {() => { this.updateCarousel(this.state.activeCarousel + 1);}}>Next</button>

          </div>
        </div>
      );
    }
  }
}

export default Outfits;
