// ==============================
// GET HTML ELEMENTS
// ==============================

const navbar =
    document.getElementById("navbar");

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");

const backToTop =
    document.getElementById("backToTop");

const sections =
    document.querySelectorAll(".section");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


// Popup elements

const popup =
    document.getElementById("popup");

const popupTitle =
    document.getElementById("popupTitle");

const popupText =
    document.getElementById("popupText");

const closePopup =
    document.getElementById("closePopup");

const popupOk =
    document.getElementById("popupOk");

const learnButtons =
    document.querySelectorAll(".learn-btn");


// ==============================
// NAVBAR SCROLL EFFECT
// ==============================

window.addEventListener("scroll", function () {

    // Change navbar when scrolling

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }


    // Show back-to-top button

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }


    // Highlight current section

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (target === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


// ==============================
// MOBILE MENU
// ==============================

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// ==============================
// CLOSE MOBILE MENU
// WHEN LINK IS CLICKED
// ==============================

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ==============================
// SECTION SCROLL ANIMATION
// ==============================

const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


sections.forEach(function (section) {

    observer.observe(section);

});


// ==============================
// BACK TO TOP
// ==============================

backToTop.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


// ==============================
// SERVICE POPUP
// ==============================

learnButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const service =
                button.getAttribute(
                    "data-service"
                );


            popupTitle.textContent =
                service;


            if (service === "Web Design") {

                popupText.textContent =
                    "Our Web Design service focuses on creating clean, attractive and user-friendly website layouts.";

            }


            else if (
                service === "Web Development"
            ) {

                popupText.textContent =
                    "Our Web Development service creates interactive and functional websites using HTML, CSS and JavaScript.";

            }


            else if (
                service === "Responsive Design"
            ) {

                popupText.textContent =
                    "Our Responsive Design service ensures websites work smoothly on desktops, tablets and mobile devices.";

            }


            popup.classList.add("show");

        }
    );

});


// ==============================
// CLOSE POPUP
// ==============================

closePopup.addEventListener(
    "click",
    function () {

        popup.classList.remove("show");

    }
);


popupOk.addEventListener(
    "click",
    function () {

        popup.classList.remove("show");

    }
);


// ==============================
// CLOSE POPUP WHEN CLICKING
// OUTSIDE POPUP BOX
// ==============================

popup.addEventListener(
    "click",
    function (event) {

        if (event.target === popup) {

            popup.classList.remove("show");

        }

    }
);


// ==============================
// ESC KEY CLOSES POPUP
// ==============================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            popup.classList.remove("show");

        }

    }
);


// ==============================
// SHOW HOME SECTION IMMEDIATELY
// ==============================

const homeSection =
    document.getElementById("home");

homeSection.classList.add("show");
