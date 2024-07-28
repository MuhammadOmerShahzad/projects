/*  var names="Hyderabad"

 var islam=names.replace("Hyder","Islam")

 document.write(islam);
 */
/* 
var num="472";
document.write("Value: "+ num+ "<br>Type: "+ typeof(num)+"<br><br>")
document.write("Value: "+ num+ "<br>Type: "+ typeof(parseInt(num))+"<br><br>") */

/* var password = prompt("Enter a password (at least 8 characters, letters and numbers, cannot start with a number):");

var isValid = false;

while (!isValid) {
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
  } else if (!isNaN(password[0])) {
    alert("Password cannot start with a number.");
  } else if (!/[a-zA-Z]/.test(password)) {
    alert("Password must contain at least one letter.");
  } else if (!/[0-9]/.test(password)) {
    alert("Password must contain at least one number.");
  } else {
    isValid = true;
    break;
  }

  password = prompt("Enter a valid password:");
}

alert("Password is valid!");
 */

/* function validateEmail(email) {
   
    const pattern = /^[^@]+@[^@]+\.[^@]+$/;
    
   
    if (pattern.test(email)) {
        return "Valid email address";
    } else {
        return "Invalid email address";
    }
}


const email = "example@domain.com";
document.write(validateEmail(email)); */

/* var input=prompt("Enter a Number: ");

document.write("Number: "+input);
document.write("<br>");
document.write("Round Value: "+Math.round(input))
document.write("<br>");
document.write("Floor Value: "+Math.floor(input))
document.write("<br>");
document.write("Ceil Value: "+Math.ceil(input)) */

/* var random1= Math.random();
var a=random1*5;
var d=Math.round(a);
document.write("Random Value 1: "+ d + "<br>");
var random2= Math.random();
var b=random1*6;
var c=Math.round(b);
document.write("Random Value 2: "+ c + "<br>"); */

/* var text = "The Quick Brown Fox jumps over the lazy Dog";
var word = text.toLowerCase();
var search = "the";
var split = word.split(" ");
var count = 0;

for (var i = 0; i < split.length; i++) {
    if (search === split[i]) {
        count++;
    }
}

document.write("The word 'the' has appeared: " + count + " times.");
 */

/* const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function numberToWords(num) {
  if (num < 20) {
    return ones[num];
  } else if (num < 100) {
    return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? '-' + ones[num % 10] : '');
  } else if (num < 1000) {
    return ones[Math.floor(num / 100)] + ' hundred' + (num % 100 !== 0 ? ' ' + numberToWords(num % 100) : '');
  } else {
    return 'Number too large';
  }
}

const num = 123;
let result = numberToWords(num);
console.log(result);
 */
/* 
const input = "<p><strong><em>Only print this</em></strong></p>";

const output = input.replace(/<[^>]*>/g, "");

document.write(output);  */

/* var input=16.765
var input2=12.37982
var input3=-9.3079444

var output1=input.toFixed(2)
var output2=input2.toFixed(2)
var output3=input3.toFixed(4)

document.write(output1+"<br>");
document.write(output2+"<br>");
document.write(output3+"<br>");
 */

/* var num=123
document.write("Input Value is: "+ num+"<br>")
var digits = num.toString().split('').map(Number);

document.write("Converted to Single Digits: "+ digits+"<br>")
var sum=0;
for(i=0;i<digits.length;i++)
{
    sum=sum+digits[i];
}
var avg=sum/digits.length

document.write("Average of Input Value is: "+avg+"<br>") */

/* var date=new Date();
document.write("Todays Date is: "+date+ "<br>")
var date1=date.getDate()
//document.write(date1)

if(date1>=16)
{
    document.write("We are in the last days of the month.")
}
else{
    document.write("First fifteen days of the month.")
} */

/*     const currentDate = new Date();
    const elapsedMilliseconds = currentDate.getTime();
    const elapsedMinutes = elapsedMilliseconds / (1000 * 60);
    
    document.write("Current Date: " + currentDate+ "<br>");
    document.write("Elapsed milliseconds since January 1, 1970: " + elapsedMilliseconds+ "<br>");
    document.write("Elapsed minutes since January 1, 1970: " + elapsedMinutes+ "<br>");
     */


/* const currentDate = new Date();


const currentHours = currentDate.getHours();


const oneHourLater = new Date(currentDate);
oneHourLater.setHours(currentHours + 1);


document.write("Current date:", currentDate+"<br>");
document.write("One hour later:", oneHourLater+"<br>");
 */


/* const age = parseInt(prompt("Enter your age:"));

const currentYear = new Date().getFullYear();
const birthYear = currentYear - age;

document.write("Your birth year is:", birthYear);
 */
