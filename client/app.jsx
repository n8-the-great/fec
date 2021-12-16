import React from 'react';
import ReactDOM from 'react-dom';
import Questionslist from './Questions/questionslist.jsx';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render() {
     return (<div>
       <Questionslist />
     </div>
     );
  }
}

ReactDOM.render(< App />, document.getElementById('app'));