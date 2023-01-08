import React from 'react';
import { Link } from 'react-router-dom';
import Asset2 from '../assets/Asset2.png';
import HomeSEC1 from './HomeSEC1';
import HomeSEC2 from './HomeSEC2';
import HomeSEC3 from './HomeSEC3';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <div className="Home">
        <div>
          <h1 className="Homeheader">Make smart financial decisions</h1>
          <p className="Homepara">
            No more broke days. We help you save and invest, we help you build
            wealth
          </p>
          <Link to="/SignIn">
            <button className="Homebutton">Join us</button>
          </Link>
        </div>
        <div>
          <img className="Homeimage2" src={Asset2} alt="Homeimage" />
        </div>
      </div>
      <div>
        <HomeSEC1 />
      </div>
      <div>
        <HomeSEC2 />
      </div>
      <div>
        <HomeSEC3 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
