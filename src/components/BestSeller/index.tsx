import React from "react";
import './styles.scss';

const BestSeller = () => {

  const bestSellers = [
    {
      title: 'Title here',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'first',
    },
    {
      title: 'Title here',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'second',
    },
    {
      title: 'Title here',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'third',
    },
  ]

  return (
    <div className="bestseller">
      <div className="bestseller_block">
        <p className="bestseller_title">Best Seller</p>
        <p className="bestseller_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
        <div className="bestsellers_cards">
          {
            bestSellers.map(bestSeller => (
              <div className="bestseller_card">
                <img className="bestseller_card_img" src={`${process.env.PUBLIC_URL}/assets/bestsellers/cards/${bestSeller.img}.png`}/>
                <p className="bestseller_card_title">{bestSeller.title}</p>
                <p className="bestseller_card_text">{bestSeller.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default BestSeller;