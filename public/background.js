chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "openPopup") {
      // Open extension popup
      chrome.windows.create({
        url: "index.html",
        type: "popup",
        width: 400,
        height: 300,
        left: 0
      });
    }
  });