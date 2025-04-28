const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMenuButton = document.getElementById('close-menu-button');


mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
});

closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = 'auto'; 
});

mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});