const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      document.write('Something has gone very wrong :( ');
    }
  }
}

// Write your code below
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
document.write(is2p2.name);

document.write('<br>')

const kalsdflkjasdflkj = () => {
  for(let t = 0; t < 5; t++){
    document.write(t);
  }
}
kalsdflkjasdflkj();

const kkk = kalsdflkjasdflkj;
document.write(kkk.name);