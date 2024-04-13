let valueDisplays = document.querySelectorAll(".num");
let maxDuration = 0;

// Loop through each value display to find the maximum duration
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = 1200; // Default duration

  // Update maxDuration if needed
  if (endValue * duration > maxDuration) {
    maxDuration = endValue * duration;
  }

  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// Clear all intervals after the maximum duration
setTimeout(() => {
  valueDisplays.forEach((valueDisplay) => {
    clearInterval(valueDisplay.intervalId);
  });
}, maxDuration);