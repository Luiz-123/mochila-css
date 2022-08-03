// Navbar Sidebar
const menuBtn = document.querySelectorAll('.menu-btn');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu li');

// Toggle sider bar open-close
menuBtn.forEach(btn => {
    btn.addEventListener('click', sideNavToggle);
});

function sideNavToggle() {
    // Animation delay
    let delay = 100;
    // Toggle Open Class
    menu.classList.toggle('menu-open');
    // Sidenav Link Slide Animations
    setTimeout(() => {
        // Reset Animations After All Of Then End
        resetAnimations();
    }, delay * (links.length + 1));
    // Add Animations  To Links
    links.forEach(link => {
        // Opacity
        link.style.opacity = "0";
        // Animation
        link.style.animation = "slideIn 400ms ease-in-out forwards";
        // Delay
        link.style.animationDelay = delay + "ms";
        // Increase Delay For Each Link
        delay += 100;
    });

    // Reset animations So They Can Be Activated Again
    function resetAnimations() {
        // Select All Links
        links.forEach(link => {
            // Remove Animations
            link.style.animation = "none";
            // Set Opacity Back To Default
            link.style.opacity = "1";
        });
    }
}

// Slider
const cntrl = document.querySelectorAll('.slider-cntrl');
const cntrlMob = document.querySelectorAll('.pagination-mobile > li');
const title = document.querySelector('.title');
const subTitle = document.querySelectorAll('.sub-title');
const img = document.querySelector('.thumbnail');
const count = document.querySelector('.slider-count');
const progress = document.querySelector('.progress div');

let i = 0;
// Data
// Array With Image Paths For The Slider
const images = [
    './img/img1.jpg',
    './img/img2.jpg',
    './img/img3.jpg',
];

// Progress  Widths For The Slider
const progressWidth = [
    '33%',
    '66%',
    '100%',
];

// Text Variations For The Slider
const text = [
    'Work',
    'Active',
    'Travel',
];

// Paginations Conttrols
for(let i = 0; i < cntrl.length; i++) {
    cntrl[i].addEventListener('click', () => {
        // Run The Slider Function
        slider(i);
        // Set Id To Clicked Pagination Index
        id = 1;
        // Stop Auto Slide
        stopAutoSlide();
    });
    // Add Click Event For All Pagination On Mobile
    cntrlMob[i].addEventListener('click', () => {
        // Run The Slider Function
        slider(i);
        // Set Id To Clicked Pagination Index
        id = 1;
        // Stop Auto Slide
        stopAutoSlide();
    });
}

function slider(i) {
    // Change Thumbnail Image
    img.src = images[i];
    // Progress Progression
    progress.style.width = progressWidth[i];
    // Change Title
    title.innerText = text[i] + " Collection";
    // Change Sub Title
    subTitle.forEach(sub => {
        sub.innerText= text[i] + " Collection"
    });

    // Change Slide Number
    count.innerText = "/0" + (i + 1);

    // Remove Active Class From All
    for(let i = 0; i < cntrl.length; i++) {
        cntrl[i].classList.remove('active');
        cntrlMob[i].classList.remove('pag-active');
    }

    // Reset Active Class To Clicked Element
    cntrl[i].classList.add('active');
    cntrlMob[i].classList.add('pag-active');
}

// Slider Automation
function nextSlide() {
    // Increment Img Id
    id++;
    // Check If Id Is Creater Than The Number Of Avaliable Slides
    if(id > cntrl.length - 1) {
        id = 0;
    }

    // Run The Slider Function
    slider(id);
}

// Automate Slider
let autoSlide = setInterval(nextSlide, 5000);

// Stop Automatic Slide
function stopAutoSlide() {
    clearInterval(autoSlide);

    // Restart Auto Slider
    autoSlide = setInterval(nextSlide, 5000);
}