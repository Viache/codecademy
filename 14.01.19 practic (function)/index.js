function showMenu(title = "Without title", width = 100, height = 200) {
  document.write(title + ' ' + width + ' ' + height);
}
showMenu("Menu1:");

document.write('<br>')

function someFunc(title = '', width = 230, height = 456) {
	document.write(title + ' ' + width + ' ' + height);
} 
someFunc('Menu2:');

document.write('<br>');
function showMenu2(title = '', width = 222, height = 333) {
	document.write(title + ' ' + width + ' ' + height)
}
showMenu2('Menu3:');

document.write('<br>');

function someFunc3(title = '', width = 121, height = 343) {
	document.write(title + ' ' + width + ' ' + height)
}
someFunc3('Menu4:');

document.write('<br>');

function someFunc4(title = '', width = 555, height = 777) {
	document.write(title + ' ' + width + ' ' + height);
}
someFunc4('Menu5:');

document.write('<br>');

function someFunc5(title = '', width = 4545, height = 3434) {
	document.write(title + ' ' + width + ' ' + height);
}
someFunc5('Menu6:');

document.write('<br>');







function sayHi(who = getCurrentUser().toUpperCase()) {
	document.write('Hello, ' + who);
}

function getCurrentUser() {
	return 'Vasya';
}
sayHi(); // Привет, ВАСЯ

document.write('<br>');

function someOtherFunc(who = MyFriend().toUpperCase()) {
	document.write('Hello, ' + who);
}
function MyFriend(){
	return 'Dnil';
}
someOtherFunc();

document.write('<br>');

function someOtherFunction(who = myPerents().toUpperCase()) {
	document.write('Hello, ' + who);
}
function myPerents() {
	return 'mother';
}
someOtherFunction();

document.write('<br>');

function someFunc10 (who = secondFunc().toUpperCase()){
	document.write('Hello, ' + who);
}
function secondFunc(){
	return 'kirill';
}
someFunc10();

document.write('<br>');

function myClient(who = client().toUpperCase()){
	document.write('Dear ' + who);
}
function client(){
	return 'Marina';
}
myClient();

document.write('<br>');

function myWork(enybody = somePerson().toUpperCase()){
	document.write('My works ' + enybody);
}
function somePerson(){
	return 'Fit4You';
}
myWork();

document.write('<br>');

function workDay(dayHours = hoursDay().toUpperCase()){
	document.write('My hours per day ' + dayHours);
}
function hoursDay(){
	return '10 work hours';
}
workDay();

document.write('<br>');

function name(name = myName().toUpperCase()){
	document.write('Hello, ' + name);
}
function myName(){
	return 'Viacheslav';
}
name();











