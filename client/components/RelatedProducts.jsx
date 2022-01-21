import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import RelatedProduct from './RelatedProduct.jsx';

import token from '../../config.js';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      related: [],
      activeCarousel: 0,
      carouselSize: 4

    }
    this.requestPromise = this.requestPromise.bind(this);
    this.productRequest = this.productRequest.bind(this);
    this.relatedProductsRequest = this.relatedProductsRequest.bind(this);
    this.productStylesRequest = this.productStylesRequest.bind(this);
    this.updateRelated = this.updateRelated.bind(this);

  };


  requestPromise(urlReq, id) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: urlReq,
        type: 'GET',
        // data: JSON.stringify(dataObj),
        beforeSend: function (xhr) {
          xhr.setRequestHeader('Authorization', token);
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
    console.log('related.count:', this.state.related.count);
    console.log('newIndex:', newIndex);

    this.setState({
      activeCarousel: newIndex,
    });
  }

  updateRelated(id = 59554) {
    if (typeof id === 'object') {
      this.props.productSelector(id);
    }

    return new Promise((resolve, reject) => {
      this.setState({
        related: [],
        activeCarousel: 0,
      });

      if (typeof id === 'object') {
        id = id.id;
      }
      this.props.productSelector(id) // update preview
      .then(() => {
        if (Object.keys(this.props.product).length !== 0) {
          this.relatedProductsRequest(this.props.product.id)
            .then((relatedProductArray) => {
              // recursive function for each
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
          } else {
            console.log('props.product is empty');
          }
      })
    })

  }


  componentDidMount() {
    this.updateRelated();
  }


  render() {
    if (this.state.related === undefined ) {
      return (
        <div className="relatedProducts">
          Related Products Not Found
      </div>
      );
    } else {
      console.log(this.state.related);
      return(
        <React.Fragment>
        <button className="carousel-button-left" onClick = {() => { this.updateCarousel(this.state.activeCarousel - 1);}}>Previous</button>
        <button className="carousel-button-right" onClick = {() => { this.updateCarousel(this.state.activeCarousel + 1);}}>Next</button>

        <div className="carousel">
          <div className="carousel-inner"
               style={{ transform: `translateX(-${(this.state.activeCarousel * 100)/5}%)` }}>
            Related Products <br />


            {
              this.state.related.map((item, index) => {

                return (
                // return React.cloneElement(item, {width: "100%"})
                  <RelatedProduct
                    key = {index}
                    previewProduct = {this.props.product}
                    relatedProduct = {item}
                    product_selection = {this.updateRelated}
                    // add star rating later
                  />
                );
              })
            }
          </div>
        </div>
        </React.Fragment>
      );
    }
  }
}

export default RelatedProducts;