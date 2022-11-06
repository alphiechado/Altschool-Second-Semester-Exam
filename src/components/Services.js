import React from "react";
import { Link, Outlet } from "react-router-dom";
import Asset3 from "../assets/Asset3.png";

function Services() {
  return (
    <div>
      <div className="Services">
        <div>
          <h1 className="Servicesheader">What we do</h1>
          <p className="Servicespara">
            We optimise your savings, help you invest. Click the buttons below
            to find out more.
          </p>
          <div className="Servicesbutton">
            <Link to="Save">
              <button className="Servicesbutton1">Save</button>
            </Link>
            <Link to="Invest">
              <button className="Servicesbutton2">Invest</button>
            </Link>
          </div>
        </div>
        <div>
          <img className="Servicesimage" src={Asset3} alt="Servicesimage" />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Services;
