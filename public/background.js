// chrome.webRequest.onBeforeSendHeaders.addListener(
//   (details) => {
//     chrome.storage.sync.get(details.url, (items) => {
//       const headers = details.requestHeaders;
//
//       for (const header of headers) {
//         if (items[header.name] !== undefined) {
//           header.value = items[header.name];
//         }
//       }
//
//       return { requestHeaders: headers };
//     });
//   },
//   { urls: ["<all_urls>"] },
//   ["requestHeaders", "blocking"]
// );


// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if (request.action == "modifyHeaders") {
//       // Fetch the headers and make changes
//       chrome.storage.sync.get(request.url, (items) => {
//         const headers = request.headers;
//
//         for (const header of headers) {
//           if (items[header.name] !== undefined) {
//             header.value = items[header.name];
//           }
//         }
//
//         // Send the modified headers back to the content script
//         sendResponse({ headers });
//       });
//     }
//   }
// );

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == "modifyHeaders") {
      // Fetch the headers and make changes
      chrome.storage.sync.get(request.url, (items) => {
        const headers = request.headers;

        for (let i = 0; i < headers.length; i++) {
          const header = headers[i];
          if (items[header.name] !== undefined) {
            headers[i].value = items[header.name];
          }
        }

        // Send the modified headers back to the content script
        sendResponse({ headers });
      });
    }
  }
);

