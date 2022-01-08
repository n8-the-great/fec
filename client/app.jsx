import React from 'react';
import ReactDOM from 'react-dom';
import Questionapp from './Questions/questionapp.jsx';
import Reviews from './reviews/index.jsx';
import GeneralProductInfo from './overview/GeneralProductInfo.jsx';
import token from '../config.js';
import axios from 'axios';
import './style.css';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      product: {},
      haveProduct: false
    }
    this.productSelector = this.productSelector.bind(this);
  }

  productSelector(id=59555) {
    var options = {
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/' + id,
      headers: {
        Authorization: token,
        accept: 'application/json',
        'content-type': 'application/json',
      }
    }
    axios(options)
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
      {this.state.haveProduct
       ? <GeneralProductInfo product={this.state.product} productSelector={this.productSelector}/>
       : <div>Retrieving Product Data</div>
      }
      </div>);
  }
}
/*
<Questionapp product={this.state.product}/>
*/

ReactDOM.render(<App />, document.getElementById('app'));
