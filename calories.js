

const displayBox = document.getElementsByClassName("numbers")


const calculateBtn = document.querySelector("button")

let result = 0;


function calculateCalories() {
  const ageBox = document.getElementById("age")
  const feetBox = document.getElementById("feet")
  const inchBox = document.getElementById("inch")
  const weightBox = document.getElementById("weight")
  const maleBox = document.getElementById("male")
  const femaleBox = document.getElementById("female")
  const outputBox = document.getElementById("numbers")
  const value1 = document.getElementById("value1")
  const value2 = document.getElementById("value2")
  const value3 = document.getElementById("value3")
  const value4 = document.getElementById("value4")
  let response = 0;
  

  if (maleBox.checked && value1.selected) {
    response = (Math.floor(88.36 + (13.39 * weightBox.value / 2.2) + (4.79 * ((feetBox.value * 30.48) + (inchBox.value * 2.54))) - (5.677 * ageBox.value)))
    result = response * 1.375;
  }

  else if (maleBox.checked && value2.selected) {
    response = (Math.floor(88.36 + (13.39 * weightBox.value / 2.2) + (4.79 * ((feetBox.value * 30.48) + (inchBox.value * 2.54))) - (5.677 * ageBox.value)))
    result = response * 1.55;
  }

  else if (maleBox.checked && value3.selected) {
    response = (Math.floor(88.36 + (13.39 * weightBox.value / 2.2) + (4.79 * ((feetBox.value * 30.48) + (inchBox.value * 2.54))) - (5.677 * ageBox.value)))
    result = response * 1.725;
  }

  else if (maleBox.checked && value4.selected) {
    response = (Math.floor(88.36 + (13.39 * weightBox.value / 2.2) + (4.79 * ((feetBox.value * 30.48) + (inchBox.value * 2.54))) - (5.677 * ageBox.value)))
    result = response * 1.9;
  }



  if (femaleBox.checked && value1.selected) {
    response = (Math.floor(447.59 + (9.247 * weightBox.value / 2.2) + (3.098 * ((feet.value * 30.48) + (inch.value * 2.54))) - (4.330 * ageBox.value)))
    result = response * 1.375;
  }

   else if (femaleBox.checked && value2.selected) {
    response = (Math.floor(447.59 + (9.247 * weightBox.value / 2.2) + (3.098 * ((feet.value * 30.48) + (inch.value * 2.54))) - (4.330 * ageBox.value)))
    result = response * 1.55;
  }

   else if (femaleBox.checked && value3.selected) {
    response = (Math.floor(447.59 + (9.247 * weightBox.value / 2.2) + (3.098 * ((feet.value * 30.48) + (inch.value * 2.54))) - (4.330 * ageBox.value)))
    result = response * 1.725;
  }

  else if (femaleBox.checked && value4.selected) {
    response = (Math.floor(447.59 + (9.247 * weightBox.value / 2.2) + (3.098 * ((feet.value * 30.48) + (inch.value * 2.54))) - (4.330 * ageBox.value)))
    result = response * 1.9;
  }



  outputBox.textContent = Math.round(result);
  // console.log(response)
}

let showButton = document.getElementById("showButton");
let myDiv = document.getElementById("myDiv");
let surPlus = document.getElementById("surplus")


showButton.addEventListener("click", function() {
    
    if (myDiv.style.display === "none") {
        myDiv.style.display = "block";
        surPlus.textContent = Math.round(result + 500);


    } else {
        myDiv.style.display = "none";
    }
});