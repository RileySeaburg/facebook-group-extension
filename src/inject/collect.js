chrome.storage.local.get(["timestamp", "key"], function (result) {
  console.log("Value currently is" + result.items);
  document.getElementById("request-output").innerText += result.key;
});
