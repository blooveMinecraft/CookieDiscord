// --- CONFIGURATION --- //
const musicFile = "../images/Minecraft musique.mp3"; // chemin vers ta musique
const volumeLevel = 0.4; // volume entre 0 et 1

// --- INITIALISATION --- //
const audio = new Audio(musicFile);
audio.volume = volumeLevel;
audio.loop = true;

// --- LECTURE AUTOMATIQUE (avec clic utilisateur) --- //
document.addEventListener("click", () => {
    if (audio.paused) {
        audio.play().catch(() => {});
    }
}, { once: true });

// --- BOUTON PLAY/PAUSE --- //
function toggleMusic() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
