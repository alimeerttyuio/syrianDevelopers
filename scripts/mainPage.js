import pageloader from "./pageloader.js";
export default async function showMainPage() {
  await pageloader.getPage(pageloader.pages.mainpage);

  let lastProjectsContainer = document.querySelector(
    "#product-area > :first-child"
  );

  let projects = [];
  let projectIndex;
  for (projectIndex = 0; projectIndex < 10; projectIndex++) {
    let project = document.createElement("div");
    lastProjectsContainer.appendChild(project);
    project.innerText = projectIndex;
    project.style.right =
      projectIndex * (project.getBoundingClientRect().width + 20) + "px";
    projects.push(project);
  }
  let transformValue = "100";
  function setTransform(transformValue) {
    projects.forEach((e) => {
      e.style.transform = `translateX(${transformValue}%)`;
      if (
        e.getBoundingClientRect().right >
        e.parentNode.getBoundingClientRect().width * 1.5
      ) {
        e.style.right =
          projectIndex * (e.getBoundingClientRect().width + 20) + "px";
        projectIndex += 1;
      }
    });
  }
  let transformIndex = 0;
  let lastProjectMover;
  function startMovingRight() {
    lastProjectMover = setInterval(() => {
      transformIndex += 1;
      setTransform(transformValue * transformIndex);
    }, 4000);
  }
  startMovingRight();
  document
    .querySelector("#product-area > .right-arrow")
    .addEventListener("click", () => {
      clearInterval(lastProjectMover);
      transformIndex += 1;
      setTransform(transformValue * transformIndex);
      startMovingRight();
    });
  document
    .querySelector("#product-area > .left-arrow")
    .addEventListener("click", () => {
      clearInterval(lastProjectMover);
      transformIndex -= 1;
      setTransform(transformValue * transformIndex);
      startMovingRight();
    });
  document.querySelectorAll("aside li").forEach((li) => {
    li.style.display = "block";
  });
  document.querySelector("aside #main-button").style.display = "none";
}
