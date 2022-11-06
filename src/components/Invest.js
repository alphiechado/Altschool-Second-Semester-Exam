import React from "react";
import Asset5 from "../assets/Asset5.png";

function Invest() {
  return (
    <div className="Invest">
      <div>
        <h1 className="Investheader">Invest the right way</h1>
        <p className="Investpara">
          Investments are very important. The reward for taking<br></br> on risk
          is the potential for a greater investment return{" "}
        </p>
      </div>
      <div>
        <img className="Investimage" src={Asset5} alt="Investimage" />
      </div>
    </div>
  );
}

export default Invest;
