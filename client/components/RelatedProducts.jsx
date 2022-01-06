import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import RelatedProduct from './RelatedProduct.jsx';

import token from '../../config.js';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      related: [],
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
    var getProdFromURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/`;

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


  componentDidMount() {

    this.relatedProductsRequest(this.props.id)
      .then((relatedProductArray) => {

        var doNextPromise = (p) => {
          this.productRequest(relatedProductArray[p])
            .then((product) => {
              this.setState({
                related: [...this.state.related, product],
              })

              return this.productStylesRequest(relatedProductArray[p]);
            })
            .then((productStyles) => {

              // make shallow copy of item
              var relatedItems = [...this.state.related];

              // shallow copy of item to mutate
              var relatedItem = {...relatedItems[p]};

              // replace property
              relatedItem.thumbnail_url = productStyles.results[0].photos[0].thumbnail_url;
              relatedItems[p] = relatedItem;


              this.setState({
                related: relatedItems
              });

              p++;
              if (p < relatedProductArray.length) {
                doNextPromise(p);
              }
            })
        }
        // call the above recursive function on the first index
        doNextPromise(0);
      })
      .catch((error) => {
        console.log(error);
      })
  }


  render() {
    if (this.state.related === undefined ) {
      return (
        <div className="relatedProducts">
          Related Products Not Found
      </div>
      );
    } else {
      return(
        <div className="relatedProducts">
          Related Products
          {
            this.state.related.map((item, index) => (
              <RelatedProduct
                key = {index}
                category = {item.category}
                item = {item.name}
                price = {item.default_price}
                thumbnail = {item.thumbnail_url}
                img_url = {item.img_url}
                // add star rating later
              />
            ))
          }
        </div>
      );
    }
  }
}

export default RelatedProducts;
