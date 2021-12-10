import React from 'react';
import token from '../../config.js';
import axios from 'axios';
import sample from '../../sampledata.js';

class Questionslist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      answers: []
    };
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
  }

  post() {
    var options = {
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp32/qa/questions',
      data: {
        body: 'testquestion',
        name: 'testusername',
        email: 'testemail',
        product_id: 0
      },
      headers: {
        Authorization: token,
        accept: 'application/json',
        'content-type': 'application/json'
      }
    }

    axios(options)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
  }

  get() {
    var options = {
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp32/qa/questions?product_id=59553',
      headers: {
        Authorization: token,
        accept: 'application/json',
        'content-type': 'application/json',
      }
    }

    axios(options)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
  }

  componentDidMount() {
    this.setState({
      questions: sample.questions.results,
      answers: sample.answers.results
    }, () => {
      console.log(this.state.questions, this.state.answers);
    })
  }

  render() {
    return (<div>
      <div>question list</div>
      <button onClick={this.get}>get tester</button>
      <button onClick={this.post}>post tester</button>
    </div>);
  }
}

export default Questionslist;