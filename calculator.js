function insert(num) {
  const symbols = ['-', '+', '*', '/', '.']
  var number = document.getElementById('result').innerHTML;
  number =  (symbols.includes(num) && symbols.includes(number[number.length - 1])) ? number.substring(0, number.length - 1) : number
  document.getElementById('result').innerHTML = (parseInt(number) !== 0) ? number + num : parseInt(number + num)
}
function clean() {
  document.getElementById('result').innerHTML = "0";
}
function back() {
  var result = document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML = (result.length - 1) > 0 ? result.substring(0, result.length - 1) : 0;
}
function calc() {
  var result = document.getElementById('result').innerHTML;
  if (result) {
    document.getElementById('result').innerHTML = eval(result);
  }
}