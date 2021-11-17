const switchButton = document.querySelector("#switch");
const bodyElement = document.body;

switchButton.addEventListener("click", (e) => {
  if (e.target.parentElement.parentElement.classList.contains("switch-on")) {
    bodyElement.className = "switch-off";
  } else {
    bodyElement.className = "switch-on";
  }
});
