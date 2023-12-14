document.getElementById("dice-button").addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const advice = data.slip.advice;
      const adviceId = data.slip.id;
      document.getElementById("advice-text").textContent = `"${advice}"`;
      document.getElementById("advice-id").textContent = `Advice #${adviceId}`;
    })
    .catch((error) => {
      console.error("Error fetching advice:", error);
    });
});
