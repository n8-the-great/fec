import React from 'react';
import ReactDOM from 'react-dom';
import Questionapp from './Questions/questionapp.jsx';
import Reviews from './reviews/index.jsx';
import GeneralProductInfo from './overview/GeneralProductInfo.jsx';
import token from '../config.js';
import axios from 'axios';
import './style.css';
import RelatedProducts from './components/RelatedProducts.jsx';
import Outfits from './components/Outfits.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      product: {},
      haveProduct: false,
      id: 59554,
      related: []
    }
    this.productSelector = this.productSelector.bind(this);
  }

  productSelector(id=59555) {
    var options = {
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/' + id,
      headers: {
        // Authorization: token,
        Authorization: token,
        accept: 'application/json',
        'content-type': 'application/json',
      }
    }
    return axios(options)
    .then(result => {
      // console.log('name', result.data.name, 'id', result.data.id);
      this.setState({
        product: result.data,
        haveProduct: true
      });
    })
    .catch(err => {
      console.log(err);
    });
  }


  componentDidMount() {
    this.productSelector();
  }


  render() {

    return (<div>
      <GeneralProductInfo product={this.state.product} productSelector={this.productSelector}/>

      <RelatedProducts product={this.state.product} productSelector={this.productSelector}/>
      <Outfits product={this.state.product}/>
      <Questionapp product={this.state.product}/>
    </div>);
  }
}
/*
<Questionapp product={this.state.product}/>
*/

ReactDOM.render(<App />, document.getElementById('app'));
