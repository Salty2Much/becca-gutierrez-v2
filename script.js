const nav = document.getElementById('nav');
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    const pastHero = window.scrollY > 80;
    nav.classList.toggle('scrolled', pastHero);
    nav.classList.toggle('hero-top', !pastHero);
}, { passive: true });

const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    }),
    { threshold: 0.1 }
);
reveals.forEach(el => observer.observe(el));
