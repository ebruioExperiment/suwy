let gifContainer = document.getElementById("gifContainer");
let isGifVisible = false;

function toggleGifVisibility(audioSrc) {
  let audio = document.getElementById("audioPlayer");
  let audioSource = document.getElementById("audioSource");

  audioSource.src = audioSrc;
  audio.load();
  audio.play();

  if (!isGifVisible) {
    gifContainer.style.display = "block";
  } else {
    gifContainer.style.display = "none";
  }

  isGifVisible = !isGifVisible;
}

function changeImageAndPlayAudio(newSrc, audioSrc) {
  let img = document.getElementById("mainImg");
  let audio = document.getElementById("audioPlayer");
  let audioSource = document.getElementById("audioSource");

  img.src = newSrc;
  audioSource.src = audioSrc;
  audio.load();
  audio.play();

  if (!isGifVisible) {
    gifContainer.style.display = "none";
  }
}
