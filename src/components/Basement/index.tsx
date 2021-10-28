import React from "react";
import { Link } from "react-router-dom";
import './styles.scss';
import sections from "./sections";
import social from "./social";


const Basement = () => {

  return (
    <div className="basement">
      <div className="block">
        <div className="title_block">
          <p className="title">TITLE HERE</p>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
          <div>
            {social.map(network => (
              <Link to={network.link}>
                <img className="social" src={`/assets/basement/${network.image}.png`}/>
              </Link>
            ))}
          </div>
        </div>
        {sections.map(section => (
          <div className="section">
            <p className="title">{section.name}</p>
            {section.content.map(content => (
              <Link className="text link" to={content.link}>
                <p>{content.name}</p>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Basement;