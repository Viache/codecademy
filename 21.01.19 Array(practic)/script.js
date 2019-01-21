var arr = ['Apple', 'Pineapple',
'Lemon'];
document.write(arr[0] + ' ');
arr [1] = 'Rabbit';
document.write(arr[1] + ' ');
document.write(arr[2] + ' ');
arr [3] = 'Fox';
document.write(arr[3] + '<br>');
document.write(arr.length);
//alert(arr);
document.write('<br>');

var mix = [3, 'Hello', {name: 'Slava'}, true];

document.write(mix[0] + ', ');
document.write(mix[1] + ', ');
document.write(mix[2].name + ', ');
document.write(mix[3]);

document.write(mix.pop() + '<br>');
document.write(mix[0] + ' ' + mix[1] + ' ' + mix[2].name);


