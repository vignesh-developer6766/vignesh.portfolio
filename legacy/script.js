/* ==========================================
   MOBILE MENU
========================================== */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        const icon =
            menuButton.querySelector("i");

        if (navLinks.classList.contains("open")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });


    document.querySelectorAll(".nav-link")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                const icon =
                    menuButton.querySelector("i");

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            });

        });

}


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-link");


function updateNavigation() {

    let current =
        "home";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateNavigation
);


/* ==========================================
   HACKERRANK LINK
========================================== */

/*
   I have not inserted a fake HackerRank URL.

   When you give your HackerRank profile URL,
   replace the value below.
*/

const hackerRankURL = "";


const hackerRankLink =
    document.getElementById(
        "hackerrankLink"
    );

const footerHackerRank =
    document.getElementById(
        "footerHackerRank"
    );


function openHackerRank(event) {

    event.preventDefault();


    if (hackerRankURL !== "") {

        window.open(
            hackerRankURL,
            "_blank",
            "noopener,noreferrer"
        );

    } else {

        alert(
            "Please add your HackerRank profile URL in script.js"
        );

    }

}


if (hackerRankLink) {

    hackerRankLink.addEventListener(
        "click",
        openHackerRank
    );

}


if (footerHackerRank) {

    footerHackerRank.addEventListener(
        "click",
        openHackerRank
    );

}


/* ==========================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================== */

document.addEventListener(
    "click",
    (event) => {

        if (
            !navLinks ||
            !menuButton
        ) {
            return;
        }


        if (
            navLinks.classList.contains("open") &&
            !navLinks.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            navLinks.classList.remove(
                "open"
            );


            const icon =
                menuButton.querySelector("i");


            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }

    }
);