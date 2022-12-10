const input = document.querySelector("#inputYear")
const btnCheck = document.querySelector("#check");
const outputBox = document.querySelector("#output");

console.log(input, btnCheck, outputBox);

function checkHandler() {

  let year = input.value;
  if (year.length === 4) {
    if (year % 400 === 0) {
      outputBox.innerText = `Yeyyy!💥 ${year} is a leap year, You born in leap year🚀`;
      outputBox.style.color = "green";
    }
    else if (year % 4 === 0) {
      outputBox.innerText = `Yeyyy!💥 ${year} is a leap year, You born in leap year🚀`;
      outputBox.style.color = "green"
    }
    else if (year % 100 === 0) {
      outputBox.innerText = `ohhh😟 ${year} is not a leap year`;
      outputBox.style.color = "black";
    }

    else {
      outputBox.innerText = `ohhh😟 ${year} is not a leap year`;
      outputBox.style.color = "black";
    }
  }
  else {
    outputBox.innerText = `${year} is not a valid year. Plzz Enter Valid year to check.`;
    outputBox.style.color = "red"
  }


}

btnCheck.addEventListener("click", checkHandler);

