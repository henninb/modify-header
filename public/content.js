chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // Handle messages from the background script here
    if (request.action == "modifyHeaders") {
      // Modify headers as needed
      // You can access the request headers here
      sendResponse({ headers: request.headers });
    }
  }
);
