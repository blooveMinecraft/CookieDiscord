const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");
const icon = document.getElementById("music-icon");

let playing = false;

// Débloque l'audio dès le premier clic sur la page
document.addEventListener("click", () => {
    music.muted = false;
}, { once: true });

btn.addEventListener("click", () => {
    if (!playing) {
        music.play().catch(err => console.log(err));
        icon.src = "images/Musique activé.png";
        playing = true;
    } else {
        music.pause();
        icon.src = "images/Musique désactivé.png";
        playing = false;
    }
});
