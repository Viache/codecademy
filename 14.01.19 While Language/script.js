const input = 'Hi human, how are you?';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for(let inputIndex = 0; inputIndex < input.length; inputIndex++){
  //console.log('InputIndex = ' + input[inputIndex]);
  for(let vowel = 0; vowel < vowels.length; vowel++){
   if(input[inputIndex] === vowels[vowel]){
     if(input[inputIndex] === 'e'){
       resultArray.push('ee');
     }
     else if (input[inputIndex] === 'u'){
       resultArray.push('uu');
     }
     else{
       resultArray.push(input[inputIndex]);
     }
   }
  }
}
document.write(resultArray.join('').toUpperCase());

document.write('<br>');

const humanLang = 'Hello, my name is Sergey';
const spesialWords = ['a', 'b', 's', 'd', 'e', 'f', 'g', 'l', 'm'];
let resultArrayNext = [];
for(let humanLangIndex = 0; humanLangIndex < humanLang.length; humanLangIndex++){
  for(let spesialWordsIndex = 0; spesialWordsIndex < spesialWords.length; spesialWordsIndex++){
    if(humanLang[humanLangIndex] === spesialWords[spesialWordsIndex]){
      if(humanLang[humanLangIndex] === 'a'){
        resultArrayNext.push('A');
      }
      else if(humanLang[humanLangIndex] === 'b'){
        resultArrayNext.push('B');
      }
      else if(humanLang[humanLangIndex] === 's'){
        resultArrayNext.push('S');
      }
      else if(humanLang[humanLangIndex] === 'd'){
        resultArrayNext.push('D');
      }
      else if(humanLang[humanLangIndex] === 'e'){
        resultArrayNext.push('E');
      }
      else if(humanLang[humanLangIndex] === 'f'){
        resultArrayNext.push('F');
      }
      else if(humanLang[humanLangIndex] === 'g'){
        resultArrayNext.push('G');
      }
      else if(humanLang[humanLangIndex] === 'l'){
        resultArrayNext.push('L');
      }
      else if(humanLang[humanLangIndex] === 'm'){
        resultArrayNext.push('M');
      }
      else{
       resultArrayNext.push(humanLang[humanLangIndex]);
     }
    }
  }
}

document.write(resultArrayNext.join('').toLowerCase());