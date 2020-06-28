chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      // ----------------------------------------------------------
      // This part of the script triggers when page is done loading
      const numberOfRequests = document
        .querySelector(
          `#u_0_1m, #u_0_1n > div > div:nth-child(2) > div > div:nth-child(1) > div > div._ohe.lfloat > div > span`
        )
        .innerText.replace(/[^0-9\.]+/g, "")
        .trim();
      for (let i = 0; i < numberOfRequests; i + 10) {
        window.scrollTo(0, document.body.scrollHeight);
      }
      const requests = document.querySelectorAll(
        "ul.uiList._4kg._4kt._6-h._6-j > li"
      );
      requests.forEach(function (request) {
        // const parser = new DOMParser();
        // const parsedRequest = parser.parseFromString(
        //   request.innerHTML,
        //   "text/html"
        // );
        // console.dir(parsedRequest.all[35].innerHTML);
        const answers =
          request.children[0].children[1].children[0].children[0].children[4]
            .children[0].children;
        for (let i = 0; i < answers.length; i++) {
          const answer = answers[i];
          console.log(answer.innerText);
        }
      });
      // ----------------------------------------------------------
    }
  }, 10);
});
