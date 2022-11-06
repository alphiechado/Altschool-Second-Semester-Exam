import React from "react";
import { Link } from "react-router-dom";
import Asset2 from "../assets/Asset2.png";

function Home() {
  return (
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
  );
}

export default Home;
