

// Create three inputs to get the starting odometer reading, the ending odometer reading, and the gallons used during that period.

var start = document.querySelector('.starting-js');
var end = document.querySelector('.fin-js');
var gu = document.querySelector('.gallons-js');
var button = document.querySelector('.go-js');

// Output to an element (such as <output></output>) the miles per gallon.
var output = document.querySelector('output');

// You may use a button, keyup, focus, or other event if you would like to cause the calculation/function to work.

// You must use at least two functions, one that passes parameters, and another that returns the calculated result based on those parameters.
var result  = function (star, fin, g) {
  var math = (star - fin) / g;
  return math;
};

button.addEventListener('click', function() {
  var star = parseFloat(start.value);
  var fin = parseFloat(end.value);
  var g = parseFloat(gu.value);
  var answer = result(star, fin, g);
  output.textContent = answer.toFixed(2);
});