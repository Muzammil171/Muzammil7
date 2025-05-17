
window.onscroll = function () {
    var button = document.getElementById("scrollButton");
    if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
        button.style.display = "block"; // Show button when half page is scrolled
    } else {
        button.style.display = "none"; // Hide button when less than half is scrolled
    }
};

// Add click event to scroll to top
document.getElementById("scrollButton").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"  // Smooth scroll effect
    });
});

// ---------------------new section----------------------

// Navbar links smooth scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Scroll to the target section smoothly
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ---------------------new section----------------------

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// ---------------------new section----------------------

// Add event listener to toggle the menu
document.getElementById('hamburgerMenu').addEventListener('click', function () {
    var navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('open'); // Toggle the 'open' class to show/hide menu
});

// ---------------------new section----------------------

const circles = document.querySelectorAll('.progress-circle');

circles.forEach(circle => {
    const value = parseInt(circle.getAttribute('data-value'), 10);
    const skillName = circle.getAttribute('data-skill');
    const valueElem = circle.querySelector('.progress-value');
    let start = 0;

    const updateProgress = () => {
        start++;
        valueElem.textContent = skillName; // Show skill name in center
        const degree = start * 3.6;
        circle.style.background = `conic-gradient(#189b9b ${degree}deg, #081910 0deg)`;

        if (start < value) {
            requestAnimationFrame(updateProgress);
        }
    };

    updateProgress();
});

// ---------------------new section----------------------




function openOverlay() {
    document.getElementById("overlayContainer").style.display = "flex";
}

function closeOverlay() {
    document.getElementById("overlayContainer").style.display = "none";
}


let currentIndex = 0;
const cards = document.querySelectorAll('.slider .card');
const totalCards = cards.length;

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const dots = document.querySelectorAll('.dot');
const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider-container');

function updateSlider() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Button navigation
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalCards;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateSlider();
});

// Dot navigation
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index'));
        updateSlider();
    });
});

// Auto-slide with pause on hover
let autoSlideInterval;

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalCards;
        updateSlider();
    }, 2000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Mouse hover pause/resume
sliderContainer.addEventListener('mouseenter', stopAutoSlide);
sliderContainer.addEventListener('mouseleave', startAutoSlide);

// Init
updateSlider();
startAutoSlide();

// ---------------------new section----------------------









