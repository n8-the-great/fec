import React from 'react';
import Answerlist from './answerlist.jsx';
import axios from 'axios';
import token from '../../config.js';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qStyle: 'none',
      reported: false,
      helpfulness: this.props.question_helpfulness,
      expandedView: 1,
      voted: false
    }
    this.arrayify = this.arrayify.bind(this);
    this.sortHelpfulness = this. sortHelpfulness.bind(this);
    this.report = this.report.bind(this);
    this.sortSeller = this.sortSeller.bind(this);
    this.voteHelpful = this.voteHelpful.bind(this);
    this.answerModalToggle = this.answerModalToggle.bind(this);
  }

  answerModalToggle(e) {
    e.preventDefault();
    this.props.answerModalToggle(this.props.question_body, this.props.question_id);
  }

  arrayify(obj) {
    var arr = [];
    for (var key in obj) {
      arr.push(obj[key]);
    }
    return arr;
  }

  sortSeller(arr) {
    var sellerArr = [];
    for (var i = 0; i < arr.length; i ++) {
      if (arr[i].answerer_name === 'Seller') {
        sellerArr.unshift(arr[i]);
        arr.splice(i, 1);
      }
    }

    for (var i = 0; i < sellerArr.length; i ++) {
      arr.unshift(sellerArr[i]);
    }
    return arr;
  }

  report(e) {
    e.preventDefault();
    this.setState({
      reported: true
    })
  }

  sortHelpfulness(arr) {
    var zeroesArray = [];

    for (var i = 0; i < arr.length; i ++) {
      if (arr[i].helpfulness === 0) {
        zeroesArray.push(arr[i]);
        arr.splice(i, 1);
      }
    }

    arr.sort((a, b) => (a.helpfulness) - (b.helpfulness));
    arr.reverse();

    for (var i = 0; i < zeroesArray.length; i ++) {
      arr.push(zeroesArray[i]);
    }
    return arr;
  }

  voteHelpful(e) {
    e.preventDefault();
    var options = {
      method: 'put',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/' + this.props.question_id + '/helpful',
      headers: {
        Authorization: token,
        accept: 'application/json',
        'content-type': 'application/json',
      }
    }
    axios(options)
    .then(result => {
      this.setState({
        helpfulness: this.state.helpfulness + 1,
        voted: true
      })
    })
    .catch(err => {
      console.log(err);
    })
  }


  render() {
    return (<div style={{display: (this.props.index <= this.props.expandedView) ? 'block ' : 'none'}}>
      <div className='questionq'>
      <b>Q: </b>
      <span>{this.props.question_body} </span>
      </div>
      <span className='questionuseroptions'>
        <span>Helpful?</span>
        <span>
          <a style={{display: 'inline-block', padding: '5px'}} href={this.state.voted ? null : '#'} onClick={this.state.voted ? null : this.voteHelpful}>Yes {this.state.helpfulness}</a>
          <a onClick={this.report} style={{display: 'inline-block', padding: '5px'}} href={this.state.reported ? null : '#'}>{(this.state.reported ? 'Reported' : 'Report')}</a>
          <a href='#' onClick={this.answerModalToggle}>Add Answer</a>
        </span>
      </span>
      <b className='asker'>Asker</b>
      <div className='askername'>{this.props.asker_name}</div>
      <b style={{display: 'flex'}}>A: </b>
      <Answerlist answers={this.sortSeller(this.sortHelpfulness(this.arrayify(this.props.answers)))} />
    </div>);
  }
}

export default Question;