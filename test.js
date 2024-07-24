/* string="Javascript Land...\nHappy Coding!"

alert(string)
 */

/* var n="Jhone Doe"

alert("Name: " + n)

var age=15
alert(age + " years old")

var string="Certified Mobile Developer"
alert(string); */

 var email;
email="omershahzad1010@gmail.com"
string="My email address is: " + email;

alert(string); 

document.write("Yah! I can write HTML through Javascript.")

 var age=23;

string="i am " + age + " years old.";

alert(string); 

var birthyear=2002;
string="Data Type of my declared variable is: "+ typeof birthyear;
document.write("My Birth Year is: " + birthyear + "<br>" )
document.write(string);


document.write("<h1>Rules for naming JS Variables:</h1>")
document.write("<p>Variables can only contain alphabets,numerics,symbols and characters</p><br>")
document.write("<p>For example $my_1stVariable.</p><br>")
document.write("<p>Variables must begin with a alphabet or symbol For example $name, _name or name</p><br>")
document.write("<p>Variable names are case Sensitive</p><br>")
document.write("<p>Variable names should not be JS keywords</p><br>")

 a=3;
b=5;
sum=a+b;
sub=a-b;
mul=a*b;
div=a/b;
modu=a%b;
document.write("Sum of " + a + " and "+ b + " is: " + sum + "<br>")
document.write("Subtraction of " + a + " and "+ b + " is: " + sub + "<br>")
document.write("Multiplication of " + a + " and "+ b + " is: " + mul + "<br>")
document.write("Division of " + a + " and "+ b + " is: " + div + "<br>")
document.write("Modulus of " + a + " and "+ b + " is: " + modu + "<br>") 

 var a;
type= typeof a;
document.write(a);
a=5;
document.write("The Initial Value of a is: " + a+ "<br>");
a=++a;
document.write("The Value after Increment of a is: " + a + "<br>");
a=a+7;
document.write("The Value after Adding 7 in a is: " + a + "<br>");
a=--a;
document.write("The Value after Decrement of a is: " + a + "<br>");
a=a%3
document.write("The Current Value (Remainder) of a is: " + a + "<br>"); 


 let a = 10;

document.write("The value of a is:" + a + "<br>");
document.write("...................................<br>");
document.write("The value of ++a is:" +  ++a+ "<br>");
document.write("Now the value of a is:" + a+ "<br>"+ "<br>");

document.write("The value of a++ is:" + a+++ "<br>");
document.write("Now the value of a is:" + a+ "<br>"+ "<br>");

document.write("The value of --a is:" + --a+ "<br>");
document.write("Now the value of a is:" + a+ "<br>"+ "<br>");

document.write("The value of a-- is:" + a--+ "<br>");
document.write("Now the value of a is:" + a+ "<br>"+ "<br>");
 

var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write(--a+ "<br>");
document.write(--a - --b+ "<br>");
document.write(--a - --b + ++b+ "<br>");
document.write(--a - --b + ++b + b--+ "<br>");
