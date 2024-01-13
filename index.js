document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.getElementsByClassName("box");
  for (let index = 0; index < boxes.length; index++) {
    const element = boxes[index];
    const front = document.createElement("div");
    front.className = "box-front";

    const back = document.createElement("div");
    back.className = "box-back";

    const top = document.createElement("div");
    top.className = "box-top";

    const left = document.createElement("div");
    left.className = "box-left";

    const bottom = document.createElement("div");
    bottom.className = "box-bottom";

    const right = document.createElement("div");
    right.className = "box-right";

    element.appendChild(front);
    element.appendChild(back);
    element.appendChild(top);
    element.appendChild(left);
    element.appendChild(bottom);
    element.appendChild(right);
  }
});
