const app = document.querySelector(".app");
const currentDisplay = document.querySelector(".current-display");
const deleteAll = document.querySelector(".delete");

const numbers = document.querySelectorAll(".numbers");

let display = [];
let storage = [];
let result = [];

const numberClick = (number) => {
  if (currentDisplay.innerText === "0" && number.innerText === "0") {
  } else if (currentDisplay.innerText === "0") {
    currentDisplay.innerText = "";
    currentDisplay.innerText = number.innerText;
    deleteAll.innerText = "C";
  } else {
    currentDisplay.innerText += number.innerText;
    deleteAll.innerText = "C";
  }
};

const clear = () => {
  currentDisplay.innerText = "0";
  deleteAll.innerText = "AC";
};

const commaClick = (comma) => {
  if (currentDisplay.innerText === "0") {
    currentDisplay.innerText = "0,";
  } else if (currentDisplay.split(".").join("").split("").includes(",")) {
  } else {
    currentDisplay.innerText += comma.innerText;
  }
};

const changeSign = () => {
  currentDisplay.innerText = parseFloat(
    Number(currentDisplay.split(".").join("").replace(",", ".")) * -1
  );
};

const percent = () => {
  const percentageValue =
    Number(currentDisplay.split(".").join("").replace(",", ".")) / 100;
};

/* const clear = () => {
  currentDisplay.innerText = "0";
  deleteAll.innerText = "AC";
  display = [];
  storage = [];
  result = [];
  sign = true;
}; */

/*
let sign = true;
const changeSign = () => {
  if (currentDisplay.innerText === "0") {
  } else {
    currentDisplay.innerText = -currentDisplay.innerText;
    /*     if (sign) {
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
    } sdasdas
  }
};
*/

/* const percent = () => {
  display = currentDisplay.innerText.split("");
  console.log(display);
  const percentageValue = parseFloat(Number(display.join("")) / 100);
  
  if (percentageValue.toString().split("").length < 10) {
    currentDisplay.innerText = percentageValue;
  } else {
    alert("Number of values that can be entered exceeded");
  }
}; */

console.log(document.querySelector(".plus").innerText);
console.log(document.querySelector(".minus").innerText);
console.log(document.querySelector(".divide").innerText);
const operations = (btn) => {
  storage.forEach((item, i) => {
    if (item === "") {
      storage[i + 1] = storage[i - 1] * storage[i + 1];
      result.push(storage[i + 1]);
    } else if (item === "÷") {
      storage[i + 1] = storage[i + 1] / storage[i - 1];
      result.push(storage[i + 1]);
    } else if (item === "+") {
      storage[i + 1] = storage[i + 1] + storage[i - 1];
      result.push(storage[i + 1]);
    } else if (item === "−") {
      storage[i + 1] = storage[i + 1] - storage[i - 1];
      result.push(storage[i + 1]);
    }
  });
};
console.log(storage);
app.addEventListener("click", (e) => {
  // If user clicks to a number

  if (e.target.classList.contains("numbers")) {
    // If user clicks to 0 while the display already shows 0
    if (currentDisplay.innerText === "0" && e.target.innerText === "0") {
    } else {
      // If user clicks to a number other than 0 while display shows 0
      if (currentDisplay.innerText === "0") {
        if (storage.length === 0) {
          currentDisplay.innerText = "";
          display.push(e.target.innerText);
          currentDisplay.innerText = display.join("");
          document.querySelector(".delete").innerText = "C";
          console.log(display);
        } else {
          display = [];
          currentDisplay.innerText = "";
          display.push(e.target.innerText);
          currentDisplay.innerText = display.join("");
          document.querySelector(".delete").innerText = "C";
        }
      }
      // If user clicks to any number while display is not 0
      else {
        if (storage.length === 0) {
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
        } else {
          console.log(display);
          console.log(storage);
          display = [];
          currentDisplay.innerText = "";
          display.push(e.target.innerText);
          currentDisplay.innerText = display.join("");
          document.querySelector(".delete").innerText = "C";
          console.log(display);
        }
      }
    }
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
    } else if (currentDisplay.innerText === "0,") {
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
    storage.push(
      Number(currentDisplay.innerText.split(".").join("").replace(",", "."))
    );
    storage.push(e.target.innerText);
    if (storage.length > 2) {
      if (e.target.classList.contains("mult")) {
        operations(e.target);
      }
    }
  } else if (e.target.matches(".equals")) {
    console.log(result);
    console.log(storage);
    storage.push(
      Number(currentDisplay.innerText.split(".").join("").replace(",", "."))
    );
    operations();
    if (result.length === 0) {
    } else {
      currentDisplay.innerText = result.join("").toLocaleString("de-DE");
    }
  }
});

/* function numberWithCommas(x) {
  let parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(",");
} */

// Number(currentDisplay.innerText.split(".").join("").replace(",", "."));

/* switch(operator.innerText){
  case ×: 
  case ÷:
  case +:
  case −: 
} */
