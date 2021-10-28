import React from "react";
import './styles.scss';

const ChickenGrill = () => {
  return (
    <div className="chickengrill">
      <div className="block">
        <p className="title">Chicken Grill</p>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
        <button className="button">ORDER NOW</button>
      </div>
      <img className="img" src='/assets/chickengrill/food.png' />
    </div>
  )
}

export default ChickenGrill;