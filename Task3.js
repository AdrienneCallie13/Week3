// JavaScript Get

// expected output: 2021
const year = new Date('August 16, 21 00:20:18');

console.log(year.getFullYear());

// expected output: 13
const birthday = new Date('July 13, 2001 20:13:50');
const date1 = birthday.getDate();

console.log(date1);

// expected output: 8
const hour = new Date('July 13, 08 08:20');

console.log(hour.getHours());

// JavaScript Set

// expected output: 23
const date = new Date('August 19, 1975 23:15:30');

date.setDate(23);

console.log(date.getDate());

// expected output: 20
const seconds = new Date('August 19, 1975 23:15:30');

seconds.setSeconds(20);

console.log(seconds.getSeconds());
