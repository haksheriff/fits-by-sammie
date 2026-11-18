import React from 'react';

const collectionsData = [
  {
    title: 'Corporate Wears',
    subtitle: 'Power dressing, perfected',
    image: 'images/corporate-blue.jpg',
  },
  {
    title: 'Casual Wears',
    subtitle: 'Effortlessly chic',
    image: 'images/casual-kimono.jpg',
  },
  {
    title: 'Custom-Made Outfits',
    subtitle: 'Tailored to your vision',
    image: 'images/owanbe-yellow.jpg',
  },
  {
    title: 'Owanbe / Occasion Wears',
    subtitle: 'Born to celebrate',
    image: 'images/occasion-teal.jpg',
  },
  {
    title: 'Ready-to-Wear',
    subtitle: 'Fresh collections, always',
    image: 'images/casual-pink-pants.jpg',
  },
  {
    title: 'Casual Collection',
    subtitle: 'Style meets comfort',
    image: 'images/casual-gingham.jpg',
  },
];

export default function Collections() {
  return (
    <section id="collections">
      <p className="section-label">What We Offer</p>
      <h2 className="section-title">Our <em>Collections</em></h2>
      <div className="divider center"></div>
      <p style={{ color: 'var(--text-light)', maxWidth: '520px', margin: '0 auto', fontSize: '0.95rem' }}>
        A look for every chapter of your story.
      </p>

      <div className="products-grid">
        {collectionsData.map((item, idx) => (
          <div key={idx} className="product-card fade-up">
            <img src={item.image} alt={item.title} />
            <div className="product-label">
              <h3>{item.title}</h3>
              <span>{item.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
