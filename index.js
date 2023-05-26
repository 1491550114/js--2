// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS 算法2</h1>`;
function sumFibs(num) {
  let result = 0;
  let prev = 0;
  let curr = 1;
  while (curr <= num) {
    if (curr % 2 != 0) {
      result += curr;
    }
    curr += prev;
    prev = curr - prev;
  }
}
sumFibs(4);

// 2.质数求和
function sumPrimes(num) {
  function isPrimes(num) {
    let sqrt = Math.sqrt(num);
    for (let i = 0; i <= sqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    console.log(sqrt);
    return true;
  }
  isPrimes(10);
  console.log(isPrimes(10));
}

sumPrimes(10);
