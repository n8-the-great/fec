import React from 'react';
import ReactDOM from 'react-dom';
import Questionapp from './Questions/questionapp.jsx';
import Reviews from './reviews/index.jsx';
import GeneralProductInfo from './overview/generalProductInfo.jsx';
import token from '../config.js';
import axios from 'axios';
import './style.css';
import RelatedProducts from './components/RelatedProducts.jsx';
import Outfits from './components/Outfits.jsx';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      product: {},
      haveProduct: false,
      id: 59556,
      related: []
    }
    this.productSelector = this.productSelector.bind(this);
    this.clickTracker = this.clickTracker.bind(this);
  }

  productSelector(id=59556) {
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
        product: result.data,
        haveProduct: true
      });
    })
    .catch(err => {
      console.log(err);
    });
  }


getDateTime() {
    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;
}

  clickTracker(e) {
    e.preventDefault();
    console.log(e.target.localName, e.target.classList[e.target.classList.length - 1], this.getDateTime());

    var options = {
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions',
      headers: {
        Authorization: token,
        accept: 'application/json',
        'content-type': 'application/json'
      },
      data: {
        element: e.target.localName,
        widget: e.target.classList[e.target.classList.length - 1],
        time: this.getDateTime()
      }
    }
  }


  componentDidMount() {
    this.productSelector();
  }


  render() {
    return (<div className='app'>
      <GeneralProductInfo productid={this.state.id} product={this.state.product} productSelector={this.productSelector}/>
      <Questionapp clickTracker={this.clickTracker} product={this.state.product}/>
      <RelatedProducts product={this.state.product} productSelector={this.productSelector}/>
      <Outfits product={this.state.product}/>
    </div>);
  }
}
/*
<Questionapp product={this.state.product}/>
*/

ReactDOM.render(<App />, document.getElementById('app'));
