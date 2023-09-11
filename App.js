function getNumber(num) {
  let result = document.getElementById("result");
  result.value += num;
}

function clearResult() {
  let result = document.getElementById("result");
  result.value = "";
  result.focus();
}

function getCalculation() {
  let result = document.getElementById("result");
  result.value = eval(result.value);
}