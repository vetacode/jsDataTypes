//Date Creation
let now = new Date();
console.log(now);

//new Date(milliseconds)
let jan01_1970 = new Date(0);
console.log(jan01_1970);
let jan02_1970 = new Date(24 * 3600 * 1000);
console.log(jan02_1970);

// 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);

//new Date(datestring)
let date = new Date('2017-01-26');
console.log(date);
// The time is not set, so it's assumed to be midnight GMT and
// is adjusted according to the timezone the code is run in
// So the result could be
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// or
// Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)

//new Date(year, month, date, hours, minutes, seconds, ms)
new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default
let date2 = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log(date2); // 1.01.2011, 02:03:04.567

/**
 * ACCESS DATE COMPONENTS

getFullYear(); //4 digits
getMonth(); //from 0 to 11
getDate(); //from 1 to 31
getHours();
getMinutes();
getSeconds();
getMilliseconds();
getDay(); //from 0 (sunday) to 6 (saturday)
getTime(); //number milliseconds passed from Jan 1st of 1970 UTC+0
getTimezoneOffset(); //Returns the difference between UTC and the local time zone, in minutes:
 */

let date3 = new Date();
console.log(date3.getHours()); //Getting current local hours
console.log(date3.getTime().toLocaleString());
console.log(date3.getTimezoneOffset() / 60); //hours difference

/**SETTING DATE COMPONENTS
 * setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
 */

let date4 = new Date();
console.log(date4.setHours(0));
console.log(date4);
console.log(date4.setHours(0, 0, 0, 0));
console.log(date4);
