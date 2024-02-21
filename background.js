chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "redirect") {
    chrome.tabs.update(sender.tab.id, { url: "https://www.google.com" });
  }
});
