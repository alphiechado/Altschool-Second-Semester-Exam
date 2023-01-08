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
        <h1 className="Investheader">Invest the right way</h1>
        <p className="Investpara">
          Investments are very important. The reward for taking<br></br> on risk
          is the potential for a greater investment return{' '}
        </p>
        <Link to="/SignIn">
          <button className="Homebutton">Join us</button>
        </Link>
      </div>
    </div>
  );
}

export default HomeSEC3;
