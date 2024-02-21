// background.js
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "redirect") {
    // Use tabs API to navigate to the new URL
    chrome.tabs.update(sender.tab.id, { url: "https://www.google.com" });
  }
});
