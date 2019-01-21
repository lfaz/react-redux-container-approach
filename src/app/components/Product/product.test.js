import React from 'react';
import ReactDOM from 'react-dom';
import ProductContainer from "./product.container";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
