// ==============header scroll effect===============
const header = document.querySelector("header");
const sectionOne = document.querySelector(".home");

const sectionOneOptions = {
  rootMargin: "-80% 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

//============== hamburger menu ================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("hamburger-active");
});
