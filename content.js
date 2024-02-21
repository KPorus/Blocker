function checkAndRedirect() {
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
    "adult",
    "indian-adult-web-series",
    "hot"
  ];

  const currentUrl = window.location.href.toLowerCase();

  if (adultKeywords.some((keyword) => currentUrl.includes(keyword))) {
    chrome.runtime.sendMessage({ action: "redirect" });
  }
}

checkAndRedirect();
