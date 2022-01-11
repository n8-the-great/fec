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
    this.setState({
      reported: true
    })
  }

  voteHelpful(e) {
    e.preventDefault();
    var options = {
      method: 'put',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/' + this.props.answerid + '/helpful',
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
    if (this.state.expanded === false) {
      return (<div>
        <div>{this.props.body}</div>
        <span>Helpful?</span>
        <span>
          <a style={{display: 'inline-block', padding: '5px'}} href='#' onClick={this.state.voted ? null : this.voteHelpful}>Yes {this.state.helpfulness}</a>
          <a onClick={this.report} style={{display: 'inline-block', padding: '5px'}} href={this.state.reported ? null : '#'}>{(this.state.reported ? 'Reported' : 'Report')}</a>
        </span>


        <div>by <b style={{display: (this.props.name === 'Seller') ? 'inline-block' : 'none'}}>Seller</b>  <span style={{display: (this.props.name !== 'Seller') ? 'inline-block' : 'none'}}>{this.props.name}</span>, {this.dateFormatter(this.props.date)}</div>
        <b>Helpfulness:</b>
        <div>{this.props.helpfulness}</div>
        <b>Photos:</b>
        <img src={this.props.photos[0]}/>
        <img src={this.props.photos[1]}/>
        <img src={this.props.photos[2]}/>
        <img src={this.props.photos[3]}/>
        <img src={this.props.photos[4]}/>
        <div>{JSON.stringify(this.props.photos)}</div>
      </div>
      );
    } else {
      return (<div>
      <div>{this.props.body}</div>
      <span>Helpful?</span>
      <span>
        <a style={{display: 'inline-block', padding: '5px'}} href='#' onClick={this.voteHelpful}>Yes {this.state.helpfulness}</a>
        <a onClick={this.report} style={{display: 'inline-block', padding: '5px'}} href={this.state.reported ? null : '#'}>{(this.state.reported ? 'Reported' : 'Report')}</a>
      </span>
      <div>by <b style={{display: (this.props.name === 'Seller') ? 'inline-block' : 'none'}}>Seller</b>  <span style={{display: (this.props.name !== 'Seller') ? 'inline-block' : 'none'}}>{this.props.name}</span>, {this.dateFormatter(this.props.date)}</div>
      <b>Helpfulness:</b>
      <div>{this.props.helpfulness}</div>
      <b>Photos:</b>
      <img src={this.props.photos[0]}/>
      <img src={this.props.photos[1]}/>
      <img src={this.props.photos[2]}/>
      <img src={this.props.photos[3]}/>
      <img src={this.props.photos[4]}/>
      <div>{JSON.stringify(this.props.photos)}</div>
    </div>
    );
    }
  }
}

export default Answer;