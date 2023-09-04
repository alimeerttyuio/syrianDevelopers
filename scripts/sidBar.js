import pagLoader from "./pageloader.js";
let asideButtons = document.querySelectorAll("aside li");
export default function prepearSidbarButton() {
  let sidbarButton = document.querySelector(".sidBar-button");
  sidbarButton.addEventListener("click", (e) => {
    document.querySelector("aside").toggleAttribute("opend");
    sidbarButton.toggleAttribute("opend");
  });
  let naelButton = document.querySelector("aside #nael-button button");

  naelButton.addEventListener("click", (e) => {
    Array.from(asideButtons).forEach((li) => {
      li.style.display = "block";
    });
    document.querySelector("aside #nael-button").style.display = "none";
    pagLoader.getPage(pagLoader.pages.naelMainPage);
  });
  let hussainButton = document.querySelector("aside #hussain-button button");

  hussainButton.addEventListener("click", (e) => {
    Array.from(asideButtons).forEach((li) => {
      li.style.display = "block";
    });
    document.querySelector("aside #hussain-button").style.display = "none";
    pagLoader.getPage(pagLoader.pages.hussainMainPage);
  });
  let karamButton = document.querySelector("aside #nael-button button");

  karamButton.addEventListener("click", (e) => {
    Array.from(asideButtons).forEach((li) => {
      li.style.display = "block";
    });
    document.querySelector("aside #karam-button").style.display = "none";
    pagLoader.getPage(pagLoader.pages.karamMainPage);
  });
  let mainButton = document.querySelector("aside #main-button button");

  mainButton.addEventListener("click", () => {
    Array.from(asideButtons).forEach((li) => {
      li.style.display = "block";
    });
    document.querySelector("aside #main-button").style.display = "none";
    pagLoader.getPage(pagLoader.pages.mainpage);
  });
}
