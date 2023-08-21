import React from 'react';
import { Link } from 'react-router-dom';
import Asset4 from '../assets/Asset4.png';

function HomeSEC2() {
  return (
    <div className="HomeSEC2">
      <div>
        <h1 className="HomeSEC2header">Section Two</h1>
        <p className="HomeSEC2para">
          So for this part the customer can talk a bit more about what he or she
          is offering.
        </p>
        <Link to="/SignIn">
          <button className="Homebutton">Buy Now</button>
        </Link>
      </div>
      <div>
        <img className="HomeSEC2image" src={Asset4} alt="Investimage" />
      </div>
    </div>
  );
}

export default HomeSEC2;
