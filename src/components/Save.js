import React from "react";
import Asset4 from "../assets/Asset4.png";

function Save() {
  return (
    <div className="Save">
      <div>
        <h1 className="Saveheader">Save the smart way</h1>
        <p className="Savepara">
          Save money for rainy days or that luxury item.<br></br> Money should
          be saved to pay for unexpected <br></br>events or emergencies.
        </p>
      </div>
      <div>
        <img className="Saveimage" src={Asset4} alt="Investimage" />
      </div>
    </div>
  );
}

export default Save;
