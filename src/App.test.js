import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard, {strikeHandler, ballHandler, foulHandler} from './components/Dashboard'

test('strikeHandler adds one strike', () => {
  expect(strikeHandler(1)).toBe(2);
  expect(strikeHandler(2)).toBe(0);
});

test('ballHandler adds one strike', () => {
  expect(ballHandler(2)).toBe(3);
  expect(ballHandler(3)).toBe(0);
});

test('foulHandler adds one strike', () => {
  expect(foulHandler(1)).toBe(2);
  expect(foulHandler(2)).toBe(2);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
