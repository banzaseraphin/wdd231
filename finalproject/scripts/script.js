// -----------------------------
// MOBILE MENU TOGGLE
// -----------------------------
const mobileMenu = document.getElementById('mobile-menu');
const mobileNav = document.getElementById('mobile-nav');

if(mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
    });
}

// -----------------------------
// SEARCH FILTER FOR TRIBES
// -----------------------------
function searchTribes() {
    const input = document.getElementById('searchInput');
    if(!input) return;
    const filter = input.value.toLowerCase();
    const cards = document.getElementsByClassName('tribe-card');

    for(let i=0; i<cards.length; i++) {
        let name = cards[i].innerText.toLowerCase();
        cards[i].style.display = name.includes(filter) ? '' : 'none';
    }
}

// -----------------------------
// SEARCH FILTER FOR LANGUAGES
// -----------------------------
function searchLanguages() {
    const input = document.getElementById('searchInput');
    if(!input) return;
    const filter = input.value.toLowerCase();
    const cards = document.getElementsByClassName('language-card');

    for(let i=0; i<cards.length; i++) {
        let name = cards[i].innerText.toLowerCase();
        cards[i].style.display = name.includes(filter) ? '' : 'none';
    }
}

// -----------------------------
// MULTILINGUAL TEXT SWITCHING
// -----------------------------
function setLanguage(lang) {
    if(!translations[lang]) return;
    
    // Navigation links
    const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-nav a');
    if(navLinks.length >= 3){
        navLinks[0].textContent = translations[lang].home;
        navLinks[1].textContent = translations[lang].tribes;
        navLinks[2].textContent = translations[lang].languages;
    }

    // Hero section
    const heroTitle = document.querySelector('.hero-text h1');
    const heroDesc = document.querySelector('.hero-text p');
    if(heroTitle && heroDesc){
        heroTitle.textContent = translations[lang].heroTitle || heroTitle.textContent;
        heroDesc.textContent = translations[lang].heroDesc || heroDesc.textContent;
    }

    // Intro section
    const introTitle = document.querySelector('.intro h2');
    const introText = document.querySelector('.intro p');
    if(introTitle && introText){
        introTitle.textContent = translations[lang].introTitle || introTitle.textContent;
        introText.textContent = translations[lang].introText || introText.textContent;
    }

    // Hero buttons
    const btns = document.querySelectorAll('.btn-primary');
    if(btns[0]) btns[0].textContent = translations[lang].viewTribes || btns[0].textContent;
    if(btns[1]) btns[1].textContent = translations[lang].viewLanguages || btns[1].textContent;
}

// -----------------------------
// SMOOTH SCROLL FOR INTERNAL LINKS
// -----------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if(preloader){
        preloader.classList.add('fade-out');
        setTimeout(() => preloader.style.display = 'none', 500);
    }
});
