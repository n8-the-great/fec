/**
 * @jest-environment jsdom
 */
 import React from "react";
 import { render, unmountComponentAtNode } from 'react-dom';
 import { act } from 'react-dom/test-utils';

 import Questionslist from '../../client/Questions/questionslist.jsx';

 let container = null;
 beforeEach(() => {
   //setup a DOM element as a render target
   container = document.createElement('div');
   document.body.appendChild(container);
 });

 afterEach(() => {
   //cleanup on exiting
   unmountComponentAtNode(container);
   container.remove();
   container = null;
 });

 it('Questionslist renders', () => {
   act(() => {
     //render components
     render(<Questionslist />, container);
   })
   //make assertions
   expect(container.textContent).toBe('Submit new question');
 });