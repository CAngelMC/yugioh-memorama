import React from 'react';
import background from '../assets/static/image.png';
import '../assets/styles/App.scss';

const Layout = ({ children }) => (
  <div className='background' style={{ backgroundImage: `url(${background})` }}>
    {children}
  </div>
);

export default Layout;
