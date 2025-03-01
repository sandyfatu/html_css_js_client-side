const img = document.querySelector("img");
const para = document.querySelector(".para");

img.addEventListener("click", () => {
  const imgSrc = img.getAttribute("src");
  if (imgSrc === "image/js-icon_1.jpg") {
    img.setAttribute("src", "image/html-icon_1.png");
    para.textContent = "html icon";
  } else if (imgSrc === "image/html-icon_1.png") {
    img.setAttribute("src", "image/css-icon_1.png");
    para.textContent = "CSS icon";
  } else {
    img.setAttribute("src", "image/js-icon_1.jpg");
    para.textContent = "Javascript icon";
  }
});

//CHANGE BACKGROUND THEMES
const html = document.querySelector("html");
const sele = document.querySelector("select");

const bgChange = (bg, txt) => {
  html.style.background = bg;
  html.style.color = txt;
};

html.addEventListener("change", () => {
  const choice = sele.value;
  switch (choice) {
    case "black":
      bgChange("black", "white");
      break;

    case "white":
      bgChange("white", "black");
      break;
  }
});
