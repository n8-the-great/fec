import React from 'react';
import Answer from './answer.jsx';

class Answerlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    }
    this.toggleAnswers = this.toggleAnswers.bind(this);
    this.arrayShortener = this.arrayShortener.bind(this);
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

  toggleAnswers(e) {
    e.preventDefault();
    this.setState({
      expanded: !this.state.expanded
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.question !== this.props.question) {
      this.setState({
        expanded: false
      })
    }
  }

  //original background color: #e4e7ed

  //#636380

  //#737394
  render() {
    if (this.state.expanded === false && this.props.answers.length > 2) {
      return (<div className='QuestionsAndAnswers' style={{boxSizing: 'border-box', border: '1px solid #ccc', backgroundColor: '#737394'}}>
        {this.arrayShortener(this.props.answers).map(answer => (
          <Answer className='answer QuestionsAndAnswers' key={answer.id} answerid={JSON.stringify(answer.id)} index={this.props.answers.indexOf(answer)} body={answer.body} date={answer.date} name={answer.answerer_name} helpfulness={answer.helpfulness} photos={answer.photos}/>
      ))}
        <button className='moreanswers QuestionsAndAnswers' onClick={this.toggleAnswers}>See more answers</button>
      </div>
      );
    } else if (this.state.expanded === true && this.props.answers.length > 2) {
      return (<div className='QuestionsAndAnswers' style={{height: '200px', width: '400px', border: '1px solid #ccc', backgroundColor: '#737394', overflow:'auto'}}>
      {this.props.answers.map(answer => (
        <Answer className='answer QuestionsAndAnswers' key={answer.id} answerid={JSON.stringify(answer.id)} index={this.props.answers.indexOf(answer)} body={answer.body} date={answer.date} name={answer.answerer_name} helpfulness={answer.helpfulness} photos={answer.photos}/>
    ))}
      <button className='moreanswers QuestionsAndAnswers' onClick={this.toggleAnswers}>Collapse answers</button>
    </div>
    );
    } else {
      return (<div className='QuestionsAndAnswers'style={{boxSizing: 'border-box', border: '1px solid #ccc', backgroundColor: '#737394'}}>
      {this.props.answers.map(answer => (
        <Answer className='answer QuestionsAndAnswers' key={answer.id} answerid={JSON.stringify(answer.id)} index={this.props.answers.indexOf(answer)} body={answer.body} date={answer.date} name={answer.answerer_name} helpfulness={answer.helpfulness} photos={answer.photos}/>
    ))}
    </div>
    );
    }
  }
}

export default Answerlist;

