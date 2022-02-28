// Variables
const ToogleIcon = document.getElementById("toogle__icon");
const NavMobile = document.getElementById("nav-mobile");
const ToogleIconClose = document.getElementById("toogle-close");
const MobileLinks = document.querySelectorAll(".navbar-mobile__link");

// EventListeners
ToogleIcon.addEventListener("click", () => {
  OpenToggle();
});

ToogleIconClose.addEventListener("click", () => {
  CloseToggle();
});

MobileLinks.forEach((e) => {
  e.addEventListener("click", () => {
    CloseToggle();
  });
});

// Functions
const OpenToggle = () => {
  NavMobile.classList.add("nav-mobile--open");
};

const CloseToggle = () => {
  NavMobile.classList.remove("nav-mobile--open");
};
