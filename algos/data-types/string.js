//String
//Properties
//String length
//Methods
function log(s) {
  return console.log(s);
}
log('******String.prototype[@@iterator](): ');

// String.prototype[@@iterator]();
const str = 'some string here';
const iterator = str[Symbol.iterator]();
// iterator
// StringIterator {}
// __proto__: String Iterator
// next: ƒ next()

let char = iterator.next();
// char
// {value: "s", done: false}


while (!char.done) {
  log(char.value);
  char = iterator.next();
}


log('******logString.prototype.charAt(): ');
// String.prototype.charAt() => returns string at index position
const charAtString = 'some string';
log(charAtString.charAt(0));
log('******  .'.charAt(0));
log('******@@33##  .'.charAt(0));
log('******.  tt6'.charAt(0));
log('******7.  tt6'.charAt(0));

log('******logString.prototype.charCodeAt(): ');
// String.prototype.charCodeAt() -  => Integer. returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index
// NaN if out of range

log('******s$$%%^^'.charCodeAt(2));
log('******some string'.charCodeAt(0));


log('******logString.prototype.codePointAt(): ????????????????????????????????');
// String.prototype.codePointAt() => Integer


log('******logString.prototype.concat(): ');
// String.prototype.concat() => new String
log('******aa'.concat('bb'));
log('******aa'.concat([]));
log('******aa'.concat({}));
let greetList = ['Hello', ' ', 'Venkat', '!'];
log("".concat(...greetList));
// It is strongly recommended that the assignment operators (+, +=) are used instead of the concat() method.


log('******ES2015  logString.prototype.endsWith(): ');
// String.prototype.endsWith() => boolean
// endsWith(searchString, length(opt, def is length))
log('******to be'.endsWith('to be')); // true
log('******to be'.endsWith('to be', 1)); // false

log('******logString.prototype.fromCharCode(): ????????????????????');
// String.fromCharCode()
log('******logString.prototype.fromCodePoint(): ????????????????????');
// String.fromCodePoint()

log('******ES2015 logString.prototype.includes(): ');
// includes(searchString, position(opt, def is 0))
log('******abc'.includes('a')); // true
log('******abc'.includes('a', 1) );// false (doesnt include a at 1st position)

log('******logString.prototype.indexOf(): ');
// indexOf(searchValue, fromIndex) => Integer; searched from left to right
//case sensitive
log('valaue1'.indexOf('a')); // 1
log('valaue1'.indexOf('c')); // -1
log('valaue1'.indexOf('a', 1)); // 1
log('valaue1'.indexOf('a', 5)); // -1

log('******logString.prototype.lastIndexOf(): ');
// String.prototype.lastIndexOf(searchValue, fromIndex) => Integer. searched from right to left
log('valaue1'.lastIndexOf('a')); // 3
log('valaue1'.lastIndexOf('c')); // -1
log('valaue1'.lastIndexOf('a', 1)); // 1
log('valaue1'.lastIndexOf('a', 5)); // 3


// String.prototype.localeCompare() ????????????
const a = 'réservé'; // with accents, lowercase
const b = 'RESERVE'; // no accents, uppercase
log (a.localeCompare(b))


// String.prototype.match() // match(regexp) => returns An Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.
log('******logString.prototype.match(): ');
// TODO: read more about regexp
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const paragraph2 = 'the quick brown fox jumps over the lazy dog. it barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
log (found); // ['T', 'I']
const found2 = paragraph2.match(regex);
log (found2); // null


// String.prototype.matchAll() = > returns An iterator (which is not a restartable iterable) of matches.
log('******logString.prototype.matchAll(): ');
const str1 = 'test1test2';
const regexp4 = /t(e)(st(\d?))/g;
const array = [...str1.matchAll(regexp4)];
log(array)


// String.prototype.normalize() ????????????


// String.prototype.padEnd()
log('******logString.prototype.padEnd(): ');
const str8 = 'Breaded Mushrooms';
// padEnd(targetLength, padString)
log(str8.padEnd(18, '.'));
log(str8.padEnd(1));
'abc'.padEnd(10);          // "abc       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);           // "abc"


// String.prototype.padStart()
// padStart(targetLength, padString)
log('******logString.prototype.padStart(): ');
const str5 = '5';
log(str5.padStart(2, '0')); // "05"
log(str5.padStart(8, '4')); // "44444445"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
log(last4Digits.padStart(fullNumber.length, '*')); // ************5581


// String.prototype.repeat()
// repeat(count)
log('******logString.prototype.repeat(): ');
log('ma'.repeat(2)); // mama
log('ma'.repeat(2.5)); // mama
log('ma'.repeat(0)); // ""
log('ma'.repeat(1)); // "ma"
// log('ma'.repeat(-5)); // Range Error

// String.prototype.replace()
const p = 'good dog';
log(p.replace('dog', 'monkey'));

const regexq = /Dog/i;
console.log(p.replace(regexq, 'ferret'));

let re = /(\w+)\s(\w+)/;
let str7 = 'John Smith';
let newstr = str7.replace(re, '$2, $1'); // Smith John

// Replacing a Fahrenheit degree with its Celsius equivalent
function f2c(x) {
  function convert(str, p1, offset, s) {
    return ((p1 - 32) * 5/9) + 'C';
  }
  let s = String(x);
  let test = /(-?\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}

// String.prototype.valueOf(), String.prototype.toString() => same methods, return new string
// String.prototype.toLowerCase(), String.prototype.toUpperCase() => return new string upper or lower cased
// String.prototype.toLocaleLowerCase(), String.prototype.toLocaleUpperCase()
const dotted = 'İstanbul';

console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);


// String.prototype.replaceAll() ?????????
// String.prototype.search() ??????????

// String.prototype.slice()
// slice(beginIndex, endIndex)
// extracts a section of a string and returns it as a new string, without modifying the original string.
log('******logString.prototype.slice(): ');
log('some string here'.slice(2)); // 'me string here'
log('some string here'.slice(-2)); // 're'
log('some string here'.slice(-2, 5)); // ''
log('some string here'.slice(-2, -4)); // ''
log('some string here'.slice(-4, -2)); // 'he'
log('some string here'.slice(2, 6)); // 'me s'

// String.prototype.split()
// String.prototype.startsWith()
// String.prototype.substring()

// String.prototype.trim(), String.prototype.trimEnd(), String.prototype.trimStart() => those methods remove whitespaces from strings



// String.raw() // NO OPERA SUPPORT
// ************** NO BROWSER SUPPORT YET **************
// String.prototype.at()
// ************** NO BROWSER SUPPORT YET **************

// *****DEPRECATED*****
// String.prototype.anchor() // creates a string beginning with an <a name="..."> start tag, then some text, and then an </a> end tag.
// String.prototype.big()
// String.prototype.blink()
// String.prototype.bold()
// String.prototype.fixed()
// String.prototype.fontcolor()
// String.prototype.fontsize()
// String.prototype.italics()
// String.prototype.link()
// String.prototype.small()
// String.prototype.strike()
// String.prototype.sub()
// String.prototype.substr()
// String.prototype.sup()
// String.prototype.toSource()
// *****DEPRECATED*****
