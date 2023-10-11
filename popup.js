document.addEventListener("DOMContentLoaded", function () {
  const headerKeyInput = document.getElementById("headerKey");
  const headerValueInput = document.getElementById("headerValue");
  const applyHeaderButton = document.getElementById("applyHeader");
  const disableHeaderButton = document.getElementById("disableHeader");

  applyHeaderButton.addEventListener("click", () => {
    // Get the header key and value from the inputs
    const headerKey = headerKeyInput.value;
    const headerValue = headerValueInput.value;

    // Store these values in the extension's storage
    chrome.storage.sync.set({ [headerKey]: headerValue });
  });

  disableHeaderButton.addEventListener("click", () => {
    // Get the header key from the input
    const headerKey = headerKeyInput.value;

    // Remove the header from the storage
    chrome.storage.sync.remove(headerKey);
  });
});
