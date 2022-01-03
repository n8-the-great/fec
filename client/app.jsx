import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './reviews/index.jsx';
import RelatedProducts from './components/RelatedProducts.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: 59555,
      related: []
    }
  }


  render() {
     return (
      <div>
        <Reviews />
        <RelatedProducts id={this.state.id}/>
      </div>

     );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
