import React from 'react';
import moment from 'moment';

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      aStyle: 'none',
      reported: false
    }
    this.dateFormatter = this.dateFormatter.bind(this);
    this.report = this.report.bind(this);
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

  render() {
    return (<div style={{display: (this.props.index <= 1) ? 'block' : this.state.aStyle}}>
      <div>{this.props.body}</div>
      <span>Helpful?</span>
      <span>
        <a style={{display: 'inline-block', padding: '5px'}} href='#'>Yes {this.props.helpfulness}</a>
        <a onClick={this.report} style={{display: 'inline-block', padding: '5px'}} href={this.state.reported ? null : '#'}>{(this.state.reported ? 'Reported' : 'Report')}</a>
      </span>


      <div>by <b>Seller</b>  <span style={{display: (this.props.name !== 'Seller') ? 'inline-block' : 'none'}}>{this.props.name}</span>, {this.dateFormatter(this.props.date)}</div>
      <b>Helpfulness:</b>
      <div>{this.props.helpfulness}</div>
      <b>Photos:</b>
      <div>{JSON.stringify(this.props.photos)}</div>
    </div>
    );
  }
}

export default Answer;