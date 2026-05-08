const nav = document.getElementById('nav');
const reveals = document.querySelectorAll('.reveal');
const hasHero = !!document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const pastHero = window.scrollY > 80;
    nav.classList.toggle('scrolled', !hasHero || pastHero);
    nav.classList.toggle('hero-top', hasHero && !pastHero);
}, { passive: true });

document.querySelectorAll('.tab-group').forEach(group => {
    const groupId = group.dataset.group;
    const sections = document.querySelectorAll(`[data-tab-group="${groupId}"]`);
    const btns = group.querySelectorAll('.tab-btn');

    sections.forEach((s, i) => { s.style.display = i === 0 ? '' : 'none'; });

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            sections.forEach(s => {
                s.style.display = s.id === btn.dataset.target ? '' : 'none';
            });
        });
    });
});

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
