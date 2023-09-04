let pagLoader = {
  pages: {
    mainpage: { path: "/pages/mainPage.html", content: null },
    naelMainPage: { path: "/pages/nael/main.html", content: null },
    hussainMainPage: { path: "/pages/hussain/main.html", content: null },
    karamMainPage: { path: "/pages/karam/main.html", content: null },
  },
  mainCountainer: document.querySelector(".main"),
  getPage: async function (page) {
    if (page.content === null) {
      await fetch(window.location.origin + page.path)
        .then((res) => res.text())
        .then((mainHtml) => {
          let parser = new DOMParser();

          let elements = parser.parseFromString(mainHtml, "text/html").body
            .children;
          page.content = Array.from(elements);
        })
        .catch((error) => console.error(error));
    }

    this.mainCountainer.innerHTML = "";
    page.content.forEach((e) => {
      this.mainCountainer.appendChild(e);
    });
  },
};
export default pagLoader;
