gsap.registerPlugin(ScrollTrigger);
// Intro Animation

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".intro", { y: "-100%", duration: 1.5 });

// Navbar Hamburger Menu
const toggleButton = document.getElementsByClassName("toggle_button")[0];
const navbarLinks = document.getElementsByClassName("navbar_links")[0];
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// Img Gallery
let slidePosition = 1;
SlideShow(slidePosition);

function plusSlides(n) {
  SlideShow((slidePosition += n));
}
// images controls
function currentSlide(n) {
  SlideShow((slidePosition = n));
}
function SlideShow(n) {
  let i;
  const slides = document.getElementsByClassName("Containers");
  const circles = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slidePosition = 1;
  }
  if (n < 1) {
    slidePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
}

const palm = document.querySelectorAll("#palm");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show-palm", entry.isIntersecting);
  });
});

palm.forEach((path) => {
  observer.observe(path);
});

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-text-container",
    start: "top top",
    scrub: true,
    pin: ".about-section",
  },
});

tl5.to(".about-text-container", {
  x: "0",
});

// let tl6 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".specials",
//     start: "top 30%",
//   },
// });

// tl6
//   .to(".special-one", { x: 0, duration: 1, ease: "power1.out" })
//   .to(".special-two", { x: 0, duration: 1, ease: "power1.out" })
//   .to(".special-three", { x: 0, duration: 1, ease: "power1.out" });
gsap.to(".special-one", {
  scrollTrigger: {
    trigger: ".specials",
    start: "top 30%",
  },
  x: 0,
  duration: 1,
  ease: "power1.out",
});
gsap.to(".special-two", {
  scrollTrigger: {
    trigger: ".specials",
    start: "top 30%",
  },
  y: 0,
  duration: 1,
  ease: "power1.out",
});
gsap.to(".special-three", {
  scrollTrigger: {
    trigger: ".specials",
    start: "top 30%",
  },
  x: 0,
  duration: 1,
  ease: "power1.out",
});
