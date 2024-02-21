// content.js
function checkAndRedirect() {
  // Define keywords related to adult content
  const adultKeywords = [
    "porn",
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
  ];

  // Get the current URL
  const currentUrl = window.location.href.toLowerCase();

  // Check if the current URL contains adult content keywords
  if (adultKeywords.some((keyword) => currentUrl.includes(keyword))) {
    // Send a message to the background script
    chrome.runtime.sendMessage({ action: "redirect" });
  }
}

// Execute the function to check and redirect
checkAndRedirect();
