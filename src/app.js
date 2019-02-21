import React from 'react';
import ReactDOM from 'react-dom';

import './myStyle.scss';

const App = () => {
  return (
    <div>
      <h1>This is how you setup Webpack</h1>
      <img alt="header" src="/dist/images/flower.jpeg" className="appHeader" />
      <p>Simply copy the codes you find here. However ensure you understand what's happening behind the scene</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));