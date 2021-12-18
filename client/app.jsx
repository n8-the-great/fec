import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from './overview/StarRating.jsx';
import GeneralProductInfo from './overview/GeneralProductInfo.jsx';
import './style.css';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
     return (

       <div>
         <GeneralProductInfo/>
       </div>
     );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
