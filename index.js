const input = document.querySelector("#inputYear")
const btnCheck = document.querySelector("#check");
const outputBox = document.querySelector("#output");

// console.log(input, btnCheck, outputBox);

function checkHandler() {

  if (input.value.length === 4) {
    let year = input.value;
    if (year % 400 === 0) {
      outputBox.innerText = `Yeyyy!💥 ${year} is a leap year, You born in leap year🚀`;
      outputBox.style.color = "#00ff5d";
    }
    else if (year % 4 === 0) {
      outputBox.innerText = `Yeyyy!💥 ${year} is a leap year, You born in leap year🚀`;
      outputBox.style.color = "#00ff5d"
    }
    else if (year % 100 === 0) {
      outputBox.innerText = `ohhh!😟 ${year} is not a leap year☹`;
      outputBox.style.color = "#fda4af";
    }

    else {
      outputBox.innerText = `ohhh😟 ${year} is not a leap year`;
      outputBox.style.color = "#fda4af";
    }
  }
  else {
    outputBox.style.color = "red"
    outputBox.innerText = `You entered Unvalid year. Plzz Enter Valid year to check.`;
  }


}

btnCheck.addEventListener("click", checkHandler);

