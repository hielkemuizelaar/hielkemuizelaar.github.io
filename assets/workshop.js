// Enhance below-the-fold sections; content remains visible without JavaScript.
(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.intro, .soft .wrap, .organiser-section, .sponsor-section .wrap').forEach(section => {
    if (section.getBoundingClientRect().top > window.innerHeight) {
      section.classList.add('reveal-item', 'reveal-pending');
      observer.observe(section);
    }
  });
})();
