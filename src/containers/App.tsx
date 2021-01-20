import React from 'react';
import HelloWorld from '../components/HelloWorld';
import background from '../assets/static/fusion.png';

const App = (): JSX.Element => (
  <div className='App' style={{ background: `url(${background})` }}>
    <HelloWorld />
  </div>
);

export default App;
