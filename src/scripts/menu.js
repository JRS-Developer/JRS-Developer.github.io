const NavLinks = document.querySelectorAll(".navbar__link");
const NavMobileLinks = document.querySelectorAll(".navbar-mobile__link");

window.addEventListener("DOMContentLoaded", () => {
  NavLinks.forEach((link) => {
    CheckLink(link, "navbar__link--active");
  });

  NavMobileLinks.forEach((link) => {
    CheckLink(link, "navbar-mobile__link--active");
  });
});

const CheckLink = (link, classList) => {
  const href = link.getAttribute("href");

  if (href == location.hash) {
    ChangeLinkColor(link, classList);
  } else if (href == "#" && location.hash == "") {
    ChangeLinkColor(link, classList);
  }
};

const ChangeLinkColor = (link, classList) => {
  link.classList.add(classList);
};

const RemoveColors = () => {
  NavLinks.forEach((link) => {
    link.className = "navbar__link";
    link.addEventListener("click", (link) => {
      RemoveColors();
      ChangeLinkColor(link.target, "navbar__link--active");
    });
  });
  NavMobileLinks.forEach((link) => {
    link.className = "navbar-mobile__link";
    link.addEventListener("click", (link) => {
      RemoveColors();
      ChangeLinkColor(link.target, "navbar-mobile__link--active");
    });
  });
};

RemoveColors();
