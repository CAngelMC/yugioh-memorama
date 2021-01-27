import React from 'react';
import background from '../assets/static/image.png';
import '../assets/styles/App.scss';
import BoardGame from '../components/BoardGame';

const App = () => (
  <div
    className='background'
    style={{
      backgroundImage: `url(${background})`,
    }}
  >
    <BoardGame />
  </div>
);

export default App;
