//Create empty array to push numbers into

// have button push the correct number (i.e press 5 and 5 displays).

// switch case for buttons pressed rather than if statement?

//display needs to update in real time depending on the button pressed.

// button should also push operators? how to seperate the operator and number in an array?

const displayScreenArray = [];
const screen = document.querySelector(".show_screen");

const number_0 = document.querySelector("#number-0");
const number_1 = document.querySelector("#number-1");

let numberSelected;

// console.log(number_0);

const addNumberFunction = (event) => {
  //
  // alert("button 0 has been pressed");

  displayScreenArray.push(Number(number_0.textContent));
  console.log(displayScreenArray);
  screen.innerText = displayScreenArray;

  updateScreen();
};

const updateScreen = () => {
  screen.innerText = displayScreenArray;
};



number_0.addEventListener("click", addNumberFunction);
number_1.addEventListener("click", addNumberFunction);

// screen.textContent = "test change screen";

// screen.addEventListener("change", updateScreen);

console.log(screen.innerText);
