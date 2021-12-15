import React from 'react';
import Answer from './answer.jsx';

var Answerlist = (props) => (
  <div style={{border: 'solid red 5px'}}>
    {props.answers.map(answer => {
      return <Answer key={answer.id} answerid={JSON.stringify(answer.id)} index={props.answers.indexOf(answer)} body={answer.body} date={answer.date} name={answer.answerer_name} helpfulness={answer.helpfulness} photos={answer.photos}/>
    }
    )}
  </div>
)

export default Answerlist;