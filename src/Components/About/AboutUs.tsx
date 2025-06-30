import React from 'react';
import './AboutUs.css';
import aboutImage from '../assets/About.png'

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-left">
          <h1 className="about-title">About Us</h1>
          <div className="title-underline"></div>
         
          <p className="about-description">
            We're a team of developers and innovators passionate about solving
            real challenges in Algerian e-commerce. Our platform helps online
            sellers manage orders, reduce returns, and automate workflows
            using smart tools and AI — all tailored to the local market. Whether
            you're running a small shop or a growing delivery network, we're
            building the tools you need to work smarter, not harder.
          </p>
        </div>
       
        <div className="about-right">
          <div className="image-wrapper">
            <div className="yellow-blob-bg"></div>
            <img
              src={aboutImage}
              alt="About us"
              className="about-image-actual"
            />
            <div className="black-scribble-1"></div>
            <div className="black-scribble-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;