let buttonChangeColor = document.querySelector(".button_change_color");
const backgroundBody = document.querySelector("body");
const spanColor = document.querySelector("span");

let indexColor = 0;

const color = [
  "#ff7272",
  "#ffdb8e",
  "#ffff8d",
  "#9bff9c",
  "#90d1ff",
  "#ed84ff",
];

buttonChangeColor.addEventListener("click", () => {
  document.body.style.animation = "none";
  document.body.style.background = color[indexColor];

  if (indexColor === 5) {
    indexColor = 0;
  } else {
    indexColor++;
  }

  spanColor.innerHTML = color[indexColor];
});
