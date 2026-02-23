import React from "react";

const PartnerCard = ({ name, description, link }) => {

  const logoName = name.toLowerCase().replace(/\s+/g, "");

  return (
    <div className="partner-card">
      
      <img
        src={`/logos/${logoName}.png`}
        alt={name}
        className="partner-logo"
      />

      <h3>{name}</h3>
      <p>{description}</p>

      <button
        className="launch-btn"
        onClick={() => window.open(link, "_blank")}
      >
        Launch
      </button>

    </div>
  );
};

export default PartnerCard;