import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text animate-fade-in-up">
            <h1>Build Something Amazing Today</h1>
            <p>Create stunning digital experiences with our modern platform. Transform your ideas into reality with cutting-edge technology and elegant design.</p>
            <div className="hero-cta">
              <button className="btn btn-primary">Start Free Trial</button>
              <button className="btn btn-secondary">Watch Demo</button>
            </div>
          </div>
          <div className="hero-image animate-fade-in">
            <div className="image-wrapper">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern workspace with laptop"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
