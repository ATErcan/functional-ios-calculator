const app = document.querySelector(".app");
const currentDisplay = document.querySelector(".current-display");

const numbers = document.querySelectorAll(".numbers");

const numberArray = [];
numbers.forEach((item) => {
  numberArray.push(item.innerText);
});
console.log(numberArray);

let display = [];
const result = [];

app.addEventListener("click", (e) => {
  if (e.target.classList.contains("numbers")) {
    if (currentDisplay.innerText === "0" && e.target.innerText === "0") {
    } else {
      if (currentDisplay.innerText === "0") {
        currentDisplay.innerText = "";
        display.push(e.target.innerText);
        currentDisplay.innerText = display.join("");
        document.querySelector(".delete").innerText = "C";
      } else {
        if (display.length < 11) {
          if (display.length === 3) {
            display.splice(3, 0, ".");
          } else if (display.length === 7) {
            display.splice(7, 0, ".");
          }
          display.push(e.target.innerText);
          currentDisplay.innerText = display.join("");
          document.querySelector(".delete").innerText = "C";
        }
      }
    }
    console.log(display);
    // console.log(e.target.innerText);
  } else if (e.target.classList.contains("delete")) {
    currentDisplay.innerText = "0";
    document.querySelector(".delete").innerText = "AC";
    display = [];
    console.log(display);
  } else if (e.target.classList.contains("function")) {
    if (currentDisplay.innerText !== "0") {
      result.push(Number(currentDisplay.innerText));
      result.push(e.target.innerText);
      if (e.target.classList.contains("numbers")) {
        currentDisplay.innerText = "";
        currentDisplay.innerText += e.target.innerText;
      }
    }
    console.log(result);
  }
});
