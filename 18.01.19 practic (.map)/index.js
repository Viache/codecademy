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