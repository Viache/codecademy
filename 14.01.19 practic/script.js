
var array = ['a', 'b', 'c'];
Array.prototype.frr = 'foo!';
for( var i in array) {
	document.write(array[i]);
}

for(i = 0; i < 40; i++){
	if(i % 2 == 0) continue;
	document.write(i + '<br>')
}

var fad = ['d', 'as', 'asd', 'asd'];
var fadlLength = fad.length;

for(u = 0; u < fadlLength; u++){
	document.write('number:' + ' ' + u + '<br>')
} 

var i, s, myStringArray = [ "Hello", "World" ], len = myStringArray.length;
for (i=0; i<len; ++i) {
  if (i in myStringArray) {
    s = myStringArray[i];
    document.write(i)
  }
}


document.write('<br>')
document.write('<br>')

const rapperArray = ["Lil' Kim,", "Jay-Z,", "Notorious B.I.G.,", "Tupac,"];
for (let i = 0; i < rapperArray.length; i++){
  document.write(rapperArray[i] + ' ');
  if (rapperArray[i] === "Notorious B.I.G.,") {
  	break;
  }
}
document.write("And if you don't know, now you know.");

document.write('<br>')

const rapperSlava = ['Egor', 'Rufat', 'Zhenya', 'Igor'];
for(let g = 0; g < rapperSlava.length; g++){
	document.write(rapperSlava[g] + ' ');
	if(rapperSlava[g] = 'Rufat') {
		continue;
	}
}


const grou = ['dsf', 'asd', 'ads', 'as'];
for (let ff = 0; ff < grou.length; ff++){
	document.write(grou[ff] + ' ');
	if(grou[ff] === 'asd'){
		break;
	}
}
