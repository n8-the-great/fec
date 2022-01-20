import React from 'react';
import Question from './question.jsx';


class Questionslist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if (this.props.questions.length === 0) {
      return null;
    } else if (this.props.questions.length > 2) {
    return (<div className='QuestionsAndAnswers' style={{height: '850px', width: '1200px', overflow:'auto', backgroundColor: 'white'}}>
      <h1 className='productname QuestionsAndAnswers'>{this.props.productname}</h1>
      {this.props.questions.map(question => (
        <Question key={this.props.questions.indexOf(question)} expandedView = {this.props.expandedView} index={this.props.questions.indexOf(question)} answers={question.answers} product_id={this.props.productid} asker_name={question.asker_name} question_body={question.question_body} question_date={question.question_date} question_helpfulness={question.question_helpfulness} question_id={question.question_id} reported={JSON.stringify(question.reported)} answerModalToggle={this.props.answerModalToggle} />
      ))}
    </div>);
    } else if (this.props.questions.length <= 2) {
      return (<div className='QuestionsAndAnswers' style={{height: '850px', width: '1200px', backgroundColor: 'white'}}>
        <h1 className='productname QuestionsAndAnswers'>{this.props.productname}</h1>
        {this.props.questions.map(question => (
          <Question key={this.props.questions.indexOf(question)} expandedView = {this.props.expandedView} index={this.props.questions.indexOf(question)} answers={question.answers} product_id={this.props.productid} asker_name={question.asker_name} question_body={question.question_body} question_date={question.question_date} question_helpfulness={question.question_helpfulness} question_id={question.question_id} reported={JSON.stringify(question.reported)} answerModalToggle={this.props.answerModalToggle} />
        ))}
      </div>);
    }
  }
}

export default Questionslist;