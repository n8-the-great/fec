import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(e) {
    e.persist();
    if (e.target.value.length >= 3) {
      this.setState({
        [e.target.name]: e.target.value
      }, this.props.search(e.target.value));
    } else {
      this.setState({
        [e.target.name]: ''
      }, this.props.search(e.target.value));
    }
  }

  render() {
    return(<div className='QuestionsAndAnswers'>
      <input className='search QuestionsAndAnswers' onChange={this.inputChange} name='keyword' placeholder='Have a question? Search for answers...'/>
    </div>
    );
  }
}

export default Search;