const foreE20 = ['html', 'css', 'js'];

const foreE200 = foreE20.forEach(each20 => {
	document.write('I weel hould mastered ' + each20 + '.' + '<br>');
})

document.write('<br>');

const foreEach10 = ['pensil', 'pen'];

const needBay = foreEach10.forEach(bay10 => {
	document.write('Need bay ' + bay10 + '.' + '<br>');
});

document.write('<br>');

const mapNum1 = [234, 234, 345, 567];

const mupNum2 = mapNum1.map(culc => {
	return culc * culc;
})
document.write(mupNum2);

document.write('<br>');
document.write('<br>');

const filteronus = [234, 'sdf', 23];
const filteronus1 = filteronus.filter(fil => {
	return typeof fil === 'number';
})
document.write(filteronus1);

document.write('<br>');
document.write('<br>');

const for1000 = ['front end', 'back end'];
const for111 = for1000.forEach(go => {
	document.write('Lets go ' + go + '.' + '<br>');
})


document.write('<br>');
document.write('<br>');

const mapmap = [345, 234, 5, 6];
const mapmapGo = mapmap.map(gogo => {
	return gogo * gogo;
})
document.write(mapmapGo);

document.write('<br>');
document.write('<br>');

const lastFilter = [2345, 'sdf', 435, 'sdf'];
const filterGoo = lastFilter.filter(gofilT => {
	return typeof gofilT === 'number';
})
document.write(filterGoo);

document.write('<br>');
document.write('<br>');

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => document.write(`I want to eat a ${fruit}.`))



// Iterate over fruits below
const forFruit = fruits.forEach(fru => {
document.write('I want to eat ' + fru +'.');
});


fruits.forEach(go => document.write(`Hello ${go}.`))
fruits.forEach(got => document.write(`gogo ${got}`))