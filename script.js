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

let lastScrollPosition = window.scrollY;
let scrollDirection = 'down'; // 'up' or 'down'

// Track scroll direction
window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;
    scrollDirection = currentScrollPosition > lastScrollPosition ? 'down' : 'up';
    lastScrollPosition = currentScrollPosition;
});

function setUpIntersectionObserver(element, isLToR, speed) {

    element.style.opacity = '0';
    element.style.transform = isLToR ? 'translateX(-100px)' : 'translateX(100px)';
    element.style.transition = `all ${speed}s ease-out`;

    const intersectionCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (scrollDirection === 'down') {
                    element.style.opacity = '1';
                    element.style.transform = 'translateX(0)';
                } else {

                    element.style.opacity = '0';
                    element.style.transform = isLToR ? 'translateX(-100px)' : 'translateX(100px)';
                }
            }
        });
    };

    const intersectionObserver = new IntersectionObserver(intersectionCallback, {
        threshold: 0.1
    });

    intersectionObserver.observe(element);
}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

setUpIntersectionObserver(line1, true, 0.5);   
setUpIntersectionObserver(line2, false, 0.5); 
setUpIntersectionObserver(line3, true, 0.5);  