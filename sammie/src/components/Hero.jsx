import React from 'react';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-inner">
        <img src="images/logo.jpg" alt="Fits by Sammie" className="hero-logo" />
        <p className="hero-tagline">Handmade with Love · Lagos, Nigeria</p>
        <h1 className="hero-title">
          Where Every Stitch<br />Tells <em>Your</em> Story
        </h1>
        <p className="hero-desc">
          Custom-made & ready-to-wear, crafted for the woman who deserves to stand out.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#collections" className="btn btn-solid">View Collections</a>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
