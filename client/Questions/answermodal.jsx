import React from 'react';
import ImageUploader from 'react-image-uploader';

class Answermodal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageCount: 0,
      addFileClass: 'addFileTrue'
    };
    this.close= this.close.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.imageChange = this.imageChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  imageChange (e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({image: e.target.result});
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  submit(e) {
    e.preventDefault();
    if(this.state.image && this.state.imageCount < 4) {
      this.setState({
        currentImage: this.state.image,
        imageCount: this.state.imageCount + 1
      });
    } else if (this.state.image && this.state.imageCount >= 4) {
      this.setState({
        addFileClass: 'addFileFalse'
      })
    }
  }

  inputChange(e) {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  close(e) {
    e.preventDefault();
    this.setState({
      images: [],
      imageCount: 0,
      addFileClass: 'addFileTrue'
    }, this.props.answerModalToggle(this.props.currentQuestion))

  }

  render() {
    if (this.props.showAnswerModal === false) {
      return null;
    }
    return (<div className='answermodal'>
      <img className='image' src={this.state.currentImage} />
      <span className='answermodalclose' onClick={this.close}>X</span>
      <span>
      <h1>Submit your Answer</h1>
      </span>
      <h5>{this.props.productname}: {this.props.currentQuestion}</h5>
      <div>Your Answer *</div>
      <textarea rows='20' cols='50' className='answermodalanswer' name='answer' maxLength='1000' onChange={this.inputChange} value={this.state.answer || ''}></textarea>
      <div className='answermodalnicknameheader'>Your Nickname *</div>
      <textarea placeholder='Example: jackson11!' rows='20' cols='50' className='answermodalnickname' name='nickname' maxLength='60' onChange={this.inputChange} value={this.state.nickname || ''}></textarea>
      <div className='answermodalwarning'>For privacy reasons, do not use your full name or email address</div>
      <div>Your Email *</div>
      <textarea placeholder='Why did you like the product or not?' rows='20' cols='50' className='answermodalemail' name='email' maxLength='60' onChange={this.inputChange} value={this.state.email || ''}></textarea>
      <div className='answermodalwarning2'>For authentication reasons, you will not be emailed</div>
      <span>Upload your photos<input type='file'
       className={this.state.addFileClass} name='photo'
       accept='image/png, image/jpeg' onChange={this.imageChange}/></span>
      <button className='answermodalsubmit' onClick={this.submit}>Submit</button>
    </div>
    );
  }

  // render() {
  //   if (this.props.showModal === false) {
  //     return null;
  //   }
  //   return (<div className='modal'>
  //     <span className='modalclose' onClick={this.close}>X</span>
  //     <span>
  //     <h1>Ask Your Question</h1>
  //     </span>
  //     <h5>About the {this.props.productname}</h5>
  //     <div>Your Question *</div>
  //     <textarea rows='20' cols='50' className='modalquestion' name='question' maxLength='1000' onChange={this.inputChange} value={this.state.question || ''}></textarea>
  //     <div className='modalnicknameheader'>Your Nickname *</div>
  //     <textarea placeholder='Example: jackson11!' rows='20' cols='50' className='modalnickname' name='nickname' maxLength='60' onChange={this.inputChange} value={this.state.nickname || ''}></textarea>
  //     <div className='modalwarning'>For privacy reasons, do not use your full name or email address</div>

      // <div>Your Email *</div>
      // <textarea placeholder='Why did you like the product or not?' rows='20' cols='50' className='modalemail' name='email' maxLength='60' onChange={this.inputChange} value={this.state.email || ''}></textarea>
      // <div className='modalwarning2'>For authentication reasons, you will not be emailed</div>

  //     <button onClick={this.submit}className='modalsubmit'>Submit</button>
  //   </div>
  //   );
  // }
}

export default Answermodal;