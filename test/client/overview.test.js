/**
 * @jest-environment jsdom
 */
 import React from "react";
 import { render, unmountComponentAtNode } from 'react-dom';
 import { act } from 'react-dom/test-utils';

 import GeneralProductInfo from '../../client/overview/generalProductinfo.jsx';

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

 it('Overview renders', () => {
   act(() => {
     //render components
     render(<Overview />, container);
   })
   //make assertions
   expect(container.textContent).toBe('Submit new question');
 });