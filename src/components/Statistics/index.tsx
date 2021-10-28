import React from "react";
import './styles.scss';

const Statistics = () => {

  const stats = [
    {
      number: 123,
      what: 'OUTLETS'
    },
    {
      number: 100,
      what: 'CHEF'
    },
    {
      number: 300,
      what: 'MENU'
    },
    {
      number: 30,
      what: 'COUNTRY'
    },
  ];

  return (
    <div className="statistics">
      <div className="info">
        <p className="title">Statistics</p>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
      </div>
      <div className="cards">
        {stats.map(stat => (
          <div className="card">
            <p className="card_number">{stat.number}</p>
            <p className="card_what">{stat.what}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Statistics;