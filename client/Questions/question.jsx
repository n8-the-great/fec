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
  }

  // sortSeller(arr) {
  //   var newArr = [];
  //   for (var i = 0; i < arr.length; i ++) {
  //     if (arr[i])
  //   }
  // }

  report(e) {
    e.preventDefault();
    this.setState({
      reported: true
    })
  }

  sortHelpfulness(arr) {
    var convertedArray = [];

    for (var i = 0; i < arr.length; i ++) {
      convertedArray.push(arr[i]);
    }

    convertedArray.sort((a, b) => (a.question_helpfulness) - (b.question_helpfulness));
    var end = convertedArray.length - 1;
    for (var i = 0; i < convertedArray.length; i ++) {
      if (convertedArray[i].helpfulness === 0) {
        convertedArray.unshift(convertedArray[i]);
        convertedArray.splice(i + 1, 1);
      }

      if(i === end) {
        break;
      }
    }
    convertedArray.reverse();
    console.log(convertedArray);
    return convertedArray;
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
      <Answerlist answers={this.sortHelpfulness(this.arrayify(this.props.answers))} />
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