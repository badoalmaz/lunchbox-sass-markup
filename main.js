document.getElementById("pink").onclick = function () {
  document.getElementById("pink").classList.toggle("pink_title");
};

const first = document.querySelector(".slide");
const slide = () => {
  const before = document.querySelector(".showing");
  if (before) {
    before.classList.remove("showing");
    const next = before.nextElementSibling;
    if (next) {
      next.classList.add("showing");
    } else {
      first.classList.add("showing");
    }
  } else {
    first.classList.add("showing");
  }
};
slide();

setInterval(slide, 2000);
