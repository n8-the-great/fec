import React from 'react';
import Answerlist from './answerlist.jsx';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qStyle: 'none',
      reported: false
    }
    this.arrayify = this.arrayify.bind(this);
    this.sortHelpfulness = this. sortHelpfulness.bind(this);
    this.report = this.report.bind(this);
    this.sortSeller = this.sortSeller.bind(this);
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

  arrayify(obj) {
    var arr = [];
    for (var key in obj) {
      arr.push(obj[key]);
    }
    return arr;
  }

  render() {
    return (<div style={{display: (this.props.index <= 1) ? 'block' : this.state.qStyle}}>
      <b>Q:</b>
      <span>{this.props.question_body} </span>
      <span>Helpful?</span>
      <span>
        <a style={{display: 'inline-block', padding: '5px'}} href='#'>Yes {this.props.question_helpfulness}</a>
        <a onClick={this.report} style={{display: 'inline-block', padding: '5px'}} href={this.state.reported ? null : '#'}>{(this.state.reported ? 'Reported' : 'Report')}</a>
      </span>
      <b style={{display: 'flex'}}>A: </b>
      <Answerlist answers={this.sortSeller(this.sortHelpfulness(this.arrayify(this.props.answers)))} />
      <button style={{display: (this.arrayify(this.props.answers).length > 2) ? 'block' : 'none'}}>See more answers</button>
      <b>Asker</b>
      <div>{this.props.asker_name}</div>
      <b>Date</b>
      <div>{this.props.question_date}</div>
      <b>Helpfulness</b>
      <div>{this.props.question_helpfulness}</div>
      <b>Question ID</b>
      <div>{this.props.question_id}</div>
      <b>Reported</b>
      <div>{this.props.reported}</div>
    </div>);
  }
}

export default Question;