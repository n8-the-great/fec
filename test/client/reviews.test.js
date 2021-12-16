/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Reviews from '../../client/reviews';

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

it('Review renders "Reviews" for now ', () => {
  act(() => {
    //render components
    render(< Reviews />, container);
  })
  //make assertions
  expect(container.textContent).toBe('Reviews');
});