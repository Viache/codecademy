const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 
'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMassage = animals.map(animal =>
	animal[0]);

document.write(secretMassage.join(''));

document.write('<br>');

const tray = ['lady', 'opra', 'lacky'];
const secretMass = tray.map(enterSecret =>
	enterSecret[0]);

document.write(secretMass.join(''));

document.write('<br>');

const oneMoreTime = ['Good', 'opra'];
const lastTime = oneMoreTime.map(firstTime => 
	firstTime[0]);

document.write(lastTime.join('') + '. My friend.'); 

document.write('<br>');

const everyTime = ['Solt', 'lucky', 'avacode', 'vicings', 'asparcam'];
const mix = everyTime.map(goal =>
	goal[0]);

document.write('My name is ' + mix.join(''));

document.write('<br>');

const today = ['end', 'grou', 'goal'];
const sut = today.map(todaySut => 
	todaySut[0]);

document.write('I have ' + sut.join('') + '.');

document.write('<br>');

const okay = ['World', 'Of', 'Worldcraft'];
const WoW = okay.map(WoWmap =>
	WoWmap[0]);
document.write('I love ' + WoW.join('') + '.');




document.write('<br>');

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(num =>
	num/100);

document.write(smallNumbers);

document.write('<br>');

bigNumbers2 = [456, 345, 576, 2345, 546];
smallNumbers2 = bigNumbers2.map(num2 =>
	num2/100);
document.write(smallNumbers2);

document.write('<br>');

const bigNumbers3 = [34345, 234, 36, 67, 245];
const smallNumbers3 = bigNumbers3.map(num3 =>
	num3 * 3);
document.write(smallNumbers3);

document.write('<br>');

const bigNumbers4 = [456, 234, 234, 456, 567];
const smallNumbers4 = bigNumbers4.map(num4 =>
	num4 + 1000);
document.write(smallNumbers4);






























