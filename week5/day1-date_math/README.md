# javascript date and array notes

shopping basket feature  
form listens for "submit"  
preventdefault stops reload  
input split by comma using .split(",")  
.map used to clean and lowercase each item  
example  
const basket = basketInputEl.value.split(",").map(item => item.trim().toLowerCase());  
shopping list array converted with map  
const shoppingItems = shoppingList.map(entry => entry.item.toLowerCase());  
.filter used to find what’s missing  
const missingItems = shoppingItems.filter(item => !basket.includes(item));  
display results  
if (missingItems.length === 0) { missingItemsDisplayEl.innerHTML = "all items are in your basket!"; } else { missingItemsDisplayEl.innerHTML = `<p>items still to get:</p> ${missingItems.join(", ")}`; }

array methods  
.map creates a new array  
.filter keeps elements that pass a condition  
(item) in filter is each element being checked  
!basket.includes(item) means “not in basket”

date object  
new date() creates a date object  
new Date(year, monthIndex, day, hour, minute, second)  
new Date("YYYY-MM-DD") creates from string  
example  
const pastDate1 = new Date(1995, 11, 17, 3, 24, 0);  
const pastDate2 = new Date("2004-10-23");  
difference in milliseconds  
const difference = pastDate2 - pastDate1;  
convert to days  
const days = difference / (1000 * 60 * 60 * 24);  
convert units  
difference / 1000 // seconds  
difference / 1000 / 60 // minutes  
difference / 1000 / 60 / 60 // hours  
difference / 1000 / 60 / 60 / 24 // days  

date methods  
const myDate = new Date();  
myDate.getFullYear(); // 4 digit year  
myDate.getMonth(); // 0-11  
myDate.getDate(); // 1-31  
myDate.getDay(); // 0-6  
myDate.getHours(); // 0-23  
myDate.getMinutes(); // 0-59  
myDate.getSeconds(); // 0-59  
myDate.toISOString(); // utc  
myDate.getTime(); // ms since 1970  

intl.datetimeformat  
const myDate = new Date();  
const formatted = new Intl.DateTimeFormat("en-NZ").format(myDate);  
custom locale and options  
const formattedEs = new Intl.DateTimeFormat("es", { dateStyle: "full" }).format(myDate);  
locales = language and region  
options = what to show  
const options = { hour: "numeric", minute: "numeric", day: "numeric", month: "numeric", year: "numeric", weekday: "long", hour12: true, timeZoneName: "short", timeZone: "America/New_York" };  
const formatted2 = new Intl.DateTimeFormat("en-US", options).format(myDate);  

birthdate example  
const birthDate = new Date("1970-10-23");  
const options = { day: "numeric", month: "long" };  
const birthday = new Intl.DateTimeFormat("en-NZ", options).format(birthDate);  
console.log(`my birthday is on the ${birthday}`);  

alternate  
const mybirthMonth = new Intl.DateTimeFormat("en-NZ", { month: "long" }).format(birthDate);  
console.log(`my birthday is on the ${birthDate.getDate()} of ${mybirthMonth}`);  

use full format when displaying full date  
use parts when customizing text  
