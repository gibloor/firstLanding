import React from "react";
import './styles.scss';
import { Link } from 'react-router-dom';

const HeaderRight = () => {

  const HeaderButtons = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Product',
      link: '/product',
    },
    {
      name: 'Promo',
      link: '/promo',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];

  return (
    <div className="header_right">
      <div className="header_block">
        <div className="header_menu_buttons">
        {HeaderButtons.map((button) => (
          <Link className="header_menu_button" to={button.link}>
            {button.name}
          </Link>
        ))}
        </div>
        <div className="header_order">
          <p className="header_title">
            Title Here
          </p>
          <p className="header_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Vivamus lacinia odio vitae vestibulum vestibulum. 
          </p>
          <button className="button_order_now">
            ORDER NOW
          </button>
        </div>
      </div>
      <button className="magnifier" />
    </div>
  )
};

export default HeaderRight;