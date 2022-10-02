//Create empty array to push numbers into

// have button push the correct number (i.e press 5 and 5 displays).

// switch case for buttons pressed rather than if statement?

//display needs to update in real time depending on the button pressed.

// button should also push operators? how to seperate the operator and number in an array?
const displayScreenTotal = document.querySelector(".show_screen");

const displayScreenArray = [];

let tempVal;
let displayScreenVal = "0";
// let BtnNumber = document.querySelector(".main__btnNumber");
let BtnNumber = document.getElementsByClassName("main__btnNumber");
let operatorBtn = document.getElementsByClassName("main__operatorBtn");

// const test = () => {
//   console.log("button has been clicked");
// };

let screenUpdater = (test) => {
  console.log("This is current number button clicked " + test.target.innerText);
  let numberPressed = test.target.innerText;

  if (displayScreenVal === "0") {
    // console.log("checks if first number is 0. If so no 0 values will be shown");
    displayScreenVal = "";
  } else {
    displayScreenVal += numberPressed;
    displayScreenTotal.innerText = displayScreenVal;
    // console.log("This is the current screen value" + displayScreenVal);
  }
};

for (let i = 0; i < BtnNumber.length; i++) {
  console.log("test");
  BtnNumber[i].addEventListener("click", screenUpdater, false);
}

let performOperation = (clickObj) => {
  let operator = clickObj.target.innerText;
  console.log(operator);

  switch (operator) {
    case "+":
      tempVal = displayScreenVal;
      displayScreenVal = "0";
      displayScreenTotal.innerText = displayScreenVal;
      displayScreenArray.push(tempVal);
      console.log("pending val is " + tempVal);
      displayScreenArray.push("+");
      console.log("plus button has been clicked " + displayScreenArray);

    default:
      console.log("default case has been reached");
      break;
  }
};

for (let i = 0; i < operatorBtn.length; i++) {
  console.log("op button");
  operatorBtn[i].addEventListener("click", performOperation, false);
}
/*





*/

// const screen = document.querySelector(".show_screen");

// const number_0 = document.querySelector("#number-0");
// const number_1 = document.querySelector("#number-1");

// let numberSelected;

// console.log(number_0);

// const addNumberFunction = (event) => {
//
// alert("button 0 has been pressed");

//   displayScreenArray.push(Number(number_0.textContent));
//   console.log(displayScreenArray);
//   screen.innerText = displayScreenArray;

//   screenUpdater();
// };

// const screenUpdater = () => {
//   screen.innerText = displayScreenArray;
// };

// number_0.addEventListener("click", addNumberFunction);
// number_1.addEventListener("click", addNumberFunction);

// screen.textContent = "test change screen";

// screen.addEventListener("change", screenUpdater);

// console.log(screen.innerText);
