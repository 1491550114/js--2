// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS 算法2</h1>`;
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

//7.计算轨道周期
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let b = arr.map((val) => {
    val.orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(val.avgAlt + earthRadius, 3) / GM)
    );
    delete val.avgAlt;
    return val;
  });
  return arr;
}

orbitalPeriod([
  { name: 'iss', avgAlt: 413.6 },
  { name: 'hubble', avgAlt: 556.7 },
  { name: 'moon', avgAlt: 378632.553 },
]);

/**
 * 8.回文检查器
 * 注意：检查回文时，你需要先去除所有非字母数字的字符（标点、空格和符号），并将所有字母都转换成大写或都转换成小写。
 */
//方案一
function palindrome(res1) {
  res1 = res1.replace(/[\s|\,|\.|_|\-|\(|\)|\\|\/]/g, '').toLowerCase();
  let first = res1;
  let last = res1.split('').reverse().join('');
  if (first == last) {
    console.log('true');
    return true;
  } else {
    console.log('false');
    return false;
  }
}
//方案二
function palindrome(res1) {
  res1 = res1.replace(/[\s|\,|\.|_|\-|\(|\)|\\|\/]/g, '').toLowerCase();
  for (var i = 0, len = res1.length - 1; i < len / 2; i++) {
    if (res1[i] !== res1[len - i]) {
      return false;
    }
  }
  return true;
}
// console.log(palindrome('0_0 (: - :) 0-0'));

/**
 *9.罗马数字转换器
 把传入的数字转为罗马数字
 罗马数字	阿拉伯数字
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
 */
function convertToRoman(num) {
  let str = '';
  str += num;
  let res1 = '',
    res2 = '',
    res3 = '',
    res4 = '',
    result = [];
  // console.log(str.length);
  // console.log(str[str.length - 3]);
  if (str.length == 0) {
    result = [];
  } else if (str.length > 0) {
    switch (str[str.length - 1]) {
      case '1':
        res1 = 'I';
        break;
      case '2':
        res1 = 'II';
        break;
      case '3':
        res1 = 'III';
        break;
      case '4':
        res1 = 'IV';
        break;
      case '5':
        res1 = 'V';
        break;
      case '6':
        res1 = 'VI';
        break;
      case '7':
        res1 = 'VII';
        break;
      case '8':
        res1 = 'VIII';
        break;
      case '9':
        res1 = 'IX';
        break;
    }
    switch (str[str.length - 2]) {
      case '1':
        res2 = 'X';
        break;
      case '2':
        res2 = 'XX';
        break;
      case '3':
        res2 = 'XXX';
        break;
      case '4':
        res2 = 'XL';
        break;
      case '5':
        res2 = 'L';
        break;
      case '6':
        res2 = 'LX';
        break;
      case '7':
        res2 = 'LXX';
        break;
      case '8':
        res2 = 'LXXX';
        break;
      case '9':
        res2 = 'XC';
        break;
    }
    switch (str[str.length - 3]) {
      case '1':
        res3 = 'C';
        break;
      case '2':
        res3 = 'CC';
        break;
      case '3':
        res3 = 'CCC';
        break;
      case '4':
        res3 = 'CD';
        break;
      case '5':
        res3 = 'D';
        break;
      case '6':
        res3 = 'DC';
        break;
      case '7':
        res3 = 'DCC';
        break;
      case '8':
        res3 = 'DCCC';
        break;
      case '9':
        res3 = 'CM';
        break;
    }
    switch (str[str.length - 4]) {
      case '1':
        res4 = 'M';
        break;
      case '2':
        res4 = 'MM';
        break;
      case '3':
        res4 = 'MMM';
        break;
      case '4':
        res4 = 'MMMM';
        break;
    }
  }
  // console.log(res4, res3, res2, res1);
  result.push(res4, res3, res2, res1);
  return result.join('');
}

convertToRoman(68);

/**
 * 10.恺撒密码
 * 移位密码
现代最常被应用到的一个变种就是 ROT13 加密，也就是明文中的字母向后移 13 位。 也就是， A ↔ N，B ↔ O 等等。
 */
function rot13(str) {
  str = str.split('');
  return str
    .map((val) => {
      if (/[A-Z]/g.test(val)) {
        let a = (val.charCodeAt() % 26) + 65;
        val = String.fromCharCode(a);
      }
      return val;
    })
    .join('');
}

/**
 * 11.电话号码检查器
 * 555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
 */
function telephoneCheck(str) {
  // let regex = /^(1\s)?(\(?\d{3\)?)[\s\-]?\d{3}[\s\-]?\d{4}$/g;
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/g;
  let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
    rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;
  return regex.test(str) ? true : false;
}
telephoneCheck('1 (555) 555-5555');
telephoneCheck('1 555-555-5555');
telephoneCheck('1(555)555-5555');
telephoneCheck('1 555)555-5555');
telephoneCheck('5555555555');

/**12.计算找零 */
function checkCashRegister(price, cash, cid) {
  let change = Math.round((cash - price) * 100);
  let currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  let arrCid = [],
    sum = 0;

  let sumCid = function () {
    let cidMap = cid.map((val) => Math.round(val[1] * 100));
    for (let i = 0; i < cidMap.length; i++) {
      sum += cidMap[i];
    }
    return sum;
  };
  let res = sumCid();
  console.log('taotao');
  if (res === change) {
    return { status: 'CLOSED', change: cid };
  } else if (res < change) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  } else {
    for (let i = currency.length - 1; i > -1; i--) {
      while (change >= currency[i]) {}
    }
    console.log('333333333');
  }
}

checkCashRegister(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
]);
