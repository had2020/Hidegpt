console.log("init js");
(function () {
  const newFaviconUrl = chrome.runtime.getURL("logo.png");

  function applyFavicon() {
    let link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = newFaviconUrl;
    } else {
      link = document.createElement("link");
      link.rel = "icon";
      link.href = newFaviconUrl;
      document.head.appendChild(link);
    }
  }

  applyFavicon();

  const observer = new MutationObserver(() => {
    applyFavicon();
  });

  observer.observe(document.head, { childList: true, subtree: true });
})();
