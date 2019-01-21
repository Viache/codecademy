var num1 = 1;
var num2 = 4;
// var minus = num2 - num1;
// document.write(minus + '<br>');
// document.write(num1 + num2 + '<br>');

function culc(){
	document.write('Hello ');
}
culc();

function sum5 (){
	document.write(num1 + num1 + num2)
}
sum5();

document.write('<br>');

const hay = 'Hello';
const num3 = 5;
const num4 = 6;
const sum = num3 + num4;

document.write(hay + ' ' + sum + '<br>' + '<br>');

for(i = 1; i <= 100; i++){
	if(i % 3 == 0 || i % 5 == 0 || i % 2 == 0 || i % 3.5 == 0 || i % 5.5 == 0 || i % 6.5 == 0) continue;
	document.write(i + '<br>');
}

document.write('<br>');

let newArray = ['Egor', 'Vasya', 'Nikolay', 'Alex', 'Misha', 'Slava'];

newArray.forEach(newArr => {
	document.write(newArr + ' its my first word.' + '<br>');
})

document.write('<br>');

const arrayForEach = ['Rembo', 'Terminator', 'Ror'];

arrayForEach.forEach(newArr2 => {
	document.write(newArr2 + ' most of all favorite film.' + '<br>')
});

document.write('<br>');

const extrimArr = ['gold', 'sea', 'wather'];

extrimArr.forEach(exArr => {
	document.write('I wont ' + exArr + '.' + '<br>');
})

document.write('<br>')

const dreamArr = ['Biches', 'Alkohol'];

dreamArr.forEach(arrForDream => {
	document.write(arrForDream + ' its my favorite item.' +  '<br>')
})

document.write('<br>');

const map1 = [3, 4, 6, 3, 6, 3, 2];

const multiplyMap1 = map1.map(map1mult => {
	return map1mult * map1mult;
})

document.write(multiplyMap1);

document.write('<br>');

const numbers = [45, 56, 67, 78, 89];

const multNum = numbers.map(multi => {
	return multi * multi;
})

document.write(multNum);

document.write('<br>');

const numbForMult = [123, 234, 345, 456, 654];

const culcnumMult = numbForMult.map(multcul => {
	return multcul * multcul;
})

document.write(culcnumMult);

document.write('<br>');

const numbLast = [345, 333, 444, 555];

const secondNumLast = numbLast.map(multCal => {
	return multCal * multCal;
})

document.write(secondNumLast);

document.write('<br>');

const slava = [8, 87, 5644, 45636];

const privet = slava.map(poka => {
	return poka * poka;
})

document.write(privet);

document.write('<br>');
document.write('<br>');

const hello = [234, 234, 234, 456];

const hi = hello.forEach(puc => {
	document.write(puc + ' my fav number.' + '<br>');
});

document.write('<br>');

const filter = [345, 'hello', 'hi', 34, 23, 'bay'];

const filterNum = filter.filter(filt => {
	return typeof filt === 'number';
});

document.write(filterNum);

document.write('<br>');

const filter2 = ['sdf', 45, 4, 352, 'wefdsa', 234, 'wedfs'];

const filterNum2 = filter2.filter(filt2 => {
	return typeof filt2 === 'number';
});

document.write(filterNum2);

document.write('<br>');

const filter3 = ['asd', 'asd', 234, 234, 'fds'];

const filternum3 = filter3.filter(filt3 => {
	return typeof filt3 === 'number';
});

document.write(filternum3);

document.write('<br>');

const filter4 = ['sdf', 345, '234', 3454, 'werf'];

const filterNumber4 = filter4.filter(filt4 => {
	return typeof filt4 === 'number';
});

document.write(filterNumber4);

document.write('<br>');
document.write('<br>');

const foreEach10 = ['pensil', 'pen'];

const needBay = foreEach10.forEach(bay10 => {
	document.write('Need bay ' + bay10 + '.' + '<br>');
});

document.write('<br>');

const numForMult10 = [234, 4, 234, 123, 432];

const funkForMultNum = numForMult10.map(mult10 => {
	return mult10 * mult10;
})

document.write(funkForMultNum);

document.write('<br>');

const filter10 = [234, 'adf', 234];
const funcForFilter = filter10.filter (filt10 => {
	return typeof filt10 === 'number';
})
document.write(funcForFilter);

document.write('<br>');

const frodo = [23, 45, 56, 67];
const tempo = frodo.reduce((rrrt, ttty) => {
	document.write('Its number rrrt:', rrrt + '<br>');
	document.write('Its number ttty:', ttty + '<br>');
	return rrrt + ttty;
}, 100);
document.write(tempo);