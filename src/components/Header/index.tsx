import React from 'react';
import './styles.scss';
import HeaderRight from './HeaderRight';

const Header = () => {

  return (
    <div className="header">
      <div className="header_left">
        <img src='/assets/header/logo.png' alt='your logo' className="header_logo"/>
      </div>
      {/* position: absolute to overlap the picture dynamically */}
      <HeaderRight />
    </div>
  )
};

export default Header;