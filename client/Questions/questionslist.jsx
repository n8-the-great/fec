import React from 'react';
import token from '../../config.js';
import axios from 'axios';
import sample from '../../sampledata.js';
import Question from './question.jsx';
import Promise from 'bluebird';
import Search from './search.jsx';

class Questionslist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      productid: '59555',
      bStyle: 'none',
      expanded: false,
      keyword: ''
    };
    this.get = this.get.bind(this);
    // this.post = this.post.bind(this);
    this.sortHelpfulness = this.sortHelpfulness.bind(this);
    this.toggleQuestions = this.toggleQuestions.bind(this);
    this.arrayShortener = this.arrayShortener.bind(this);
    this.searchKeyword = this.searchKeyword.bind(this);
    this.searchSort = this.searchSort.bind(this);
  }

  searchSort(arr) {
    if (this.state.keyword.length >= 3 ) {
      var contains = [];
      var original = arr;
      for (var i = 0; i < original.length; i ++) {
        if (original[i].question_body.includes(this.state.keyword)) {
          contains.unshift(original[i]);
          original.splice(i, 1);
        }
      }

      for (var i = 0; i < original.length; i ++) {
        contains.push(original[i]);
      }

      return contains;
    } else {
      return arr;
    }
  }

  searchKeyword(keyword) {
    if (keyword.length > 0) {
      this.setState({
        keyword: keyword
      }, () => {
        console.log('parent state', this.state.keyword);
      });
    } else {
      this.setState({
        keyword: ''
      }, () => {
        console.log('parent state', this.state.keyword);
      });
    }
  }

  arrayShortener(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i ++) {
      if (i === 0 || i === 1) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

  toggleQuestions(e) {
    e.preventDefault();
    this.setState({
      expanded: !this.state.expanded
    })
  }

  sortHelpfulness(arr) {
    var zeroesArray = [];

    for (var i = 0; i < arr.length; i ++) {
      if (arr[i].question_helpfulness === 0) {
        zeroesArray.push(arr[i]);
        arr.splice(i, 1);
      }
    }

    arr.sort((a, b) => (a.question_helpfulness) - (b.question_helpfulness));
    arr.reverse();

    for (var i = 0; i < zeroesArray.length; i ++) {
      arr.push(zeroesArray[i]);
    }
    return arr;
  }
  // post() {
  //   var options = {
  //     method: 'post',
  //     url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp32/qa/questions',
  //     data: {
  //       body: 'testquestion',
  //       name: 'testusername',
  //       email: 'testemail',
  //       product_id: 0
  //     },
  //     headers: {
  //       Authorization: token,
  //       accept: 'application/json',
  //       'content-type': 'application/json'
  //     }
  //   }

  //   axios(options)
  //   .then(result => {
  //     console.log(result);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }

  get() {
    var options = {
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=' + this.state.productid,
      headers: {
        Authorization: token,
        accept: 'application/json',
        'content-type': 'application/json',
      }
    }

    axios(options)
    .then(result => {
      this.setState({
        questions: this.sortHelpfulness(result.data.results)
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  getReported() {
    var options = {
      method: 'get',
      url: 'http://127.0.0.1:3000/fec'
    }
  }

  getHelpful() {

  }

  componentDidMount() {
    //we also need to do a 'get' on our own database to find which questions/answers have already been marked helpful or (for answers) been reported

    //obtain the information of questions and answers, and set state per question/answer based on this information

    //the 'helpful' and 'report' button will display based on the state of the question/answer
    this.get();
  }

  render() {
    if (this.state.questions.length === 0) {
      return(<button>Submit new question</button>);
    } else if (this.state.questions.length > 2 && this.state.expanded === false) {
    return (<div>
      <Search search={this.searchKeyword}/>
      <h1>Product ID</h1>
      <div>{this.state.productid}</div>
      {this.searchSort(this.arrayShortener(this.state.questions)).map(question => (
        <Question key={this.state.questions.indexOf(question)} index={this.state.questions.indexOf(question)} answers={question.answers} product_id={this.state.productid} asker_name={question.asker_name} question_body={question.question_body} question_date={question.question_date} question_helpfulness={question.question_helpfulness} question_id={question.question_id} reported={JSON.stringify(question.reported)} />
      ))}
      <button onClick={this.toggleQuestions}>More Answered Questions</button>
      <button>Submit new question</button>
    </div>);
    } else if (this.state.questions.length > 2 && this.state.expanded === true) {
      return (<div>
        <Search search={this.searchKeyword}/>
        <div>{this.state.productid}</div>
        {this.searchSort(this.state.questions).map(question => (
          <Question key={this.state.questions.indexOf(question)} index={this.state.questions.indexOf(question)} answers={question.answers} product_id={this.state.productid} asker_name={question.asker_name} question_body={question.question_body} question_date={question.question_date} question_helpfulness={question.question_helpfulness} question_id={question.question_id} reported={JSON.stringify(question.reported)} />
        ))}
        <button onClick={this.toggleQuestions}>Collapse questions</button>
        <button>Submit new question</button>
      </div>);
    }

  }
}

export default Questionslist;