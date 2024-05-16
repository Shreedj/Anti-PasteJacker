chrome.clipboard.readText(function(clipboardContent) {
    if (chrome.runtime.lastError) {
      console.error("Error reading clipboard content:", chrome.runtime.lastError.message);
      return;
    }
  
    chrome.runtime.sendMessage({ readclipboard:true }); 
  });