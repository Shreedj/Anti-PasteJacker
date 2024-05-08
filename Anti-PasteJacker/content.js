chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "open_popup") {
        window.open("popup/popup.html", "_blank");
    }
});
