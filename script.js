const yearElement = document.getElementById('year');
const revealElements = document.querySelectorAll('.section');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

revealElements.forEach((element) => element.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => observer.observe(element));
