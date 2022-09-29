//Create empty array to push numbers into

// have button push the correct number (i.e press 5 and 5 displays).

// switch case for buttons pressed rather than if statement?

//display needs to update in real time depending on the button pressed.

// button should also push operators? how to seperate the operator and number in an array?

const displayScreenArray = [];

const number_0 = document.querySelector("#number-0");

console.log(number_0);

const addNumberFunction = (event) => {
  alert("button 0 has been pressed");
};

number_0.addEventListener("click", addNumberFunction);
