let billion = 1e9; // 1 billion, literally: 1 and 9 zeroes

console.log(7.3e9); // 7.3 billions (same as 7300000000 or 7_300_000_000)

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

let mсs = 0.000001;
let mcs = 1e-6; // five zeroes to the left from 1

// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

//Hexadecimal 0x and Octal numeral system 0b and 0o

alert(0xff); // 255
alert(0xff); // 255 (the same, case doesn't matter)
