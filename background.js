chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    chrome.storage.sync.get(details.url, (items) => {
      const headers = details.requestHeaders;

      for (const header of headers) {
        if (items[header.name] !== undefined) {
          header.value = items[header.name];
        }
      }

      return { requestHeaders: headers };
    });
  },
  { urls: ["<all_urls>"] },
  ["requestHeaders", "blocking"]
);
