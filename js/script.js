//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika menu humbuerger menu di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const humburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

