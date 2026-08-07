// ===========================
// Мобильное меню
// ===========================

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const navigationLinks = document.querySelectorAll(".navigation a");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navigation.classList.toggle("open");

        menuToggle.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        document.body.classList.toggle("menu-open", isOpen);
    });

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navigation.classList.remove("open");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            document.body.classList.remove("menu-open");
        });
    });
}

// ===========================
// Активный пункт меню
// ===========================

const sections = document.querySelectorAll("main section[id]");

function updateActiveLink() {
    const marker = window.scrollY + window.innerHeight * 0.32;
    let currentSection = "home";

    sections.forEach(function (section) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (marker >= top && marker < bottom) {
            currentSection = section.id;
        }
    });

    navigationLinks.forEach(function (link) {
        const href = link.getAttribute("href");

        link.classList.toggle("active", href === "#" + currentSection);
    });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("resize", updateActiveLink);

updateActiveLink();


// ===========================
// Кнопка "Наверх"
// ===========================

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", function (event) {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
// ===========================
// Плавное появление секций при прокрутке
// ===========================

const scrollSections = document.querySelectorAll(
    "main > section"
);

if (scrollSections.length) {

    scrollSections.forEach(function (section) {
        section.classList.add("scroll-section");
    });


    const sectionObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }

            });

        },
        {
            threshold: 0.35
        }
    );


    scrollSections.forEach(function (section) {
        sectionObserver.observe(section);
    });

}
// ===========================
// Анимация каталога
// ===========================

const catalogItems = document.querySelectorAll(
    ".catalog .section-heading, .catalog-card"
);


const catalogObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0
    }
);


catalogItems.forEach(function (item) {

    catalogObserver.observe(item);

});
// ===========================
// Анимация преимуществ
// ===========================

const advantageItems = document.querySelectorAll(
    ".advantages .section-heading, .advantage-card"
);


const advantageObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.1
    }
);


advantageItems.forEach(function (item) {

    advantageObserver.observe(item);

});


// ===========================
// Анимация магазинов
// ===========================


const storesHeading = document.querySelector(".stores .section-heading");
const storesMaps = document.querySelectorAll(".stores .stores-map");
const storeCards = document.querySelectorAll(".store-card");


function createObserver(element, className) {

    if (!element) return;


    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(className);

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.2
        }

    );


    observer.observe(element);

}


createObserver(
    storesHeading,
    "show"
);


storesMaps.forEach(function (map) {

    createObserver(
        map,
        "show"
    );

});


storeCards.forEach(function (card) {

    createObserver(
        card,
        "show"
    );

});
// ===========================
// Анимация брендов
// ===========================

const brandsSection = document.querySelector(".brands");


if (brandsSection) {

    const brandsObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("brands-visible");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    brandsObserver.observe(brandsSection);

}
// ===========================
// Анимация контактов
// ===========================

const contactsSection = document.querySelector(".contacts");


if (contactsSection) {

    const contactsObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("contacts-visible");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    contactsObserver.observe(contactsSection);

}


// ===========================
// Линия под логотипом на Hero
// ===========================

const heroSection = document.querySelector(".hero");
const heroLogo = document.querySelector(".hero-logo");

if (heroSection && heroLogo) {

    const heroLogoObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    heroLogo.classList.add("logo-active");
                } else {
                    heroLogo.classList.remove("logo-active");
                }

            });

        },
        {
            threshold: 0.4
        }
    );

    heroLogoObserver.observe(heroSection);

}
// ===========================
// Mobile header transparency
// ===========================

const header = document.querySelector(".header");
const hero = document.querySelector(".hero");


if (header && hero) {

    const headerObserver = new IntersectionObserver(
        ([entry]) => {

            if (window.innerWidth <= 640) {

                if (entry.isIntersecting) {

                    header.classList.remove("header-transparent");

                } else {

                    header.classList.add("header-transparent");

                }

            }

        },
        {
            threshold: 0.15
        }
    );


    headerObserver.observe(hero);

}

// ===========================
// Phone behavior
// Mobile: call
// Desktop: copy number
// ===========================

const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

if (phoneLinks.length) {

    phoneLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

            if (!isMobile) {

                event.preventDefault();

                const phoneNumber = link.textContent.trim();

                navigator.clipboard.writeText(phoneNumber).then(function () {

                    let message = document.querySelector(".phone-copy-message");

                    if (!message) {
                        message = document.createElement("div");
                        message.className = "phone-copy-message";
                        document.body.appendChild(message);
                    }

                    message.textContent = "Скопировано";

                    message.classList.add("show");

                    setTimeout(function () {
                        message.classList.remove("show");
                    }, 1500);

                });

            }

        });

    });

}
