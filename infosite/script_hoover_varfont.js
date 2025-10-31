const textElement1 = document.querySelector(".text-1");
const textElement2 = document.querySelector(".text-2");
const textElement3 = document.querySelector(".text-3");
const textElement4 = document.querySelector(".text-4");

let pointerX;
let pointerY;
let textSpan;

window.onresize = (e) => {
  setFontWeight();
};

window.onload = () => {
  setText(textElement1);
  setText(textElement2);
  setText(textElement3);
  setText(textElement4);
};

document.onmousemove = function (event) {
  pointerX = event.clientX;
  pointerY = event.clientY;
  setFontWeight();
};

function setText(element) {
  let t = element.innerHTML;
  element.innerHTML = "";
  t.split("").map((x) => {
    let charElement = document.createElement("span");
    charElement.classList.add("vf-char");
    let charNode = document.createTextNode(x);
    charElement.appendChild(charNode);
    t = element.appendChild(charElement);
  });
  textSpan = document.querySelectorAll(".vf-char");
}

function setFontWeight() {
  textSpan.forEach((element) => {
    let position = element.getBoundingClientRect();

    let distance = Math.ceil(
      Math.sqrt((position.x - pointerX) ** 2 + (position.y - pointerY) ** 2) * 2
    );
    if (distance > 580) { distance = 580 };
    if (distance < 300) { distance = 300 };
    element.setAttribute(
      "style",
      `font-variation-settings: 'wght' ${distance}, 'wdth' 58;`
    );
  });
}
