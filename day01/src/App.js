import React from 'react';
import Cat from './component/Cat';
import Dog from './component/Dog';
import Lion from './component/Lion';
import Test01 from './component/Test01';
import Test02 from './component/Test02';
import Test03 from './component/Test03';
import Test04 from './component/Test04';

import Test05 from './component/Test05';
const App = () => {
  return (
    <div>
      <Dog/>
      <Cat></Cat>
      <Lion></Lion>
      <hr/>
      <Test01></Test01>
      <hr/>
      <Test02></Test02>
      <hr/>
      <Test03></Test03>
      <Test04></Test04>
      <Test05></Test05>
    </div>
  );
};

export default App;