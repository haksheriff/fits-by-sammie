import React, { useState, useEffect, useCallback } from 'react';

const galleryImages = [
  { src: 'images/casual-houndstooth.jpg', alt: 'Houndstooth Casual' },
  { src: 'images/occasion-teal.jpg', alt: 'Teal Occasion Wear' },
  { src: 'images/owanbe-yellow.jpg', alt: 'Yellow Owanbe Wear' },
  { src: 'images/casual-gingham.jpg', alt: 'Gingham Casual' },
];

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [switching, setSwitching] = useState(false);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const goTo = useCallback((index) => {
    setSwitching(true);
    setCurrentIndex((index + galleryImages.length) % galleryImages.length);
    setTimeout(() => setSwitching(false), 280);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') goTo(currentIndex + 1);
      if (e.key === 'ArrowLeft') goTo(currentIndex - 1);
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, goTo]);

  return (
    <>
      <div id="gallery">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="gallery-item"
            onClick={() => openLightbox(idx)}
          >
            <img src={img.src} alt={img.alt} />
            <div className="gallery-zoom-hint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.35-4.35" />
                <path d="M11 8v6M8 11h6" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div id="lightbox" className="open" aria-modal="true" role="dialog">
          <div className="lb-backdrop" onClick={closeLightbox}></div>
          <button className="lb-close" onClick={closeLightbox} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <button
            className="lb-nav lb-prev"
            onClick={() => goTo(currentIndex - 1)}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className={`lb-stage ${switching ? 'switching' : ''}`}>
            <img
              id="lbImg"
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
            />
          </div>
          <button
            className="lb-nav lb-next"
            onClick={() => goTo(currentIndex + 1)}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          <div className="lb-counter">
            {currentIndex + 1} / {galleryImages.length}
          </div>
          <div className="lb-thumbs">
            {galleryImages.map((thumb, idx) => (
              <img
                key={idx}
                src={thumb.src}
                alt={thumb.alt}
                className={`lb-thumb ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => goTo(idx)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
