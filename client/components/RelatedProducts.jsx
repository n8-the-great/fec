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
    //console.log('component did mount');

    this.relatedProductsRequest(this.props.id)
      .then((relatedProductArray) => {
        // console.log('relatedProductArray: ', relatedProductArray);
        var doNextPromise = (p) => {
          this.productRequest(relatedProductArray[p])
            .then((product) => {
              this.setState({
                related: [...this.state.related, product],
              })
              // go to next index
              p++;
              if (p < relatedProductArray.length) {
                doNextPromise(p);
              }
              //return this.productStylesRequest(relatedProductArray[p]);
            })
            // .then((styleInfo) => {
            //   item.thumbnail_url = styleInfo.results[0].photos[0].thumbnail_url;
            //   item.img_url = styleInfo.results[0].photos[0].url;
            //   console.log('item');
            //   console.log(item);
            //   result.push(item);
            //   console.log('result');
            //   console.log(result);
            //   // this.setState({
            //   //   related: result,
            //   // })
            //   p++;
            //   console.log(p);
            //   if (p < data.length) {
            //     doNextPromise(p);
            //   }
            // })
        }


        doNextPromise(0);


        // for (var i = 0; i < data.length; i++) {
        //   console.log('i:', i);
        //   this.productRequest(data[i])
        //     .then((product) => {
        //       console.log('product');
        //       console.log(product);
        //       item.id = product.id;
        //       item.category = product.category;
        //       item.name = product.name;
        //       item.default_price = product.default_price;
        //       return this.productStylesRequest(item.id);
        //     })
        //     .then((styleInfo) => {
        //       item.thumbnail_url = styleInfo.results[0].photos[0].thumbnail_url;
        //       item.img_url = styleInfo.results[0].photos[0].url;
        //       console.log('item');
        //       console.log(item);
        //       result.push(item);
        //       this.setState({
        //         related: result,
        //       })

        //     })
        // }



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

          <br />
        </div>
      );
    }
  }
}

export default RelatedProducts;