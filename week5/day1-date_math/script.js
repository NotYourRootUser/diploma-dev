// creates a date for 17 Dec 1995, 03:24:00
const pastDate1 = new Date(1995, 11, 17, 3, 24, 0);
console.log(pastDate1);

// creates a date for 23 Oct 2004.
const pastDate2 = new Date("2004-10-23");
console.log(pastDate2);

// the time difference in milliseconds
const difference = pastDate2 - pastDate1;
console.log(difference); 

// convert it into days
const days = difference / (1000 * 60 * 60 * 24);
console.log(days) // how many days between

// key methods
const myDateMethod = new Date(); // current date + time
console.log(myDateMethod.getFullYear()) // year ( 4 digits )
console.log(myDateMethod.getMonth()) // month 0-11 ( 0 = jan )
console.log(myDateMethod.getDate()) // fday of month 1-31
console.log(myDateMethod.getDay()) // day of week 0-6 ( 0 = sunday )
console.log(myDateMethod.getHours()) // hour 0-23
console.log(myDateMethod.getMinutes()) // minute 0-59
console.log(myDateMethod.getSeconds()) // second 0-59
console.log(myDateMethod.toISOString()) // date/time in utc format
console.log(myDateMethod.getTime()) // milliseconds since jan 1 1970

// exercise 1 
const birthDate = new Date("1970-10-23")
console.log(`My birthdate is on the ${birthDate.getDate()}rd`);


// international date/time api
const myDate = new Date(); // current date/time
const myFormattedDate = new Intl.DateTimeFormat("en-NZ").format(myDate); // 
console.log(myFormattedDate);

const myDateEs = new Date();
const formatted = new Intl.DateTimeFormat("es", { dateStyle: "full" }).format(myDate);
console.log(formatted);

// examples
/* { dateStyle: "full" }       "Thursday, 30 August 2024"
{ dateStyle: "short" }      "30/8/24"
{ timeStyle: "short" }      adds time like "30/8/24, 9:00 AM"
{ weekday: "long", month: "long", year: "numeric" } // custom format */

// practice 
const options = {
//   hour: "numeric",
//   minute: "numeric",
  day: "numeric",
  month: "long",
//   year: "numeric",
//   weekday: "long",
//   hour12: true,
//   timeZoneName: "short",
//   timeZone: "America/New_York",
};

// exercise 2 
const birthday = new Intl.DateTimeFormat("en-NZ", {month: 'long', day: "numeric"}).format(birthDate);
console.log(`My birthday is on the ${birthday}`);

