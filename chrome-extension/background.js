let activeTabStartTime = {};
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  const hostname = new URL(tab.url).hostname;
  activeTabStartTime[hostname] = Date.now();
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.status === "complete") {
    const hostname = new URL(tab.url).hostname;
    activeTabStartTime[hostname] = Date.now();
  }
});

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.type === 'GET_TIME') {
    sendResponse({ startTime: activeTabStartTime[req.hostname] || null });
  }
});
