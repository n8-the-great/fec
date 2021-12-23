import React from 'react';
import ReactDOM from 'react-dom';
import Questionapp from './Questions/questionapp.jsx';
import Reviews from './reviews/index.jsx';
// import './style.css';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render() {
     return (<div>
        <Questionapp />
        <Reviews />
      </div>
     );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
