document.addEventListener("DOMContentLoaded", function () {
    lucide.createIcons(); 
});



lucide.createIcons();


const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);


document.querySelectorAll('.section-title, .gallery-card, .feature-card').forEach(el => {
    observer.observe(el);
});


class Confetti {
    constructor() {
        this.container = document.getElementById('confetti-container');
        this.confettiColors = ['#FF5555', '#FFD700', '#FF69B4', '#00FF00', '#87CEEB'];
        this.confettiCount = 50;
        this.confetti = [];
        this.init();
    }

    init() {
        for (let i = 0; i < this.confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.backgroundColor = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.opacity = Math.random();
            this.container.appendChild(confetti);
            this.confetti.push(confetti);
        }
    }
}

new Confetti();


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
           
            mobileMenu.classList.remove('active');
        }
    });
});


const registerBtn = document.querySelector('.register-btn');
registerBtn.addEventListener('mouseenter', () => {
    registerBtn.style.transform = 'scale(1.05) rotateX(10deg)';
});
registerBtn.addEventListener('mouseleave', () => {
    registerBtn.style.transform = 'scale(1) rotateX(0)';
});

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const opacity = Math.min(scrollPosition / 500, 0.95);
    navbar.style.background = `linear-gradient(to right, 
        rgba(58, 9, 9, ${opacity}), 
        rgba(48, 12, 93, ${opacity}), 
        rgba(101, 12, 92, ${opacity}))`;
});
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

document.addEventListener("DOMContentLoaded", function () {
    const confettiContainer = document.getElementById("confetti-container");

    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.setProperty("--hue", Math.random());
        confettiContainer.appendChild(confetti);
    }
});




document.addEventListener("DOMContentLoaded", function () {
    let inputField = document.getElementById("vivdhotsavInput"); 

    inputField.addEventListener("input", function () {
        if (inputField.value.trim().toLowerCase() === "vivdhotsav") {
            setTimeout(startConfetti, 500);
        }
    });

    function startConfetti() {
        let container = document.getElementById("popper-container");

        for (let i = 0; i < 100; i++) {
            let confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.top = "-12px";
            confetti.style.backgroundColor =
                "hsl(" + Math.random() * 360 + ", 100%, 50%)";

            container.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
    }
});
