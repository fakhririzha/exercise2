var d = document;
var currentInput = "";

function ConcatIt(element1, element2) {
  element1 = ArrayIt(element1)
  return element1.concat(ArrayIt(element2));
}

function ArrayIt(element) {
  return Array.from(d.getElementsByClassName(element));
}

var inputBox = d.getElementById("user-input"),
  btnInput = ConcatIt("number", "operator"),
  helperInput = ArrayIt("helper");

inputBox.innerHTML = "0";

btnInput.forEach(item => {
  item.addEventListener('click', () => {

    if (currentInput == "0") {
      currentInput = "";
    }
    setNewInput(item.childNodes[0].innerHTML);

  });
});

helperInput.forEach(item => {
  item.addEventListener('click', () => {

    if (currentInput == "0") {
      currentInput = "";
    }
    var trigger = item.childNodes[0].innerHTML;
    callTrigger(trigger);

  });
});

ArrayIt("number").forEach((item) => {
  item.childNodes[0].addEventListener("onmouseover", () => {
    console.log('hover');
  });
});

d.addEventListener("keydown", (event) => {
  var k = event.key;
  if (k == "Backspace") {

    currentInput = currentInput.substr(0, currentInput.length - 1);
    if (currentInput.length == 0) {
      currentInput = "0";

    }
    applyDisplay(currentInput);
  }
  else if (k == "Delete") {

    applyDisplay(currentInput = "0");

  }
  else if (k == "Enter") {

    event.preventDefault();
    callTrigger("=");

  } else if (Number.isInteger(parseInt(k)) || k == ".") {

    if (currentInput == "0") {
      currentInput = "";
    }
    applyDisplay(currentInput = currentInput + parseInt(k).toString());
  }
  else if (k == "+" || k == "-" || k == "*" || k == "/" || k == "%") {

    applyDisplay(currentInput = currentInput + k.toString());

  }
  else {
    console.log(k);
  }
});

function callTrigger(key) {
  if (key == "=") {

    currentInput = eval(currentInput).toString();
    applyDisplay(currentInput);

  } else if (key == "AC") {

    currentInput = "0";
    applyDisplay(currentInput);

  } else if (key == "C") {

    currentInput = currentInput.substr(0, currentInput.length - 1);
    if (currentInput.length == 0) {
      currentInput = "0";
    }
    applyDisplay(currentInput);

  }
}

function setNewInput(input) {
  currentInput += input;
  applyDisplay(currentInput);
}

function applyDisplay(input) {
  inputBox.innerHTML = input;
}
