const app = document.querySelector(".app");
const currentDisplay = document.querySelector(".current-display");
const deleteAll = document.querySelector(".delete");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".function");

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
  numberWriting(currentDisplay);
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

const numberWriting = (screen) => {
  const displayArray = screen.innerText.split(".").join("").split("");
  if (displayArray.includes(",")) {
    if (displayArray.includes("-")) {
      displayArray.join("").split("-").join("").split("");
      const indexOfComma = displayArray.indexOf(",");
      const afterComma = displayArray.splice(
        indexOfComma,
        displayArray.length - indexOfComma
      );

      if (displayArray.length > 7 && displayArray.length < 11) {
        displayArray.splice(displayArray.length - 3, 0, ".");
        displayArray.splice(displayArray.length - 7, 0, ".");
        screen.innerText = displayArray.join("").concat(afterComma.join(""));
      } else if (
        displayArray.join("").split("-").join("").split("").length === 6
      ) {
        displayArray.splice(displayArray.length - 3, 0, ".");
        screen.innerText = displayArray.join("").concat(afterComma.join(""));
      } else if (displayArray.length > 4 && displayArray.length < 9) {
        displayArray.splice(displayArray.length - 3, 0, ".");
        screen.innerText = displayArray.join("").concat(afterComma.join(""));
      } else if (
        displayArray.join("").split("-").join("").split("").length === 3
      ) {
        screen.innerText = displayArray.join("").concat(afterComma.join(""));
      }
    } else {
      const indexOfComma = displayArray.indexOf(",");
      const afterComma = displayArray.splice(
        indexOfComma,
        displayArray.length - indexOfComma
      );
      console.log(afterComma);
      console.log(displayArray);
      if (displayArray.length > 6 && displayArray.length < 9) {
        displayArray.splice(displayArray.length - 3, 0, ".");
        displayArray.splice(displayArray.length - 7, 0, ".");
        screen.innerText = displayArray.join("").concat(afterComma.join(""));
      } else if (displayArray.length > 3 && displayArray.length < 9) {
        displayArray.splice(displayArray.length - 3, 0, ".");
        screen.innerText = displayArray.join("").concat(afterComma.join(""));
      }
    }
  } else {
    if (displayArray.includes("-")) {
      if (displayArray.length > 7 && displayArray.length < 11) {
        displayArray.splice(displayArray.length - 3, 0, ".");
        displayArray.splice(displayArray.length - 7, 0, ".");
        screen.innerText = displayArray.join("");
      } else if (
        displayArray.join("").split("-").join("").split("").length === 6
      ) {
        displayArray.splice(displayArray.length - 3, 0, ".");
        screen.innerText = displayArray.join("");
      } else if (displayArray.length > 4 && displayArray.length < 9) {
        displayArray.splice(displayArray.length - 3, 0, ".");
        screen.innerText = displayArray.join("");
      } else if (
        displayArray.join("").split("-").join("").split("").length === 3
      ) {
        screen.innerText = displayArray.join("");
      }
    } else {
      if (displayArray.length > 6 && displayArray.length < 10) {
        displayArray.splice(displayArray.length - 3, 0, ".");
        displayArray.splice(displayArray.length - 7, 0, ".");
        screen.innerText = displayArray.join("");
      } else if (displayArray.length > 3 && displayArray.length < 9) {
        displayArray.splice(displayArray.length - 3, 0, ".");
        screen.innerText = displayArray.join("");
      }
    }
  }
};

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
  if (storage[storage.length - 1].toString().length < 9) {
    currentDisplay.innerText = storage[storage.length - 1]
      .toString()
      .replace(".", ",");
    numberWriting(currentDisplay);
  } else {
    alert("Number of values that can be entered exceeded");
  }
};

const equals = () => {
  if (storage.length === 0 && !numberEntered) {
  } else if (storage.length === 0 && numberEntered) {
  } else if (storage.length !== 0 && !numberEntered) {
    storage.push(
      Number(currentDisplay.innerText.split(".").join("").replace(",", "."))
    );
    operations();
  } else if (storage.length !== 0 && numberEntered) {
    storage.push(
      Number(currentDisplay.innerText.split(".").join("").replace(",", "."))
    );
    operations();
    newNumberEntry = true;
  }
};

const activeOperator = (btn) => {
  operators.forEach((item) => {
    if (item.classList.contains("function")) {
      if (btn.innerText === item.innerText) {
        item.classList.add("active-operator");
      } else {
        item.classList.remove("active-operator");
      }
    } else {
      item.classList.remove("active-operator");
    }
  });
};

const removeColor = () => {
  operators.forEach((item) => {
    item.classList.remove("active-operator");
  });
};

// Calculator event with capturing
app.addEventListener("click", (e) => {
  activeOperator(e.target);
  // If user clicks to a number
  if (e.target.classList.contains("numbers")) {
    numberClick(e.target);
    numberWriting(currentDisplay);
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
      if (typeof storage[storage.length - 1] !== "number") {
        storage.pop();
      } else {
        storage = [storage[storage.length - 1]];
      }
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
    equals();
  }
});

document.querySelector("body").addEventListener("keydown", handleKeyboardInput);

function handleKeyboardInput(e) {
  if (e.key === "=" || e.key === "Enter") equals();
  if (e.key === "Backspace") {
    clear();
    removeColor();
  }
  if (e.key === "Shift") changeSign();
  if (e.key === "%") percent();
}
