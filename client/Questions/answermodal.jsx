import React from 'react';

class Answermodal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    if (this.props.showAnswerModal === false) {
      return null;
    }
    return (<div>
      <h1>Submit your Answer</h1>
      <h5>product: question</h5>
    </div>
    );
  }
}

export default Answermodal;