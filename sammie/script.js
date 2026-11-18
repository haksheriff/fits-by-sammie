/* ── Fits by Sammie - Interactive Scripts ── */

/* ── Navbar scroll shadow ── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

/* ── Mobile menu ── */
function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('open');
  }
}

/* ── Fade-up on scroll ── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

/* ── Lightbox Component ── */
const galleryImages = [
  { src: 'images/casual-houndstooth.jpg', alt: 'Houndstooth Casual' },
  { src: 'images/occasion-teal.jpg', alt: 'Teal Occasion Wear' },
  { src: 'images/owanbe-yellow.jpg', alt: 'Yellow Owanbe Wear' },
  { src: 'images/casual-gingham.jpg', alt: 'Gingham Casual' },
];

const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCounter = document.getElementById('lbCounter');
const lbThumbs = document.getElementById('lbThumbs');
const lbStage = document.querySelector('.lb-stage');
let current = 0;

if (lightbox && lbThumbs) {
  /* Build thumbnails */
  galleryImages.forEach((img, i) => {
    const t = document.createElement('img');
    t.src = img.src;
    t.alt = img.alt;
    t.className = 'lb-thumb' + (i === 0 ? ' active' : '');
    t.addEventListener('click', () => goTo(i));
    lbThumbs.appendChild(t);
  });
}

function updateThumbs() {
  document.querySelectorAll('.lb-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === current);
  });
}

function goTo(index, animate = true) {
  if (!lbImg || !lbCounter) return;
  current = (index + galleryImages.length) % galleryImages.length;
  lbImg.src = galleryImages[current].src;
  lbImg.alt = galleryImages[current].alt;
  lbCounter.textContent = `${current + 1} / ${galleryImages.length}`;
  updateThumbs();
  if (animate && lbStage) {
    lbStage.classList.remove('switching');
    void lbStage.offsetWidth; /* force reflow */
    lbStage.classList.add('switching');
  }
}

function openLightbox(index) {
  if (!lightbox || !lbImg || !lbCounter) return;
  current = index;
  if (lbStage) lbStage.classList.remove('switching');
  lbImg.src = galleryImages[current].src;
  lbImg.alt = galleryImages[current].alt;
  lbCounter.textContent = `${current + 1} / ${galleryImages.length}`;
  updateThumbs();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

/* Click gallery items to open */
document.querySelectorAll('.gallery-item').forEach((item) => {
  item.addEventListener('click', () => openLightbox(+item.dataset.index));
});

const lbCloseBtn = document.getElementById('lbClose');
if (lbCloseBtn) lbCloseBtn.addEventListener('click', closeLightbox);

const lbBackdrop = document.getElementById('lbBackdrop');
if (lbBackdrop) lbBackdrop.addEventListener('click', closeLightbox);

const lbPrevBtn = document.getElementById('lbPrev');
if (lbPrevBtn) lbPrevBtn.addEventListener('click', () => goTo(current - 1));

const lbNextBtn = document.getElementById('lbNext');
if (lbNextBtn) lbNextBtn.addEventListener('click', () => goTo(current + 1));

/* Keyboard navigation */
document.addEventListener('keydown', (e) => {
  if (!lightbox || !lightbox.classList.contains('open')) return;
  if (e.key === 'ArrowRight') goTo(current + 1);
  if (e.key === 'ArrowLeft') goTo(current - 1);
  if (e.key === 'Escape') closeLightbox();
});
