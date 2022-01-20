import React from 'react';
import moment from 'moment';
import token from '../../config.js';
import axios from 'axios';

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      aStyle: 'none',
      reported: false,
      helpfulness: this.props.helpfulness,
      expanded: false,
      voted: false
    }
    this.dateFormatter = this.dateFormatter.bind(this);
    this.report = this.report.bind(this);
    this.voteHelpful = this.voteHelpful.bind(this);
  }



  dateFormatter(date) {
    var months = ['January','February','March','April','May','June','July',
            'August','September','October','November','December'];
    return months[Number(date.substring(5, 7))] + ' ' +  date.substring(8, 10) + ', ' + date.substring(0, 4);
  }

  report(e) {
    e.preventDefault();
    var options = {
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${this.props.answerid}/report`,
      headers: {
        Authorization: token,
        accept: 'application/json',
        'content-type': 'application/json'
      }
    }

    axios(options)
    .then(result => {
      this.setState({
        reported: true
      }, () => {
        alert('Answer reported');
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  voteHelpful(e) {
    e.preventDefault();
    var options = {
      method: 'put',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/' + this.props.answerid + '/helpful',
      headers: {
        Authorization: token,
        accept: 'application/json',
        'content-type': 'application/json'
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
    if (this.state.expanded === false) {
      return (<div className='QuestionsAndAnswers'>
        <div className='answerbody QuestionsAndAnswers'>{this.props.body}</div>
        <span className='answerhelpful QuestionsAndAnswers'>Helpful?</span>
        <span className='QuestionsAndAnswers'>
          <a className='QuestionsAndAnswers' style={{display: 'inline-block', padding: '5px'}} href={this.state.voted ? null : '#'} onClick={this.state.voted ? null : this.voteHelpful}>Yes {this.state.helpfulness}</a>
          <a className='QuestionsAndAnswers' style={{display: 'inline-block', padding: '5px'}} onClick={this.state.reported ? null : this.report}  href={this.state.reported ? null : '#'}>{(this.state.reported ? 'Reported' : 'Report')}</a>
        </span>
        <div className='byuser QuestionsAndAnswers'>by <b className='QuestionsAndAnswers' style={{display: (this.props.name === 'Seller') ? 'inline-block' : 'none'}}>Seller</b>  <span className='QuestionsAndAnswers' style={{display: (this.props.name !== 'Seller') ? 'inline-block' : 'none'}}>{this.props.name}</span>, {this.dateFormatter(this.props.date)}</div>
        <b className='QuestionsAndAnswers' style={{display: this.props.photos.length > 0 ? 'block' : 'none', color: '#204ba1'}}>Photos:</b>
        <img className='qaimage QuestionsAndAnswers' src={this.props.photos[0]}/>
        <img className='qaimage QuestionsAndAnswers' src={this.props.photos[1]}/>
        <img className='qaimage QuestionsAndAnswers' src={this.props.photos[2]}/>
        <img className='qaimage QuestionsAndAnswers' src={this.props.photos[3]}/>
        <img className='qaimage QuestionsAndAnswers' src={this.props.photos[4]}/>
      </div>
      );
    } else {
      return (<div className='QuestionsAndAnswers'>
      <div className='QuestionsAndAnswers'>{this.props.body}</div>
      <span className='answerhelpful QuestionsAndAnswers'>Helpful?</span>
      <span className='QuestionsAndAnswers'>
        <a className='QuestionsAndAnswers' style={{display: 'inline-block', padding: '5px'}} href='#' onClick={this.voteHelpful}>Yes {this.state.helpfulness}</a>
        <a className='QuestionsAndAnswers' onClick={this.report} style={{display: 'inline-block', padding: '5px'}} href={this.state.reported ? null : '#'}>{(this.state.reported ? 'Reported' : 'Report')}</a>
      </span>
      <div className='QuestionsAndAnswers'>by <b className='QuestionsAndAnswers' style={{display: (this.props.name === 'Seller') ? 'inline-block' : 'none'}}>Seller</b>  <span className='QuestionsAndAnswers' style={{display: (this.props.name !== 'Seller') ? 'inline-block' : 'none'}}>{this.props.name}</span>, {this.dateFormatter(this.props.date)}</div>
      <b className='QuestionsAndAnswers' style={{display: this.props.photos.length > 0 ? 'block' : 'none', color: '#204ba1'}}>Photos:</b>
      <img className='qaimage QuestionsAndAnswers' src={this.props.photos[0]}/>
      <img className='qaimage QuestionsAndAnswers' src={this.props.photos[1]}/>
      <img className='qaimage QuestionsAndAnswers' src={this.props.photos[2]}/>
      <img className='qaimage QuestionsAndAnswers' src={this.props.photos[3]}/>
      <img className='qaimage QuestionsAndAnswers' src={this.props.photos[4]}/>
      <div classname='QuestionsAndAnswers'>{JSON.stringify(this.props.photos)}</div>
    </div>
    );
    }
  }
}

export default Answer;