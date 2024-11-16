document.addEventListener("DOMContentLoaded", function () {
  const resultElement = document.getElementById("result");

  document.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
      resultElement.textContent = "";
    } else if (event.key === "Enter") {
      socket.send(resultElement.textContent);
      resultElement.textContent = "";
    } else {
      resultElement.textContent += event.key;
    }
  });
});
