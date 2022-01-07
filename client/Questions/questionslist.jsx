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
      return(<div>''</div>);
    } else if (this.props.questions.length > 2) {
    return (<div style={{height: '900px', width: '1200px', border: '1px solid #ccc', overflow:'auto'}}>
      <h1>Product ID {this.props.productid} product name</h1>
      {this.props.questions.map(question => (
        <Question key={this.props.questions.indexOf(question)} expandedView = {this.props.expandedView} index={this.props.questions.indexOf(question)} answers={question.answers} product_id={this.props.productid} asker_name={question.asker_name} question_body={question.question_body} question_date={question.question_date} question_helpfulness={question.question_helpfulness} question_id={question.question_id} reported={JSON.stringify(question.reported)} />
      ))}
    </div>);
    } else if (this.props.questions.length <= 2) {
      return (<div>
        <h1>{this.props.productid} {this.props.productname} product name</h1>
        {this.props.questions.map(question => (
          <Question key={this.props.questions.indexOf(question)} expandedView = {this.props.expandedView} index={this.props.questions.indexOf(question)} answers={question.answers} product_id={this.props.productid} asker_name={question.asker_name} question_body={question.question_body} question_date={question.question_date} question_helpfulness={question.question_helpfulness} question_id={question.question_id} reported={JSON.stringify(question.reported)} />
        ))}
      </div>);
    }
  }
}

export default Questionslist;