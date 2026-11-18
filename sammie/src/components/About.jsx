import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="about-img-wrap fade-up">
        <img src="images/corporate-blue.jpg" alt="Handmade corporate wear" />
      </div>
      <div className="about-text fade-up">
        <p className="section-label">Our Story</p>
        <h2 className="section-title">
          Crafted with Passion,<br />Made for <em>You</em>
        </h2>
        <div className="divider"></div>
        <p>All pieces are proudly handmade by us. Every garment is tailored to your body, your style, and your moment.</p>
        <p>From sharp corporate looks and breezy casuals to glamorous Owanbe wears that command the room.</p>
        <div className="about-badges">
          <span className="badge">Custom-Made</span>
          <span className="badge">Ready-to-Wear</span>
          <span className="badge">Handmade Quality</span>
          <span className="badge">All Sizes Welcome</span>
        </div>
      </div>
    </section>
  );
}
