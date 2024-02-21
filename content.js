// content.js

chrome.runtime.sendMessage({ action: "checkAndRedirect" });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "redirect") {
    // Redirect the tab to a safe URL
    window.location.href = "https://www.google.com";
  }
});

// const port = chrome.runtime.connect({ name: "content-script" });

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === "redirect") {
//     // Redirect the tab to a safe URL
//     window.location.href = "https://www.google.com";
//   }
// });

// checkAndRedirect();
// function checkAndRedirect() {
//   const adultKeywords = [
//     "porn",
//     "pron",
//     "jav",
//     "poorn",
//     "oxtube",
//     "xxx",
//     "nsfw",
//     "adult",
//     "fuck",
//     "pronhub",
//     "xnxx",
//     "xhamster",
//     "sexvid",
//     "fapmove",
//     "tube",
//     "sexindrag",
//     "sex",
//     "xzx",
//     "xlxx",
//     "xhofficial",
//     "pussyspace",
//     "letmejerk",
//     "xvedio",
//     "smutr",
//     "free-sex-vedio",
//     "adult",
//     "indian-adult-web-series",
//     "hot"
//   ];

//   const currentUrl = window.location.href.toLowerCase();

//   if (adultKeywords.some((keyword) => currentUrl.includes(keyword))) {
//     chrome.runtime.sendMessage({ action: "redirect" });
//   }
// }
