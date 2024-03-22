// toggle-menu
let toggle = document.querySelector(".toggle-menue");
let links = document.querySelector(".links");

toggle.onclick = function (e) {
  e.stopPropagation();
  links.classList.toggle("opened");
  toggle.classList.toggle("menue-active");
};

// click anywhere
document.addEventListener("click", (e) => {
  if (e.target !== toggle && e.target !== links) {
    links.classList.remove("opened");
    toggle.classList.remove("menue-active");
  }
});

// scroll progress
function progressBarScroll() {
  let winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () 
{
  progressBarScroll();

  // start Up button logic
  let UpButton = document.querySelector(".up");
  let sections = document.querySelectorAll('section');
  if (window.scrollY >= 500) {
    UpButton?.classList.add("appeared");
  } else {
    UpButton?.classList.remove("appeared");
  }

      // Animation logic
    sections.forEach(sec => 
    {
        let top = window.scrollY;
        let offset = sec.offsetTop - 300;
        let height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
};

// Up button logic
let UpButton = document.querySelector(".up");
UpButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// open images 

