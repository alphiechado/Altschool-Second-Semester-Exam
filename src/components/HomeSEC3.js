import React from 'react';
import { Link } from 'react-router-dom';
import Asset5 from '../assets/Asset5.png';

function HomeSEC3() {
  return (
    <div className="Invest">
      <div>
        <img className="Investimage" src={Asset5} alt="Investimage" />
      </div>
      <div>
        <h1 className="Investheader">Section Two</h1>
        <p className="Investpara">
          So for this part the customer can talk a bit more about what he or she
          is offering.
        </p>
        <Link to="/SignIn">
          <button className="Homebutton">Book Now</button>
        </Link>
      </div>
    </div>
  );
}

export default HomeSEC3;
