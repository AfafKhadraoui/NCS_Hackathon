import React from 'react';
import './TrustedBySection.css';

import yassir from '../assets/logos/yassir.png';
import yalidine from '../assets/logos/yalidine.png';
import express from '../assets/logos/express.png';
import dhd from '../assets/logos/dhd.png';
import noest from '../assets/logos/noest.png';

const TrustedBySection = () => {
  return (
    <div className="trusted-section">
      <h2 className="trusted-heading">
        More than 100+ Companies use <span className="highlight">(name)</span>
      </h2>

      <div className="trusted-logos">
        <img src={yassir} alt="Yassir" />
        <img src={yalidine} alt="Yalidine" />
        <img src={express} alt="Zr Express" />
        <img src={dhd} alt="DHD Livraison" />
        <img src={noest} alt="Noest" />
      </div>
    </div>
  );
};

export default TrustedBySection;
