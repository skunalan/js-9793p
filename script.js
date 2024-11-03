const count = document.getElementById("count");
let countNumber = Number(count.innerHTML);

const countButton = document.getElementById("count-button");
countButton.addEventListener("click", function () {
  countNumber++;
  count.innerHTML = countNumber;

  if (countNumber % 5 === 0) {
    alert(`Telefonuna ${countNumber} defa baktın. Biraz dinlenmek ister misin?`)
  }
})

const graduationIcon = document.getElementById("graduation-icon");
const studyingMusic = document.getElementById("studying-music");
graduationIcon.addEventListener("click", function() {
  if (studyingMusic.paused){
    studyingMusic.play();
    graduationIcon.className = "fa-solid fa-play";
  } else {
    studyingMusic.pause();
    graduationIcon.className = "fa-solid fa-graduation-cap";
  }
})

const readingIcon = document.getElementById("reading-icon");
const readingMusic = document.getElementById("reading-music");
readingIcon.addEventListener("click", function() {
  if (readingMusic.paused) {
    readingMusic.play();
    readingIcon.className = "fa-solid fa-play";
  } else {
    readingMusic.pause();
    readingIcon.className = "fa-solid fa-book-open";
  }
})

const businessIcon = document.getElementById("business-icon");
const businessMusic = document.getElementById("business-music");
businessIcon.addEventListener("click", function() {
  if (businessMusic.paused) {
    businessMusic.play();
    businessIcon.className = "fa-solid fa-play";
  } else {
    businessMusic.pause();
    businessIcon.className = "fa-solid fa-marker";
  }
})

const volumeFader = document.getElementById("volume-fader");
volumeFader.addEventListener("input", function() {
  studyingMusic.volume = volumeFader.value / 100;
  console.log(volumeFader.value);
  readingMusic.volume = volumeFader.value / 100;
  businessMusic.volume = volumeFader.value / 100;
});