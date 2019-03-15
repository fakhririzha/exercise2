var d = document;
var currentInput = "";
var resultGenerated = false;

var inputBox = d.getElementById("user-input"),
  numberInput = Array.from(d.getElementsByClassName("number")),
  operatorInput = Array.from(d.getElementsByClassName("operator")),
  test = d.getElementById("test");

numberInput.forEach(item => {
  item.addEventListener('click', () => {

    currentInput += item.childNodes[0].innerHTML;
    inputBox.innerText = "" + currentInput;

  });
});

operatorInput.forEach(item => {
  item.addEventListener('click', () => {

    currentInput += item.childNodes[0].innerHTML;
    inputBox.innerText = "" + currentInput;

  });
})

document.addEventListener("keydown", (event) => {
  var k = event.key;
  if (k == "Backspace") {

    currentInput = currentInput.substr(0, currentInput.length - 1);
    if (currentInput.length == 0) {
      currentInput = "0";
    }
    inputBox.innerText = "" + currentInput;

  }
  else if (Number.isInteger(parseInt(k))) {

    if (!resultGenerated) {

      if (currentInput == "0") {

        numberKey = parseInt(k);
        currentInput = "";
        currentInput = currentInput + numberKey.toString();
        inputBox.innerText = "" + currentInput;

      } else {

        numberKey = parseInt(k);
        currentInput = currentInput + numberKey.toString();
        inputBox.innerText = "" + currentInput;

      }
    } else {
      resultGenerated = false;
      currentInput = "";
      numberKey = parseInt(k);
      currentInput = currentInput + numberKey.toString();
      inputBox.innerText = "" + currentInput;
    }

  } else if (k == "Delete") {

    currentInput = "0";
    inputBox.innerText = "" + currentInput;

  } else if (k == "+") {

    currentInput = currentInput + k.toString();
    inputBox.innerText = "" + currentInput;

  } else if (k == "-") {

    currentInput = currentInput + k.toString();
    inputBox.innerText = "" + currentInput;

  } else if (k == "*") {

    currentInput = currentInput + k.toString();
    inputBox.innerText = "" + currentInput;

  } else if (k == "/") {

    currentInput = currentInput + k.toString();
    inputBox.innerText = "" + currentInput;

  } else if (k == "Enter") {

    generateHasil(currentInput);

  }

  else if (k == "Shift") {

    // DO NOTHING

  }
});


function generateHasil(input) {

  var i,
    firstNum = 0,
    secondNum = 0,
    operator = "",
    operatorIndex = 0;
  if (input[0] == "0") {
    input = input.substr(1);
  }
  var arrInput = Array.from(input);

  for (i = 0; i < arrInput.length; i++) {

    char = arrInput[i];
    if (!Number.isInteger(parseInt(arrInput[i]))) {
      operatorIndex = arrInput.indexOf(char);
    }

  }

  firstNum = input.substr(0, input.length - operatorIndex);
  secondNum = input.substr(operatorIndex + 1);
  operator = input[operatorIndex];

  if (operator == "+") {

    currentInput = parseInt(firstNum) + parseInt(secondNum);
    currentInput = currentInput.toString();
    inputBox.innerText = "" + currentInput;

  } else if (operator == "-") {

    currentInput = parseInt(firstNum) - parseInt(secondNum);
    currentInput = currentInput.toString();
    inputBox.innerText = "" + currentInput;


  } else if (operator == "*") {

    currentInput = parseInt(firstNum) * parseInt(secondNum);
    currentInput = currentInput.toString();
    inputBox.innerText = "" + currentInput;


  } else if (operator == "/") {

    currentInput = parseInt(firstNum) / parseInt(secondNum);
    currentInput = currentInput.toString();
    inputBox.innerText = "" + currentInput;

  }

  resultGenerated = true;
}
