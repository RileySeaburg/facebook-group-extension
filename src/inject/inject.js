chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      const requests = document.querySelectorAll(
        "ul.uiList._4kg._4kt._6-h._6-j > li"
      );
      requests.forEach(function (request) {
        const answers =
          request.children[0].children[1].children[0].children[0].children[3]
            .children[0].children;
        for (let i = 0; i < answers.length; i++) {
          let value = 5;
          const answer = answers[i];
          // Store answers in local storage
          // chrome.storage.local.set(
          //   {
          //     key: answer.innerText,
          //     timestamp: Date.now(),
          //   },
          //   function () {
          //     console.log("Value Set:" + Date.now());
          //   }
          // );
          console.log(answer.innerText);
        }
      });
      // ----------------------------------------------------------
    }
  }, 10);
});

chrome.storage.onChanged.addListener(function (changes, namespace) {
  if (changes.key) {
    valueChanged(changes.key.newValue);
  }
});
chrome.storage.local.get("key", function (result) {
  valueChanged(result.key);
});
