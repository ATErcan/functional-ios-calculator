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
        // If user ever used comma
        if (!display.includes(",")) {
          // Display length limit
          if (display.length < 11) {
            if (display.length === 3) {
              display.splice(3, 0, ".");
            } else if (display.length === 7) {
              display.splice(7, 0, ".");
            }
            display.push(e.target.innerText);
            currentDisplay.innerText = display.join("");
            document.querySelector(".delete").innerText = "C";
            console.log(display[-1]);
          }
        }
        // If user haven't used comma
        else {
          // Display length limit
          if (display.length < 9) {
            display.push(e.target.innerText);
            currentDisplay.innerText = display.join("");
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
    currentDisplay.innerText = "0";
    document.querySelector(".delete").innerText = "AC";
    display = [];
    console.log(display);
  }
  // If user clicks to comma
  else if (e.target.classList.contains("comma")) {
    // If user clicks to comma while display shows 0
    if (currentDisplay.innerText === "0") {
      display.push("0", e.target.innerText);
      currentDisplay.innerText = display.join("");
    }
    // If user clicks to comma and display has no comma in it
    else if (!display.includes(",")) {
      display.push(e.target.innerText);
      currentDisplay.innerText = display.join("");
    }
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
