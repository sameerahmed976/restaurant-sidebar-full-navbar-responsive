const hamburgerBtn = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li a");
// const navLinksActive = document.querySelector(".nav-links-active");

hamburgerBtn.addEventListener("click", () => {
  //   console.log("click");

  if (!hamburgerBtn.classList.contains("hamburger-close")) {
    hamburgerBtn.classList.add("hamburger-close");
    navLink.classList.add("nav-links-active");
  } else {
    hamburgerBtn.classList.remove("hamburger-close");
    navLink.classList.remove("nav-links-active");
  }
});

// remove sidebar
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerBtn.classList.remove("hamburger-close");
    navLink.classList.remove("nav-links-active");
  });
});
