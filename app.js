const app = document.querySelector(".app");
const currentDisplay = document.querySelector(".current-display");

const numbers = document.querySelectorAll(".numbers");

const numberArray = [];
numbers.forEach((item) => {
  numberArray.push(item.innerText);
});
console.log(numberArray);

let display = [];
let result = [];

let sign = true;
const changeSign = () => {
  if (currentDisplay.innerText === "0") {
  } else {
    if (sign) {
      display.unshift("-");
      currentDisplay.innerText = Number(display.join("")).toLocaleString(
        "de-DE"
      );
      sign = false;
    } else {
      display.shift();
      currentDisplay.innerText = Number(display.join("")).toLocaleString(
        "de-DE"
      );
      sign = true;
    }
  }
};

const percent = () => {
  const percentageValue = parseFloat(Number(currentDisplay.innerText) / 100);
  if (percentageValue.toString().split("").length < 10) {
    currentDisplay.innerText = percentageValue;
  } else {
    alert("Number of values that can be entered exceeded");
  }
};

const clear = () => {
  currentDisplay.innerText = "0";
  document.querySelector(".delete").innerText = "AC";
  display = [];
  sign = true;
};

app.addEventListener("click", (e) => {
  // If user clicks to a number
  if (e.target.classList.contains("numbers")) {
    // If user clicks to 0 while the display already shows 0
    if (currentDisplay.innerText === "0" && e.target.innerText === "0") {
    } else {
      // If user clicks to a number other than 0 while display shows 0
      if (currentDisplay.innerText === "0") {
        currentDisplay.innerText = "";
        display.push(e.target.innerText);
        currentDisplay.innerText = display.join("");
        document.querySelector(".delete").innerText = "C";
      }
      // If user clicks to any number while display is not 0
      else {
        if (display.includes("-")) {
          // Display length limit
          if (display.length < 10) {
            display.push(e.target.innerText);
            currentDisplay.innerText = currentDisplay.innerText = Number(
              display.join("")
            ).toLocaleString("de-DE");
            document.querySelector(".delete").innerText = "C";
          }
        } else {
          // Display length limit
          if (display.length < 9) {
            display.push(e.target.innerText);
            currentDisplay.innerText = currentDisplay.innerText = Number(
              display.join("")
            ).toLocaleString("de-DE");
            document.querySelector(".delete").innerText = "C";
          }
        }
      }
    }
    console.log(display);
    // console.log(e.target.innerText);
  }
  // Delete function
  else if (e.target.classList.contains("delete")) {
    clear();
  }
  // If user clicks to comma
  else if (e.target.classList.contains("comma")) {
    // If user clicks to comma while display shows 0
    if (currentDisplay.innerText === "0") {
      display.push(0, ".");
      currentDisplay.innerText = "0,";
    }
    // If user clicks to comma and display has no comma in it
    else if (!display.includes(".")) {
      display.push(".");
      currentDisplay.innerText = Number(display.join("")).toLocaleString(
        "de-DE"
      );
    } else {
      currentDisplay.innerText = Number(display.join("")).toLocaleString(
        "de-DE"
      );
    }
  }
  // Change sign
  else if (e.target.classList.contains("sign")) {
    changeSign();
  }
  // Percentage
  else if (e.target.classList.contains("percent")) {
    percent();
  }
  // If user clicks to any function
  else if (e.target.classList.contains("function")) {
    // Push the number to result array if display is not 0
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

/* function numberWithCommas(x) {
  let parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(",");
} */
