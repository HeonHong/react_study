import React from 'react';
import Animal from './component/Animal';
import Color from './component/Color';
import Count from './component/Count';

const App = () => {
  return (
    <div>
      <Color></Color>
      <hr></hr>
      <Count></Count>
      <hr></hr>
      <Animal></Animal>
    </div>
  );
};

export default App;