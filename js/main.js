// Mobile-Navigation
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
    toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
    });
}

// Laufendes Jahr im Footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Leichte „Lightbox“ für Galerie (optional auf galerie.html verwenden)
export function openLightbox(src) {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.8);display:flex;align-items:center;justify-content:center;z-index:9999';
    overlay.addEventListener('click', () => overlay.remove());
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    overlay.appendChild(img);
    document.body.appendChild(overlay);
}
