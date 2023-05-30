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
  return isPrimes(10);
}

sumPrimes(10);

//3.数组扁平化 方案一
function steamrollArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr.push(...steamrollArray(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//方案二
function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some((val) => Array.isArray(val)) ? steamrollArray(flat) : flat;
}

//方案三
function steamrollArray(arr) {
  return arr
    .toString('')
    .replace(',,', ',')
    .split(',')
    .map((val) => {
      if (val == '[object Object]') {
        return {};
      } else if (isNaN(val)) {
        return val;
      } else {
        return parseInt(val);
      }
    });
  // console.log(arr.toString('').replace(',,', ',').split(','));
}
function steamrollArray2(arr) {
  let flat = [].concat(...arr);
  return flat.some((val) => Array.isArray(val)) ? steamrollArray2(flat) : flat;
}
steamrollArray2([1, [2], [3, [[4]]]]);

//4.翻译二进制字符串
function binaryAgent(str) {
  return str
    .split(' ')
    .map((val) => String.fromCharCode(parseInt(val, 2)))
    .join('');
}

binaryAgent(
  '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
);

// 5.检查谓词
function truthCheck(collection, pre) {
  let a = collection.every((val) => {
    return val[pre];
  });
  return pre;
}

truthCheck(
  [
    { name: 'Quincy', role: 'Founder', isBot: false },
    { name: 'Naomi', role: '', isBot: true },
    { name: 'Camperbot', role: 'Bot', isBot: true },
  ],
  'isBot'
);

//6.创建一个将两个参数相加的函数。 如果只提供了一个参数，则返回一个需要一个参数并返回总和的函数。
function addTogether() {
  const [first, second] = arguments;
  if (typeof first === 'number') {
    if (typeof second === 'number') {
      return first + second;
    }
    if (arguments.length === 1) {
      return (second) => {
        return addTogether(first, second);
      };
    }
  }
}

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  arr.map((val) => {});
  return arr;
}

orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]);
