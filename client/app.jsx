import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from './overview/StarRating.jsx';
import './style.css';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
     return (

       <div>Hey there friends
         <StarRating/>
       </div>
     );
  }
}

ReactDOM.render(< App />, document.getElementById('app'));