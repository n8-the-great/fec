import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from 'reviews';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render() {
     return (
      <div>
        <Reviews /> 
      </div>
       
     );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
