const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuClose = document.getElementById('menu-close');
let menuOpen = false;

menuToggle.addEventListener('click', () => {
    if (!menuOpen) {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.classList.remove('-translate-x-full');
        }, 10);
        menuToggle.children[0].classList.add('transform', 'rotate-45', 'translate-y-2.5');
        menuToggle.children[1].classList.add('opacity-0');
        menuToggle.children[2].classList.add('transform', '-rotate-45', '-translate-y-2.5');
        menuOpen = true;
    } else {
        closeMenu();
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuContent = document.getElementById('menu-content');
    const menuClose = document.getElementById('menu-close');
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.remove('-translate-x-full');
        mobileMenu.classList.remove('hidden');
    });

    menuClose.addEventListener('click', function() {
        closeMenu();
    });

    document.addEventListener('click', function(event) {
        if (!menuContent.contains(event.target) && !menuToggle.contains(event.target)) {
            closeMenu();
        }
    });

    function closeMenu() {
        mobileMenu.classList.add('-translate-x-full');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');

    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % 3;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000);
});




const countDownDate = new Date("December 19, 2024 15:37:25").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {


    const now = new Date().getTime();


    const distance = countDownDate - now;


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.querySelector(".countdown-element.days").innerText = days;
    document.querySelector(".countdown-element.hours").innerText = hours;
    document.querySelector(".countdown-element.minutes").innerText = minutes;
    document.querySelector(".countdown-element.seconds").innerText = seconds;

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".count-down-main").innerText = "EXPIRED";
    }
}, 1000);


$(document).ready(function() {

    $("#header-placeholder").load("header.html");
    $("#footer-placeholder").load("footer.html");


    $(document).on('click', '#menu-open', function() {
        $('.mobile-menu').addClass('open');
    });

    $(document).on('click', '#menu-close', function() {
        $('.mobile-menu').removeClass('open');
    });
});


menuClose.addEventListener('click', () => {
    closeMenu();
});

function closeMenu() {
    mobileMenu.classList.add('-translate-x-full');
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
    }, 300);
    menuToggle.children[0].classList.remove('transform', 'rotate-45', 'translate-y-2.5');
    menuToggle.children[1].classList.remove('opacity-0');
    menuToggle.children[2].classList.remove('transform', '-rotate-45', '-translate-y-2.5');
    menuOpen = false;
}
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

setInterval(nextSlide, 5000);

$(document).ready(function() {
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});




//speaker effect 
// Speaker Carousel
const carouselContainer = document.getElementById('carousel-container');
const carouselLeft = document.getElementById('carousel-left');
const carouselRight = document.getElementById('carousel-right');

let scrollAmount = 0;
let itemWidth = 0;
const items = carouselContainer.children;

// Wait for images to load before calculating itemWidth
window.addEventListener('load', () => {
    itemWidth = items[0].offsetWidth; // Get itemWidth after images load
    const containerWidth = carouselContainer.offsetWidth;

    carouselLeft.onclick = () => {
        if (scrollAmount > 0) {
            scrollAmount -= itemWidth;
            if (scrollAmount < 0) scrollAmount = 0;
            centerItem(scrollAmount, containerWidth);
        }
    };

    carouselRight.onclick = () => {
        const maxScrollAmount = itemWidth * (items.length - 1);
        if (scrollAmount < maxScrollAmount) {
            scrollAmount += itemWidth;
            if (scrollAmount > maxScrollAmount) scrollAmount = maxScrollAmount;
            centerItem(scrollAmount, containerWidth);
        }
    };

    function centerItem(scrollAmount, containerWidth) {
        const newScrollLeft = scrollAmount - (containerWidth - itemWidth) / 2;
        carouselContainer.scrollTo({
            top: 0,
            left: newScrollLeft,
            behavior: 'smooth'
        });
    }
});

// Speaker Modal
const modals = document.querySelectorAll('[data-modal]');

modals.forEach(img => {
    const modalId = img.getAttribute('data-modal');
    const modal = document.getElementById(modalId);

    img.addEventListener('mouseenter', () => {
        modal.classList.remove('hidden');
    });

    img.addEventListener('mouseleave', () => {
        modal.classList.add('hidden');
    });

    // Ensure modal stays open when hovering over it
    modal.addEventListener('mouseenter', () => {
        modal.classList.remove('hidden');
    });

    modal.addEventListener('mouseleave', () => {
        modal.classList.add('hidden');
    });


});

// Read more functionality 

document.getElementById('read-more').addEventListener('click', function() {
    var moreText = document.getElementById('more-text');
    var button = this;
    if (moreText.style.display === 'none') {
        moreText.style.display = 'block';
        button.textContent = 'Read Less';
    } else {
        moreText.style.display = 'none';
        button.textContent = 'Read More';
    }
});