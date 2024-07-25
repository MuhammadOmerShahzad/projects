/*  var n=prompt("Enter Signal Color")

 if(n=="red")
 {
    document.write("<h2>Must STOP!</h2>")
 }
 else if(n=="yellow")
 {
    document.write("<h2>READY TO MOVE</h2>")
 }
 else if("n==green")
 {
    document.write("<h2>GO!</h2>")
 }
 else {
    document.write("WRONG SIGNAL COLOR.")
 } */

  /*   var a = 4;
    if (++a === 5) {
    alert("given condition for variable a is true");
    } */

/* var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
} */

/* var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
} */

/* var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
} */

/* if (true){

    alert("True");
    }
    if (false){
    alert("False");
    } */

/*     if("car" < "cat"){

        alert("car is smaller than cat");
        } */

/* var a=prompt("Enter Subject 1 Marks:")
var b=prompt("Enter Subject 2 Marks:")
var c=prompt("Enter Subject 3 Marks:")

var sum = parseFloat(a) + parseFloat(b) + parseFloat(c);

document.write("<h1>Mark Sheet</h1><br><br>")

var percent= (sum/300)*100

if(percent>=80)
{
document.write("<p>Total Marks: 300</p><br>")
document.write("<p>Obtained Marks: " + sum +"</p><br>")
document.write("<p>Percentage: "+ percent +"%</p><br>")
document.write("<p>Grade: A</p><br>")
document.write("<p>Execelent!</p><br>")
}
else if(percent>=70) {
    document.write("<p>Total Marks: 300</p><br>")
    document.write("<p>Obtained Marks: " + sum +"</p><br>")
    document.write("<p>Percentage: "+ percent +"%</p><br>")
    document.write("<p>Grade: B</p><br>")
    document.write("<p>Good</p><br>")
}
else if(percent>=60)
{
document.write("<p>Total Marks: 300</p><br>")
document.write("<p>Obtained Marks: " + sum +"</p><br>")
document.write("<p>Percentage: "+ percent +"%</p><br>")
document.write("<p>Grade: C</p><br>")
document.write("<p>Needs to be Improved!</p><br>")
}
else if(percent<60)
{
    document.write("<p>Total Marks: 300</p><br>")
    document.write("<p>Obtained Marks: " + sum +"</p><br>")
    document.write("<p>Percentage: "+ percent +"%</p><br>")
    document.write("<p>Grade: Fail</p><br>")
    document.write("<p>Remarks: Sorry</p><br>")
} */

/* var a=4
var guessnumber=prompt("Enter a Number(1-10): ")

if(a==parseInt(guessnumber))
{
    document.write("You have Guessed Right!");
}
else if (++a==parseInt(guessnumber))
{
    document.write("Wrong,Close enough!");  
}
else 
(
    document.write("Wrong Guess!")
) */

/* var input=prompt("Enter Number to check if even/odd: ")

if(parseInt(input)%2==0)
{
    alert("Your Number is EVEN!")
}
else
(
    alert("The Number is ODD!")
) */

/* var num1=prompt("Enter Number 1: ")
var num2=prompt("Enter Number 2: ")
var operator=prompt("Enter Operator: ")

if(operator=="+")
{
    document.write("Number 1 is: "+ num1 + "<br>")
    document.write("Number 2 is: "+ num2 + "<br>")
    var sum=parseInt(num1) + parseInt(num2)
    document.write("Sum is: " + sum)
}
else if(operator=="-")
{
    document.write("Number 1 is: "+ num1 + "<br>")
    document.write("Number 2 is: "+ num2 + "<br>")
    var sum=parseInt(num1) - parseInt(num2)
    document.write("Subtraction is: " + sum)
}
else if(operator=="x")
{
    document.write("Number 1 is: "+ num1 + "<br>")
    document.write("Number 2 is: "+ num2 + "<br>")
    var sum=parseInt(num1) * parseInt(num2)
    document.write("Multiplication is: " + sum)
}
else if(operator=="/")
{
    document.write("Number 1 is: "+ num1 + "<br>")
    document.write("Number 2 is: "+ num2 + "<br>")
    var sum=parseInt(num1) / parseInt(num2)
    document.write("Division is: " + sum)
}
else  if(operator=="%")
{
    document.write("Number 1 is: "+ num1 + "<br>")
    document.write("Number 2 is: "+ num2 + "<br>")
    var sum=parseInt(num1) % parseInt(num2)
    document.write("MOD is: " + sum)
}
else 
{
    document.write("WRONG OPERATOR!");
} */

/* var a=prompt("Enter Number: ")

if(parseInt(a)==0)
{
    document.write("Number is Zero!");
}
else if (parseInt(a)>1)
{
    document.write("Number is Positive");
}
else 
{
    document.write("Number is Negative");
} */


/*     var char=prompt("Enter Character: ")
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') 
    {
        document.write(true) ;
      } 
      else {
        document.write(false);
      } */

/* var password=prompt("Enter password: ")
pass1='Omer'

if(password!=null)
{
    password=prompt("Re-Enter your Password")

    if(pass1==password)
{
    document.write("The password you entered matches the original password.")
}
    else 
(
    document.write("Password is Incorrect")
)
} */


/*  inputTime = parseInt(prompt("Enter time in 24-hour format (e.g., 1900):"));


if (inputTime < 0 || inputTime > 2359) {
  document.write("Invalid time format");
} else {

   
   hours = (inputTime / 100);
  minutes = inputTime % 100;

  let period = "AM";
  let displayHours = hours;
  
  if (hours >= 12) {
    period = "PM";
    if (hours > 12) {
      displayHours -= 12;
    }
  } else if (hours === 0) {
    displayHours = 12;
  }

  document.write(displayHours+":"+minutes + minutes + period);
}
 */
