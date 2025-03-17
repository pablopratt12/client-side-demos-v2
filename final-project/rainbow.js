document.addEventListener("DOMContentLoaded", () => {
    const galleryTitle = document.getElementById("galleryTitle");
    const rainbowBtn = document.getElementById("rainbowBtn");

    if (rainbowBtn && galleryTitle) {
        rainbowBtn.addEventListener("click", () => {
            galleryTitle.classList.toggle("rainbow");
        });
    } else {
        console.error("❌ Rainbow button or title not found.");
    }
});
