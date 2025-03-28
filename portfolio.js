
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

// Add event listener to toggle the menu
document.getElementById('hamburgerMenu').addEventListener('click', function () {
    var navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('open'); // Toggle the 'open' class to show/hide menu
});

// ---------------------new section----------------------

let index = 0;
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

function moveToNextCard() {
    index++;
    if (index >= totalCards) {
        index = 0;  // Go back to the first card
    }
    updateSlider();
}

function updateSlider() {
    const slider = document.querySelector('.slider');
    const offset = -index * 100; // Move by 100% of the current card's width
    slider.style.transform = `translateX(${offset}%)`;
}

// Automatically move to the next card every 2 seconds
setInterval(moveToNextCard, 2000);

// ---------------------new section----------------------

