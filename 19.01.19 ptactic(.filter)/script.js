
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(ranNum => {
  return ranNum > 250;
});
document.write(smallNumbers);

document.write('<br>');

const randomNumbers2 = [234, 34, 4, 35, 45622, 1235, 5, 22];
const smallNumbers2 = randomNumbers2.filter(num2 => {
	return num2 > 100;
});
document.write(smallNumbers2);

document.write('<br>');

const someWords = ['asdasd', 'sd', 'safawe', 'd', 'dasdf', 'd'];
const longWords = someWords.filter(long => {
	return long.length > 3;
});
document.write(longWords);

document.write('<br>');

const words = ['asd', 'dfg', 'fgh', 'wer', 'dfg'];
const findSomeWords = words.findIndex(find => {
	return find === 'asd';
});
document.write(findSomeWords);