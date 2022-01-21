/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import Enzyme from 'enzyme';
 import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
 import { mount, shallow, render } from 'enzyme';
 import ReactDOM from 'react-dom';
 import { expect } from 'chai';
 import sinon from 'sinon';
 import Questionapp from '../../client/Questions/questionapp.jsx';
 import Questionslist from '../../client/Questions/questionslist.jsx';
 import Question from '../../client/Questions/question.jsx';
 import Search from '../../client/Questions/search.jsx';
 import Answerlist from '../../client/Questions/answerlist.jsx';
 import Answer from '../../client/Questions/answer.jsx';
 import Modal from '../../client/Questions/modal.jsx';
 import Answermodal from '../../client/Questions/answermodal.jsx';
 import testQuestions from './testquestions.js';
 import testProduct from './testproduct.js';
 import testAnswers from './testanswers.js';
 Enzyme.configure({ adapter: new Adapter() });

 describe('Questionapp', () => {
   it('renders component', () => {
     const container = mount(<Questionapp product={testProduct}/>);
     expect(React.Component.isPrototypeOf(Questionapp)).to.be.true;
   });
 });

 describe('Questionslist', () => {
   it('renders component', () => {
     const container = mount(<Questionslist questions={testQuestions} productid={testProduct.id} productname={testProduct.name}/>);
     expect(React.Component.isPrototypeOf(Questionslist)).to.be.true;
   });

     it('Displays product name at top under the search bar', () => {
       const container = mount(<Questionslist questions={testQuestions} productid={testProduct.id} productname={testProduct.name}/>);
     expect(container.text().includes('Bright Future Sunglasses')).to.be.true;
     });
 });

 describe('Search', () => {
   it('renders component', () => {
     const container = mount(<Questionslist questions={testQuestions} productid={testProduct.id} productname={testProduct.name}/>);
     expect(React.Component.isPrototypeOf(Search)).to.be.true;
   });
 });

 describe('Answerlist', () => {
   it('renders component', () => {
     const container = mount(<Questionslist questions={testQuestions} productid={testProduct.id} productname={testProduct.name}/>);
     expect(React.Component.isPrototypeOf(Answerlist)).to.be.true;
   });
 });

 describe('Modal', () => {
   it('renders component', () => {
     const container = mount(<Questionslist questions={testQuestions} productid={testProduct.id} productname={testProduct.name}/>);
     expect(React.Component.isPrototypeOf(Modal)).to.be.true;
   });
 });

 describe('Answermodal', () => {
   it('renders component', () => {
     const container = mount(<Questionslist questions={testQuestions} productid={testProduct.id} productname={testProduct.name}/>);
     expect(React.Component.isPrototypeOf(Answermodal)).to.be.true;
   });
 });

 describe('End to end render', () => {
   it('Can render all components given top component', () => {
     const container = mount(<Questionslist questions={testQuestions} productid={testProduct.id} productname={testProduct.name}/>);
     expect(React.Component.isPrototypeOf(Questionapp)).to.be.true;
     expect(container.find(Questionslist).length).to.equal(1);
     expect(React.Component.isPrototypeOf(Questionslist)).to.be.true;
     expect(React.Component.isPrototypeOf(Answerlist)).to.be.true;
   });
 });