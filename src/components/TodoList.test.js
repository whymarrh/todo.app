import React from 'react';
import ReactDOM from 'react-dom';
import {TodoList} from './TodoList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList items={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
