function handleBox() {
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
}

function handleCoin() {
  const coins = document.getElementsByClassName("coin");
  for (let index = 0; index < coins.length; index++) {
    const element = coins[index];
    const front = document.createElement("div");
    front.className = "coin-front";

    const back = document.createElement("div");
    back.className = "coin-back";

    const mid_1 = document.createElement("div");
    mid_1.className = "coin-mid-1";
    const mid_2 = document.createElement("div");
    mid_2.className = "coin-mid-2";
    const mid_3 = document.createElement("div");
    mid_3.className = "coin-mid-3";

    element.appendChild(front);
    element.appendChild(back);
    element.appendChild(mid_1);
    element.appendChild(mid_2);
    element.appendChild(mid_3);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  handleBox();
  // handleCoin();
});
