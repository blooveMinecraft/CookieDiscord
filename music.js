const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");
const icon = document.getElementById("music-icon");

let playing = false;

btn.addEventListener("click", () => {
  if (!playing) {
    music.play();
    icon.src = "images/Musique activé.png";
    playing = true;
  } else {
    music.pause();
    icon.src = "images/Musique désactivé.png";
    playing = false;
  }
});
