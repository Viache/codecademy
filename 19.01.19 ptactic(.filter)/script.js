
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(ranNum => {
  return ranNum > 250;
});
document.write(smallNumbers);

document.write('<br>');

const randNum5 = [234, 3452, 2, 5345, 2, 3];
const ok = randNum5.filter(yes => {
	return yes > 200;
});
document.write(ok);

document.write('<br>');

const randomNumbers10 = [234, 2, 34, 345, 2, 324, 2];
const enterNumb = randomNumbers10.filter(okay => {
	return okay > 200;
});
document.write(enterNumb);
 
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

document.write('<br>');

const cars = ['Bentley', 'BMW'];
const car = cars.findIndex(one => {
	return one === "BMW";
})
document.write(car);

document.write('<br>');

const cities = ['Berlin', 'Energodar', 'NY'];
const city = cities.findIndex(ind => {
	return ind === 'NY';
});
document.write(city);

document.write('<br>');
