import React from 'react';

const reasons = [
  {
    icon: '🧵',
    title: '100% Handmade',
    desc: 'Quality you can feel in every seam.',
  },
  {
    icon: '✂️',
    title: 'Custom Fit',
    desc: 'Your measurements, your silhouette.',
  },
  {
    icon: '👗',
    title: 'Every Occasion',
    desc: 'From Monday meetings to Saturday Owanbe.',
  },
  {
    icon: '💫',
    title: 'Premium Fabrics',
    desc: 'Finest materials, extraordinary finish.',
  },
];

export default function WhyUs() {
  return (
    <section id="why">
      <p className="section-label">Why Fits by Sammie</p>
      <h2 className="section-title">The <em>Sammie</em> Difference</h2>
      <div className="divider center"></div>

      <div className="why-grid">
        {reasons.map((r, i) => (
          <div key={i} className="why-card fade-up">
            <span className="why-icon">{r.icon}</span>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
