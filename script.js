document.addEventListener("DOMContentLoaded", function () {
    let music = document.getElementById("background-music");
    let currentScreen = 1;
    let correctAnswers = 0;

    function playMusic() {
        music.play().catch(error => console.log("Музыка не смогла запуститься:", error));
        document.removeEventListener("click", playMusic);
    }
    
    document.addEventListener("click", playMusic);

    function showScreen(id) {
        document.querySelectorAll(".screen").forEach(screen => screen.style.display = "none");
        document.getElementById(`screen-${id}`).style.display = "block";
    }

    window.goToScreen = function (id) {
        currentScreen = id;
        showScreen(id);
    };

    window.answer = function (selected, screen) {
        let correct = { 3: 2, 4: 3, 5: 2 };
        
        if (selected === correct[screen]) {
            correctAnswers++;
        }
        
        if (screen === 5) {
            if (correctAnswers === 3) {
                showScreen("win");
            } else {
                showScreen("loose");
            }
            correctAnswers = 0;
        } else {
            goToScreen(screen + 1);
        }
    };

    window.restart = function () {
        correctAnswers = 0;
        goToScreen(1);
    };

    function createParticles() {
        let container = document.getElementById("particles");
        for (let i = 0; i < 50; i++) {
            let particle = document.createElement("div");
            particle.classList.add("particle");
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.animationDuration = `${2 + Math.random() * 3}s`;
            container.appendChild(particle);
        }
    }

    createParticles();
    showScreen(1);
});
