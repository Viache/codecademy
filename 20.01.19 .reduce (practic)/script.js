

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 1000)

document.write(summedNums);

document.write('<br>');

const num = [1, 3, 4, 5, 10];

const sumNum = num.reduce((ddd, fff) => {
  return ddd + fff
})
document.write(sumNum);

document.write('<br>');

const num11 = [4, 5, 6, 7, 8];
const nuum11 = num11.reduce((acc, curr) => {
  document.write('The value of acc:',
    acc + '<br>');
  document.write('The value of curr:',
    curr + '<br>');
  return acc + curr
}, 100)
document.write(nuum11);

document.write('<br>');

const lastAr =[4, 5, 6, 7, 34];
const op = lastAr.reduce((qw, er) => {
  document.write('qw number:', qw + '<br>');
  document.write('er number:', er + '<br>');
  return qw + er
}, 2)
document.write(op);

document.write('<br>');

const oneMore = [45, 6, 23, 2, 5];
const oppa = oneMore.reduce((rt, tr) => {
  document.write('Number rt:', rt + '<br>');
  document.write('Number tr:', tr + '<br>');
  return rt + tr
}, 12)
document.write(oppa);

document.write('<br>');

const boom = [4, 3, 6, 7, 34];
const moob = boom.reduce((eew, eer) => {
  document.write('Number eew:', eew + '.' + '<br>');
  document.write('Number eer:', eer + '.' + '<br>');
  return eew + eer
}, 25);
document.write(moob);