const root = document.documentElement;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateProgress() {
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  root.style.setProperty('--p', clamp(progress, 0, 1).toFixed(4));
}

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();
