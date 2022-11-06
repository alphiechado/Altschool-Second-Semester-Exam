import React from "react";
import { Link } from "react-router-dom";
import Asset6 from "../assets/Asset6.png";

export default function Stories() {
  return (
    <div className="Stories">
      <div>
        <h1 className="Storiesheader">We curated our user stories</h1>
        <p className="Storiespara">
          No tales by moonlight. Our users have had amazing experiences.
        </p>
        <Link to="/SignIn">
          <button className="Storiesbutton">Read More</button>
        </Link>
      </div>
      <div>
        <img className="Storiesimage" src={Asset6} alt="Storiesimage" />
      </div>
    </div>
  );
}
