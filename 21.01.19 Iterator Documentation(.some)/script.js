// .some, .filter, .every

var arr = [1, -2, 3, 5];
function isPositive(number){
  return number > 0;
}
document.write(arr.every(isPositive) + ' ');
document.write(arr.some(isPositive));

document.write('<br>');

const numbers = [12, 33, 34, 2, 4];
const plus = numbers.reduce((re, fd) => {
  document.write('Its number of re:', re + '<br>');
  document.write('its number of fd:', fd + '<br>');
  return re + fd;
});
document.write(plus);

document.write('<br>');

const number2 = [23, 4, 534, 4];
const forRight = number2.reduceRight((r, e) => {
  return r + e;
});
document.write(forRight);