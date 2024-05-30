const button = document.querySelector("#button");
const input = document.querySelector("#input");
const textResult = document.querySelector("#text-result");
const attamp = document.querySelector("#attemps");
const record = document.querySelector("#record");
const body = document.querySelector("body");
const refresh = document.querySelector("#refresh");
const img = document.querySelector("#img");
console.log(img.textContent);
// console.log(attamp.textContent);

let attampNum = Number(attamp.textContent);
let recordres = Number(record.textContent);

let ranNum = Math.floor(Math.random() * 20 + 1);
console.log(ranNum);
let chack = () => {
  if (input.value) {
    if (input.value > ranNum) {
      textResult.classList.add("error-text");
      textResult.textContent = "number is high";
      attampNum--;
      attamp.textContent = attampNum;
    } else if (input.value < ranNum) {
      textResult.classList.add("error-text");
      textResult.textContent = "number is low";
      attampNum--;
      attamp.textContent = attampNum;
    } else if (input.value == ranNum) {
      textResult.textContent = "you are winner";
      if (attampNum > recordres) {
        record.textContent = attampNum;
        input.disabled = true;
        body.classList.add("bg-green-500");
      }
      textResult.classList.remove("error-text");
      textResult.classList.add("succ-text");
    }
    if (attampNum == 0) {
      input.disabled = true;
      textResult.textContent = "you are lose";
      body.classList.add("bg-red-700");
      img.textContent = ranNum;
    }
    input.value = "";
  } else {
  }
};

let again = () => {
  textResult.textContent = "Start Game";
  attamp.textContent = 5;
  textResult.classList.remove("succ-text");
  textResult.classList.remove("error-text");
  input.disabled = false;
  attampNum = 5;
  let ranAgainNum = Math.floor(Math.random() * 20 + 1);
  ranNum = ranAgainNum;
  console.log(ranAgainNum, ranNum);
  body.classList.remove("bg-red-700");
  body.classList.remove("bg-green-500");
  img.innerHTML = ` <img
  src="./question-mark-2994534_1280.webp "
  alt=""
  class="w-24 h-24"
/>`;
};

button.addEventListener("click", chack);
refresh.addEventListener("click", again);
