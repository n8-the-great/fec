import React from 'react';
import ReactDOM from 'react-dom';
import Questionapp from './Questions/questionapp.jsx';
import Reviews from './reviews/index.jsx';
import GeneralProductInfo from './overview/generalProductInfo.jsx';
import token from '../config.js';
import axios from 'axios';
import './style.css';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      product: {}
    }
    this.productSelector = this.productSelector.bind(this);
  }

  productSelector(id=59554) {
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
      this.setState({
        product: result.data
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
        <Questionapp product={this.state.product}/>
        <Reviews />
      </div>);
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
