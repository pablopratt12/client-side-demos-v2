import './style.css';

document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title");
    const rainbowBtn = document.getElementById("rainbowBtn");

    if (rainbowBtn && title) {
        rainbowBtn.addEventListener("click", () => {
            title.classList.toggle("rainbow");
        });
    } else {
        console.error("Rainbow button or title not found.");
    }
});



