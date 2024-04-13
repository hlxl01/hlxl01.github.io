let valueDisplays = document.querySelectorAll(".num");
let interval = 400;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 5000;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = 1;
  let counter = setInterval(function () {
    startValue += 5000;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
