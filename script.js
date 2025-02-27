const screens = ["screen-1", "screen-2", "screen-3", "screen-4", "screen-5", "screen-win", "screen-loose"];
let currentScreen = "screen-1";
let wrongAnswers = 0;

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bg-music");
    if (audio) {
        audio.volume = 0.5;
        audio.play().catch(() => {});
    }

    createParticles();
});

function changeScreen(nextScreen) {
    if (screens.includes(nextScreen)) {
        currentScreen = nextScreen;
        document.body.style.backgroundImage = `url('${nextScreen}.jpg')`;
    }
}

function handleAnswer(isCorrect) {
    if (!isCorrect) {
        wrongAnswers++;
    }

    if (currentScreen === "screen-3") changeScreen("screen-4");
    else if (currentScreen === "screen-4") changeScreen("screen-5");
    else if (currentScreen === "screen-5") {
        if (wrongAnswers > 0) changeScreen("screen-loose");
        else changeScreen("screen-win");
    }
}

function createParticles() {
    const particleContainer = document.querySelector(".particles");
    for (let i = 0; i < 30; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.top = Math.random() * -100 + "vh";
        particle.style.animationDuration = (Math.random() * 3 + 2) + "s";
        particleContainer.appendChild(particle);
    }
}
