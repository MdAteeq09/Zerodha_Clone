import React from "react";
import PartnerCard from "./PartnerCard";
import "./Apps.css";

const Apps = () => {
  return (
    <div className="apps-container">
      <h2>Apps</h2>
      <p className="subtitle">
        Explore partner platforms integrated with Zerodha
      </p>

      <div className="apps-grid">

        <PartnerCard
          name="Smallcase"
          description="Thematic investment platform"
          link="https://smallcase.com"
        />

        <PartnerCard
          name="Streak"
          description="Algo & strategy builder"
          link="https://streak.tech"
        />

        <PartnerCard
          name="Sensibull"
          description="Options trading & analysis"
          link="https://sensibull.com"
        />

        <PartnerCard
          name="GoldenPi"
          description="Bonds trading platform"
          link="https://goldenpi.com"
        />

        <PartnerCard
          name="Ditto"
          description="Insurance advisory platform"
          link="https://joinditto.in"
        />

      </div>

      <p className="coming-soon">
        More integrations coming soon...
      </p>
    </div>
  );
};

export default Apps;