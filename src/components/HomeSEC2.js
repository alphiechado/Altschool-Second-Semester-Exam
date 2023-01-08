import React from 'react';
import { Link } from 'react-router-dom';
import Asset4 from '../assets/Asset4.png';

function HomeSEC2() {
  return (
    <div className="HomeSEC2">
      <div>
        <h1 className="HomeSEC2header">Save the smart way</h1>
        <p className="HomeSEC2para">
          Save money for rainy days or that luxury item.<br></br> Money should
          be saved to pay for unexpected <br></br>events or emergencies.
        </p>
        <Link to="/SignIn">
          <button className="Homebutton">Join us</button>
        </Link>
      </div>
      <div>
        <img className="HomeSEC2image" src={Asset4} alt="Investimage" />
      </div>
    </div>
  );
}

export default HomeSEC2;
