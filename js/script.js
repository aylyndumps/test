// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika info-dia di klik
document.querySelector("#info-dia").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk menghilangkan nav
const info = document.querySelector("#info-dia");

document.addEventListener("click", function (e) {
  if (!info.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
