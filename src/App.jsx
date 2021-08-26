import React from 'react';

import StateContext from './Context';
import Counter from './Counter';
import Fetcher from './Fetcher';

const App = () => {
  return (
    <StateContext>
      <Fetcher />
      <Counter type={false} />
    </StateContext>
  );
};

export default App;
