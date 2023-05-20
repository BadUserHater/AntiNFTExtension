chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((mrd) => {
  console.log(mrd.request.url)
});