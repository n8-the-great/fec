import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import token from '../../config.js';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      related: null
    }
    this.relatedProductsRequest = this.relatedProductsRequest.bind(this);
  };


  populateRelated = (data) => {
    this.setState({
      related: data
    });

  }


  relatedProductsRequest(id) {
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
        // populateRelated(response);
        return response;
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
    console.log(typeof this.relatedProductsRequest(this.props.id));
    // console.log(this.props.id);
  }


  render() {
    console.log('hello');
    console.log(this.props.id);
    console.log(this.state);

    return(
      <div className="relatedProducts">
        Related Products
      </div>
    );
  }
}

export default RelatedProducts;