var d = document;
var currentInput = "";
var resultGenerated = false;
var operatorClicked = false;
var btnClicked = false;

var inputBox = d.getElementById("user-input"),
  numberInput = Array.from(d.getElementsByClassName("number")),
  operatorInput = Array.from(d.getElementsByClassName("operator")),
  test = d.getElementById("test");

inputBox.innerHTML = "0";

numberInput.forEach(item => {
  item.addEventListener('click', () => {
    if (currentInput == "0") {
      currentInput = "";
    }
    currentInput += item.childNodes[0].innerHTML;
    inputBox.innerHTML = "" + currentInput;
    btnClicked = true;

  });
});

operatorInput.forEach(item => {
  item.addEventListener('click', () => {
    if (currentInput == "0") {
      currentInput = "";
    }
    currentInput += item.childNodes[0].innerHTML;
    inputBox.innerHTML = "" + currentInput;
    operatorClicked = true;
    btnClicked = true;

  });
})

document.addEventListener("keydown", (event) => {
  var k = event.key;
  if (k == "Backspace") {

    currentInput = currentInput.substr(0, currentInput.length - 1);
    if (currentInput.length == 0) {
      currentInput = "0";
    }
    inputBox.innerHTML = "" + currentInput;

  }
  else if (k == ".") {
    if (currentInput == "0") {

      currentInput = "";
      currentInput += k.toString();
      inputBox.innerHTML += currentInput;

    } else {

      currentInput = currentInput + k.toString();
      inputBox.innerHTML = "" + currentInput;

    }
  }
  else if (Number.isInteger(parseInt(k))) {

    // if (!resultGenerated) {

    if (currentInput == "0") {

      numberKey = parseInt(k);
      currentInput = "";
      currentInput = currentInput + numberKey.toString();
      inputBox.innerHTML = "" + currentInput;

    } else {

      numberKey = parseInt(k);
      currentInput = currentInput + numberKey.toString();
      inputBox.innerHTML = "" + currentInput;

    }
    // } else {
    //   resultGenerated = false;
    //   currentInput = "";
    //   numberKey = parseInt(k);
    //   currentInput = currentInput + numberKey.toString();
    //   inputBox.innerHTML = "" + currentInput;
    // }

  } else if (k == "Delete") {

    currentInput = "0";
    inputBox.innerHTML = "" + currentInput;

  } else if (k == "+") {

    currentInput = currentInput + k.toString();
    inputBox.innerHTML = "" + currentInput;

  } else if (k == "-") {

    currentInput = currentInput + k.toString();
    inputBox.innerHTML = "" + currentInput;

  } else if (k == "*") {

    currentInput = currentInput + k.toString();
    inputBox.innerHTML = "" + currentInput;

  } else if (k == "/") {

    currentInput = currentInput + k.toString();
    inputBox.innerHTML = "" + currentInput;

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

  currentInput = eval(input).toString();
  inputBox.innerHTML = currentInput;

  // for (i = 0; i < arrInput.length; i++) {

  //   char = arrInput[i];
  //   if (char == "+") {
  //     operatorIndex = arrInput.indexOf(char);
  //   } else if (char == "-") {
  //     operatorIndex = arrInput.indexOf(char);
  //   } else if (char == "*") {
  //     operatorIndex = arrInput.indexOf(char);
  //   } else if (char == "/") {
  //     operatorIndex = arrInput.indexOf(char);
  //   }

  // }

  // firstNum = input.substr(0, operatorIndex);
  // if (Number.isFinite(parseFloat(firstNum)) && Number.isSafeInteger(parseFloat(firstNum))) {
  //   firstNum = parseInt(firstNum);
  // } else {
  //   firstNum = parseFloat(firstNum);
  // }

  // secondNum = input.substr(operatorIndex + 1);
  // if (Number.isFinite(parseFloat(secondNum)) && Number.isSafeInteger(parseFloat(secondNum))) {
  //   secondNum = parseInt(secondNum);
  // } else {
  //   secondNum = parseFloat(secondNum);
  // }

  // operator = input[operatorIndex];

  // console.log(firstNum, secondNum, operator, input, input.length, operatorIndex, input.length - operatorIndex);

  // if (operator == "+") {

  //   currentInput = firstNum + secondNum;
  //   currentInput = currentInput.toString();
  //   inputBox.innerHTML = "";
  //   inputBox.innerHTML = "" + currentInput;

  // } else if (operator == "-") {

  //   currentInput = firstNum - secondNum;
  //   currentInput = currentInput.toString();
  //   inputBox.innerHTML = "";
  //   inputBox.innerHTML = "" + currentInput;


  // } else if (operator == "*") {

  //   currentInput = firstNum * secondNum;;
  //   currentInput = currentInput.toString();
  //   inputBox.innerHTML = "";
  //   inputBox.innerHTML = "" + currentInput;


  // } else if (operator == "/") {

  //   currentInput = firstNum / secondNum;;
  //   currentInput = currentInput.toString();
  //   inputBox.innerHTML = "";
  //   inputBox.innerHTML = "" + currentInput;

  // }

  // resultGenerated = true;
  // operatorClicked = false;
}
