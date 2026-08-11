document.addEventListener('DOMContentLoaded', () => {
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        heroVideo.pause();
        heroVideo.removeAttribute('autoplay');
    }

    const toggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            const isOpen = navLinks.style.display === 'flex';
            navLinks.style.display = isOpen ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '64px';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = '#0A0A0A';
            navLinks.style.padding = '20px';
            navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => { navLinks.style.display = 'none'; });
        });
    }
});
