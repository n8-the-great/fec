import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.inputChange = this.inputChange.bind(this);
    this.mandatoryAreFilled = this.mandatoryAreFilled.bind(this);
    this.emailIsValid = this.emailIsValid.bind(this);
    this.submit = this.submit.bind(this);
    this.close = this.close.bind(this);
  }

  inputChange(e) {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  mandatoryAreFilled(text) {
    if (text === '') {
      return false;
    } else {
      return true;
    }
  }

  emailIsValid(email) {
    if ((email.substring(email.length - 4, email.length) === '.com' || email.substring(email.length - 4, email.length) === '.org') && email.includes('@')) {
      return true;
    } else {
      return false;
    }
  }


  submit(e) {
    e.preventDefault();
    if (this.mandatoryAreFilled(this.state.question) && this.mandatoryAreFilled(this.state.nickname) && this.emailIsValid(this.state.email)) {
      alert('submission successful');
      this.props.modalToggle(e);
    } else if (this.mandatoryAreFilled(this.state.question) && !this.mandatoryAreFilled(this.state.nickname) && !this.emailIsValid(this.state.email)) {
      console.log('You must enter the following: Your Nickname and Your Email');
    } else if (!this.mandatoryAreFilled(this.state.question) && !this.mandatoryAreFilled(this.state.nickname) && this.emailIsValid(this.state.email)) {
      console.log('You must enter the following: Your Question and Your Nickname');
    } else if (!this.mandatoryAreFilled(this.state.question) && this.mandatoryAreFilled(this.state.nickname) && !this.emailIsValid(this.state.email)) {
      console.log('You must enter the following: Your Question and Your Email');
    } else if (!this.mandatoryAreFilled(this.state.question) && this.mandatoryAreFilled(this.state.nickname) && this.emailIsValid(this.state.email)) {
      console.log('You must enter the following: Your Question');
    } else if (this.mandatoryAreFilled(this.state.question) && !this.mandatoryAreFilled(this.state.nickname) && this.emailIsValid(this.state.email)) {
      console.log('You must enter the following: Your Nickname');
    } else if (this.mandatoryAreFilled(this.state.question) && this.mandatoryAreFilled(this.state.nickname) && !this.emailIsValid(this.state.email)) {
      console.log('You must enter the following: Your Email');
    } else if (!this.mandatoryAreFilled(this.state.question) && !this.mandatoryAreFilled(this.state.nickname) && !this.emailIsValid(this.state.email)) {
      console.log('You must enter the following: Your Question and Your Nickname and Your Email');
    }
  }

  close(e) {
    e.preventDefault();
    this.props.modalToggle(e);
  }

  componentDidMount() {
    this.setState({
      question: '',
      nickname: '',
      email: ''
    });
  }

  render() {
    if (this.props.showModal === false) {
      return null;
    }
    return (<div className='modal'>
      <span className='modalclose' onClick={this.close}>X</span>
      <span>
      <h1>Ask Your Question</h1>
      </span>
      <h5>About the {this.props.productname}</h5>
      <div>Your Question *</div>
      <textarea rows='20' cols='50' className='modalquestion' name='question' maxLength='1000' onChange={this.inputChange} value={this.state.question || ''}></textarea>
      <div className='modalnicknameheader'>Your Nickname *</div>
      <textarea placeholder='Example: jackson11!' rows='20' cols='50' className='modalnickname' name='nickname' maxLength='60' onChange={this.inputChange} value={this.state.nickname || ''}></textarea>
      <div className='modalwarning'>For privacy reasons, do not use your full name or email address</div>
      <div>Your Email *</div>
      <textarea placeholder='Why did you like the product or not?' rows='20' cols='50' className='modalemail' name='email' maxLength='60' onChange={this.inputChange} value={this.state.email || ''}></textarea>
      <div className='modalwarning2'>For authentication reasons, you will not be emailed</div>
      <button onClick={this.submit}className='modalsubmit'>Submit</button>
    </div>
    );
  }
}

export default Modal;