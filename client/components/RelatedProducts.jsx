import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import RelatedProduct from './RelatedProduct.jsx';

import token from '../../config.js';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      related: undefined,
    }
    this.relatedProductsRequest = this.relatedProductsRequest.bind(this);
    this.populateRelated = this.populateRelated.bind(this);
  };


  populateRelated(data) {
    this.setState({
      related: data
    });

  }

  relatedProductsRequest(id, cb) {
    var getRelatedFromURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}/related`;

    $.ajax({
      url: getRelatedFromURL,
      type: 'GET',
      // data: JSON.stringify(dataObj),
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', token.ID);
      },
      contentType: 'application/json',
      dataType: 'json',
      success: function (response) {
        console.log('success!  see response');
        console.log(response);
        cb(response);
        // return response;
      },
      failure: function (response) {
        console.log('failed!  see response');
        console.log(response);
        return response;
      }
    });
  }

  componentDidMount() {
    console.log('component did mount');
    this.setState({
      related: this.relatedProductsRequest(this.props.id, this.populateRelated),
    })
    // console.log(typeof this.relatedProductsRequest(this.props.id));
    // console.log(this.props.id);

  }


  render() {

    if (this.state.related === undefined ) {
      return (
        <div className="relatedProducts">
          Related Products Go Here
      </div>
      );
    } else {
      console.log('checking state');
      console.log(this.state);
      return(
        <div className="relatedProducts">
          {
            this.state.related.map((item, index) => (
              <RelatedProduct
                key = {index}
                itemID = {item}
              />
            ))
          }
        </div>
      );
    }
  }
}

export default RelatedProducts;