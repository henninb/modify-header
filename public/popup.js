// document.addEventListener("DOMContentLoaded", function () {
//   const headerKeyInput = document.getElementById("headerKey");
//   const headerValueInput = document.getElementById("headerValue");
//   const applyHeaderButton = document.getElementById("applyHeader");
//   const disableHeaderButton = document.getElementById("disableHeader");
//
//   applyHeaderButton.addEventListener("click", () => {
//     // Get the header key and value from the inputs
//     const headerKey = headerKeyInput.value;
//     const headerValue = headerValueInput.value;
//
//     // Store these values in the extension's storage
//     chrome.storage.sync.set({ [headerKey]: headerValue });
//   });
//
//   disableHeaderButton.addEventListener("click", () => {
//     // Get the header key from the input
//     const headerKey = headerKeyInput.value;
//
//     // Remove the header from the storage
//     chrome.storage.sync.remove(headerKey);
//   });
// });
//

// chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//   const activeTab = tabs[0];
//   chrome.scripting.executeScript({
//     target: { tabId: activeTab.id },
//     function: (url) => {
//       // Trigger the content script to modify headers
//       chrome.runtime.sendMessage({ action: "modifyHeaders", url: url }, (response) => {
//         // Handle the response if needed
//       });
//     },
//     args: [activeTab.url]
//   });
// });

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (tabs && tabs.length > 0) {
    const activeTab = tabs[0];
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      function: (url) => {
        // Trigger the content script to modify headers
        chrome.runtime.sendMessage({ action: "modifyHeaders", url: url }, (response) => {
          // Handle the response if needed
        });
      },
      args: [activeTab.url]
    });
  } else {
    // Handle the case where no active tab is found
    console.error("No active tab found.");
  }
});

