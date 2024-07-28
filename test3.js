/* var array=["SSC","HSC", "BCS","BS","BCOM","MS","M.Phil","PhD"]
document.write("<h2> Qualifications: </h2><br>")
for(i=0;i<array.length;i++)
{
    document.write(i+1+") "+array[i] + "<br>")
} */

/* var names=["Micheal","John","Tony"];
var scores=[320,230,480];
var percent=[64,46,96];

for(i=0;i<names.length;i++)
{
    document.write("Score of "+ names[i]+ " is " + scores[i] + "." + " Percentage: " + percent[i] + "%.<br>")
} */

/* var colors = ['red', 'blue', 'green', 'yellow', 'purple'];


var index = parseInt(prompt("Enter the index to start deletion:"));
var count = parseInt(prompt("Enter the number of colors to delete:"));
    
colors.splice(index, count);
    
document.write(colors)
 */

/* var cities=["Karachi","Lahore", "Islamabad","Quetta", "Peshawar"]

var first=prompt("Enter Index to Start Selecting from: ");
var select=prompt("How many Countries to Select: ")

var arr=cities.slice(first,select)
document.write("Cities List: <br>")
document.write(cities);
document.write("<br><br>")
document.write("Selected Cities List: <br>")
document.write(arr) */

/* var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var uniqueArray = [...new Set(arr1)];

document.write(uniqueArray); 
 */

/* var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th", "st", "nd", "rd"];

for (let i = 0; i < 3; i++) {
  let suffix = o[(i + 1) % 10] || o[0]; // Use correct ordinal suffix
  document.write(`${i + 1}${suffix} choice is ${aCities[i]}`+ "<br>");
}
 */

/* var a = [10,20,4,40,60,70]
var b = [1,2,3,4,5,6,7,8,9,10]

var uniqueArray = [...new Set([...a,...b])];
uniqueArray.sort((a, b) => a - b)

document.write(uniqueArray); */

/* count=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var rev=count.reverse()
var even=[]
var odd=[];
var series=[];
for(i=0;i<=count.length;i++)
{
    if(count[i]%2==0)
    {
        even[i]=count[i]
    }
}
for(i=0;i<=count.length;i++)
 {
    if(count[i]%2!=0)
    {
        odd[i]=count[i]
    }
}
for(i=0;i<=count.length;i++)
{
    if(count[i]%2==0)
    {
        series[i]=count[i]+"k"
    }
}
document.write("Counting: "+ count +"<br>");
document.write("Reverse Counting: "+ rev +"<br>");
document.write("Even: " + even +"<br>");
document.write("Odd: " + odd +"<br>");
document.write("Series: " + series +"<br>"); */
/* 
 var A = [24, 53, 78, 91, 12];

 var maxnum=Math.max(...A)

 document.write("Largest Number in Array is: "+ maxnum) */

/* var A = [20,53,78,4,91,12];

var sortedarray=A.sort((a, b) => a - b);

document.write(sortedarray); */

/* var A = ["cake", "apple pie", "cookie", "chips", "patties"]

var option=prompt("Please Enter Bakery Item: ")
x=1;
for(i=0;i<A.length;i++)
    {
    if(option==A[i])
    {
        alert("Bakery Iten: "+ option + " has been found at Index: "+ i);
        x=0;
    }
}
if(x=1)
{
    alert("Bakery Item: "+ option + " is not Available.");
}
 */
