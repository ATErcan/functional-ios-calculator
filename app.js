const app = document.querySelector(".app");
const currentDisplay = document.querySelector(".current-display");
const deleteAll = document.querySelector(".delete");
const numbers = document.querySelectorAll(".numbers");

let storage = [];
let numberEntered = false;
let newNumberEntry = false;

// The function that runs when the user clicks to a number.
const numberClick = (number) => {
  if (!newNumberEntry) {
    if (
      currentDisplay.innerText.split(".").join("").split(",").join("").split("")
        .length < 9
    ) {
      if (currentDisplay.innerText === "0" && number.innerText === "0") {
      } else if (currentDisplay.innerText === "0") {
        currentDisplay.innerText = "";
        currentDisplay.innerText = number.innerText;
        deleteAll.innerText = "C";
      } else {
        currentDisplay.innerText += number.innerText;
        deleteAll.innerText = "C";
      }
    }
  } else {
    currentDisplay.innerText = number.innerText;
    newNumberEntry = false;
  }
};

// The clear function
const clear = () => {
  currentDisplay.innerText = "0";
  deleteAll.innerText = "AC";
  numberEntered = false;
  newNumberEntry = false;
  storage = [];
};

// The function that runs when the user clicks to the comma.
const commaClick = (comma) => {
  if (currentDisplay.innerText === "0") {
    currentDisplay.innerText = "0,";
  } else if (
    currentDisplay.innerText.split(".").join("").split("").includes(",")
  ) {
  } else {
    currentDisplay.innerText += comma.innerText;
  }
};

// Function to change the sign of the number.
const changeSign = () => {
  const changed = parseFloat(
    Number(currentDisplay.innerText.split(".").join("").replace(",", ".")) * -1
  );
  currentDisplay.innerText = changed.toString().replace(".", ",");
};

// Function to calculate percentage of the number
const percent = () => {
  const percentageValue =
    Number(currentDisplay.innerText.split(".").join("").replace(",", ".")) /
    100;

  if (
    percentageValue.toString().split(".").join("").split(",").join("").split("")
      .length < 10
  ) {
    currentDisplay.innerText = percentageValue.toString().replace(".", ",");
  } else {
    alert("Number of values that can be entered exceeded");
  }
};

// Calculator event with capturing
app.addEventListener("click", (e) => {
  // If user clicks to a number
  if (e.target.classList.contains("numbers")) {
    numberClick(e.target);
    numberEntered = true;
  }
  // Delete function
  else if (e.target.classList.contains("delete")) {
    clear();
  }
  // If user clicks to comma
  else if (e.target.classList.contains("comma")) {
    commaClick(e.target);
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
    // Storage is empty but no number is entered
    if (storage.length === 0 && !numberEntered) {
    }
    // Storage is empty and some number entered
    else if (storage.length === 0 && numberEntered) {
      storage.push(
        Number(currentDisplay.innerText.split(".").join("").replace(",", "."))
      );
      storage.push(e.target.innerText);
      numberEntered = false;
      newNumberEntry = true;
    }
    // Storage is not empty, but user wants to change the operator
    else if (storage.length !== 0 && !numberEntered) {
      storage.pop();
      storage.push(e.target.innerText);
      newNumberEntry = true;
    }
    // Storage is not empty but user wants to add more operation
    else if (storage.length !== 0 && numberEntered) {
      storage.push(
        Number(currentDisplay.innerText.split(".").join("").replace(",", "."))
      );
      storage.push(e.target.innerText);
      numberEntered = false;
      newNumberEntry = true;
    }
  }
  // If user clicks to equals
  else if (e.target.matches(".equals")) {
    if (storage.length === 0 && !numberEntered) {
    } else if (storage.length === 0 && numberEntered) {
    } else if (storage.length !== 0 && !numberEntered) {
      storage.push(
        Number(currentDisplay.innerText.split(".").join("").replace(",", "."))
      );
      operations();
      newNumberEntry = true;
    } else if (storage.length !== 0 && numberEntered) {
      storage.push(
        Number(currentDisplay.innerText.split(".").join("").replace(",", "."))
      );
      numberEntered = false;
      operations();
      newNumberEntry = true;
    }
  }
});

/* const numberWriting = (screen) => {
  const displayArray = screen.innerText.split(".").join("").split("");
  if (displayArray.includes(",")) {
    const indexOfComma = displayArray.indexOf(",");
    const afterComma = displayArray.splice(
      indexOfComma,
      displayArray.length - indexOfComma
    );
    console.log(afterComma);
    console.log(displayArray);
    if (displayArray.length > 5 && displayArray.length < 9) {
      displayArray.splice(displayArray.length - 3, 0, ".");
      displayArray.splice(displayArray.length - 7, 0, ".");
      screen.innerText = displayArray.join("").concat(afterComma.join(""));
    } else if (displayArray.length > 2 && displayArray.length < 9) {
      displayArray.splice(displayArray.length - 3, 0, ".");
      screen.innerText = displayArray.join("").concat(afterComma.join(""));
    }
  } else {
    if (displayArray.length > 5 && displayArray.length < 9) {
      displayArray.splice(displayArray.length - 2, 0, ".");
      displayArray.splice(displayArray.length - 6, 0, ".");
      screen.innerText = displayArray.join("");
    } else if (displayArray.length > 2 && displayArray.length < 9) {
      displayArray.splice(displayArray.length - 2, 0, ".");
      screen.innerText = displayArray.join("");
    }
  }
  // currentDisplay.innerText.split(".").join("").split(",").join("").split("");
}; */

/* let display = [];
  let result = [];
   */

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
const operations = () => {
  storage.forEach((item, i) => {
    if (item === "×") {
      storage[i + 1] = storage[i - 1] * storage[i + 1];
    } else if (item === "÷") {
      storage[i + 1] = storage[i - 1] / storage[i + 1];
    } else if (item === "+") {
      storage[i + 1] = storage[i + 1] + storage[i - 1];
    } else if (item === "−") {
      storage[i + 1] = storage[i - 1] - storage[i + 1];
    }
  });
  currentDisplay.innerText = storage[storage.length - 1]
    .toString()
    .replace(".", ",");
};
// console.log(storage);

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
