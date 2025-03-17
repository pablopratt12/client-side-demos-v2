document.addEventListener("DOMContentLoaded", () => {
    const rainbowTitle = document.getElementById("rainbow");
    const rainbowBtn = document.getElementById("rainbowBtn");

    if (rainbowBtn && rainbowTitle) {
        rainbowBtn.addEventListener("click", () => {
            rainbowTitle.classList.toggle("rainbow");
        });
    } else {
        console.error("❌ Rainbow button or title not found.");
    }
});
