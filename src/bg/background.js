// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

//example of using a message handler from the inject scripts
const requests = document.querySelectorAll(
  "ul.uiList._4kg._4kt._6-h._6-j > li"
);

requests.forEach(function (request) {
  const answers =
    request.children[0].children[1].children[0].children[0].children[4]
      .children[0].children;
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    console.log(answer.innerText);
  }
});
