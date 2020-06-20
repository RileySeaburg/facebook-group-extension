chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      // ----------------------------------------------------------
      // This part of the script triggers when page is done loading

      const request = document.querySelectorAll(
        "#member_requests_pagelet > div > div > div > div:nth-child(2) > div > div:nth-child(2) > ul > li"
      );
      for (let i = 0; i < request.length; i++) {
        const requestDetails = document.querySelector(
          "#member_requests_pagelet > div > div > div > div:nth-child(2) > div > div:nth-child(2) > ul > li > div > div:nth-child(2) > div > div > div:nth-child(5)"
        ).innerText;

        console.log(requestDetails);
      }
      // ----------------------------------------------------------
    }
  }, 10);
});
