import React from 'react';
import './styles.scss';

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="block">
        <p className="title">Subscribe</p>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
        <form>
          <input type="email" placeholder="Your Email"></input>
          <button className="button" type="submit">SUBSCRIBE</button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe;