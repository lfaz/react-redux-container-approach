import React from 'react';
import ReactDOM from 'react-dom';
import LoadingComponent from "./loading.component";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoadingComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
