import React from 'react';
import '../assets/styles/Life.scss';

const Life = (props) => {
  const { life } = props;

  return (
    <div className='menu'>
      <div className='life'>
        <div>
          <p>{life}</p>
        </div>
        <select className='menu_input'>
          <option value='500'>Shadow Game</option>
          <option value='250'>Normal</option>
          <option value='200'>Casual</option>
        </select>
        <button className='menu_input' type='button'>
          Restart
        </button>
      </div>
    </div>
  );
};

export default Life;
