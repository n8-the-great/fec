import React from 'react';
import ReactDOM from 'react-dom';
import Questionapp from './Questions/questionapp.jsx';
import Reviews from './reviews/index.jsx';
import GeneralProductInfo from './overview/generalProductInfo.jsx';
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
      related: []
    }
    this.productSelector = this.productSelector.bind(this);
  }

  productSelector(id=59556) {
    console.log('changing to this id: ', id);
    var options = {
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/' + id,
      headers: {
        Authorization: token,
        accept: 'application/json',
        'content-type': 'application/json'
      }
    }
    return axios(options)
    .then(result => {
      this.setState({
        product: result.data
      }, () => {
        console.log('this state product',this.state.product, this.state.product.id, this.state.product.name);
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
    return (<div className='app'>
      <GeneralProductInfo product={this.state.product} productSelector={this.productSelector}/>
      <Questionapp product={this.state.product}/>
      <RelatedProducts product={this.state.product} productSelector={this.productSelector}/>
      <Outfits product={this.state.product}/>
    </div>);
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
