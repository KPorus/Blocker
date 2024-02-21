// content.js

// Assuming "keywords.json" is in the same directory as "content.js"
const keywordsURL = chrome.runtime.getURL("keywords.json");

fetch(keywordsURL)
  .then((response) => response.json())
  .then((keywordsData) => {
    loadAndCheckKeywords(keywordsData.KEYWORDS);
  })
  .catch((error) => {
    console.error("Error loading keywords:", error);
  });

function loadAndCheckKeywords(adultKeywords) {
  try {
    const currentUrl = window.location.href.toLowerCase();

    if (currentUrl.includes("youtube.com")) {
      return;
    }

    if (adultKeywords.some((keyword) => currentUrl.includes(keyword))) {
      chrome.runtime.sendMessage({ action: "redirect" });
    }
  } catch (error) {
    console.error("Error processing keywords:", error);
  }
}
