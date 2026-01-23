// --- Récupération des éléments ---
const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");
const icon = document.getElementById("music-icon");

// --- Reprendre la musique au bon moment ---
const savedTime = localStorage.getItem("musicTime");
const savedState = localStorage.getItem("musicPlaying");

// Si un temps est enregistré, on reprend à cet endroit
if (savedTime) {
    music.currentTime = parseFloat(savedTime);
}

// Si la musique était en lecture avant le changement de page, on relance
if (savedState === "true") {
    music.play().catch(() => {});
    icon.src = "images/Musique activé.png";
} else {
    icon.src = "images/Musique désactivé.png";
}

// --- Sauvegarder la position toutes les 500ms ---
setInterval(() => {
    localStorage.setItem("musicTime", music.currentTime);
}, 500);

// --- Bouton ON/OFF ---
btn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        icon.src = "images/Musique activé.png";
        localStorage.setItem("musicPlaying", "true");
    } else {
        music.pause();
        icon.src = "images/Musique désactivé.png";
        localStorage.setItem("musicPlaying", "false");
    }
});

// --- Sauvegarder avant de quitter la page ---
window.addEventListener("beforeunload", () => {
    localStorage.setItem("musicTime", music.currentTime);
});
