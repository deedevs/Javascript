const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}
function createAndWrite(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWrite("+", initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWrite("-", initialResult, enteredNumber);
}
function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWrite("*", initialResult, enteredNumber);
}
function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWrite("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
