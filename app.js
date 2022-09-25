const app = document.querySelector(".app");
const currentDisplay = document.querySelector(".current-display");

const numbers = document.querySelectorAll(".numbers");

const numberArray = [];
numbers.forEach((item) => {
  numberArray.push(item.innerText);
});
console.log(numberArray);

const result = [];

app.addEventListener("click", (e) => {
  if (e.target.classList.contains("numbers")) {
    if (currentDisplay.innerText === "0" && e.target.innerText === "0") {
    } else {
      if (currentDisplay.innerText === "0") {
        currentDisplay.innerText = "";
        currentDisplay.innerText = e.target.innerText;
        document.querySelector(".delete").innerText = "C";
      } else {
        currentDisplay.innerText += e.target.innerText;
        document.querySelector(".delete").innerText = "C";
      }
    }
    // console.log(e.target.innerText);
  } else if (e.target.classList.contains("delete")) {
    currentDisplay.innerText = "0";
    document.querySelector(".delete").innerText = "AC";
  }
  // else if (e.target.classList.contains("sign")){
  //   currentDisplay =
  // }
});
