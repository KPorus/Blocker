// background.js (service worker)

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "checkAndRedirect") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        checkAndRedirect(tabs[0].id);
      }
    });
  }
});


function checkAndRedirect(tabId) {
  const adultKeywords = [
        "pron",
        "jav",
        "poorn",
        "oxtube",
        "xxx",
        "nsfw",
        "adult",
        "fuck",
        "pronhub",
        "xnxx",
        "xhamster",
        "sexvid",
        "fapmove",
        "tube",
        "sexindrag",
        "sex",
        "xzx",
        "xlxx",
        "xhofficial",
        "pussyspace",
        "letmejerk",
        "xvedio",
        "smutr",
        "free-sex-vedio",
        "adult",
        "indian-adult-web-series",
        "hot"
  ];

 chrome.tabs.get(tabId, (tab) => {
   if (tab) {
     const currentUrl = tab.url.toLowerCase();

     if (adultKeywords.some((keyword) => currentUrl.includes(keyword))) {
       chrome.tabs.sendMessage(tabId, { action: "redirect" });
     }
   }
 });
}

chrome.webNavigation.onCompleted.addListener(
  (details) => {
    checkAndRedirect(details.tabId);
  },
  { url: [{ urlMatches: ".*" }] }
);
