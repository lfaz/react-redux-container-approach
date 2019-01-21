import React from 'react';
import ReactDOM from 'react-dom';
import PaginationComponent from "./pagination.component";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PaginationComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
