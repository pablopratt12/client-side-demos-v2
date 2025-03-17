document.addEventListener("DOMContentLoaded", () => {
  const counterDisplay = document.getElementById("counterDisplay");
  const counterButton = document.getElementById("counterButton");

  let count = 0;

  counterButton.addEventListener("click", () => {
      count++;
      counterDisplay.textContent = `Button clicked: ${count} times`;
  });
});
