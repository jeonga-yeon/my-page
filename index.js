// 타이핑

const greeting = document.querySelector(".main__typing");
const hello = "안녕하세요 연정아입니다!\n프론트엔드 개발자 꿈나무입니다 :)";

let index = 0;

const typing = () => {
  greeting.innerHTML += hello[index];
  index++;
  if (hello[index] === "\n") {
    greeting.innerHTML += "<br />";
    index++;
  }
  if (index > hello.length) {
    greeting.innerHTML = "";
    index = 0;
  }
};

setInterval(typing, 200);

// 슬라이딩

let slideIndex = 0;
let position = 0;
const IMAGE_WIDTH = 300;
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const slideImages = document.querySelector(".slide__images");

let prev = function () {
  if (slideIndex > 0) {
    nextBtn.classList.remove("disabled");
    position += IMAGE_WIDTH;
    slideImages.style.transform = `translateX(${position}px)`;
    slideIndex = slideIndex - 1;
  }
  if (slideIndex === 0) {
    prevBtn.classList.add("disabled");
  }
};

let next = function () {
  if (slideIndex < 4) {
    prevBtn.classList.remove("disabled");
    position -= IMAGE_WIDTH;
    slideImages.style.transform = `translateX(${position}px)`;
    slideImages.style.transition = "transform .5s ease-out";
    slideIndex = slideIndex + 1;
  }
  if (slideIndex === 4) {
    nextBtn.classList.add("disabled");
  }
};

let init = function () {
  prevBtn.classList.add("disabled");
  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
};

init();
