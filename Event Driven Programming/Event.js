function setupButtons() {
  const startBtn = document.getElementById("startBtn");
  const stopBtn = document.getElementById("stopBtn");

  // Add event listeners to the buttons
  startBtn.addEventListener("click", onStartBtnClicked);
  stopBtn.addEventListener("click", onStopBtnClicked);

  function onStartBtnClicked() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    console.log("Start button clicked");
  }

  function onStopBtnClicked() {
    stopBtn.disabled = true;
    startBtn.disabled = false;
    console.log("Stop button clicked");
  }
}
