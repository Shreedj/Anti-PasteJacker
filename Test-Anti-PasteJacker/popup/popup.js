
function closePopup() {
    window.close();
}
document.getElementById("closeButton").addEventListener("click", closePopup);

const messageElement = document.getElementById("message");
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.isClipMalicious) {
    messageElement.textContent = "Warning: Potentially malicious content detected in clipboard!";
  }
});
