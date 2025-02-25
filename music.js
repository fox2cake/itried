document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");

    if (!localStorage.getItem("musicPlaying")) {
        localStorage.setItem("musicPlaying", "true");
        audio.play();
    }

    window.addEventListener("beforeunload", function () {
        localStorage.setItem("musicTime", audio.currentTime);
    });

    audio.currentTime = localStorage.getItem("musicTime") || 0;

    document.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
        }
    });
});
