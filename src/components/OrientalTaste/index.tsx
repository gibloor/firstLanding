import React from 'react';
import './styles.scss';

const OrientalTaste = () => {

  return (
    <div className="orientaltaste">
        <img className="image" src="/assets/orientaltaste/dish.png"/>
        <div className="block">
          <p className="title">Oriental Taste</p>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
          <button className="button">ORDER NOW</button>
        </div>
    </div>
  )
}

export default OrientalTaste;