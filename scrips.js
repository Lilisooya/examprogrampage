/*alert("Welcome"); 
console.log("Welcome");
confirm("are you sure you want to continue?");
var age=prompt("Type your age");
if (age>18){
    alert("Is an adult")
}
else{
    alert("Is underage")
}*/

/*const pi=3.141592;
var radius=prompt("Type the radius");
if (radius<0){
    alert("Please type a positive value.");
}
else{
var volume=(4/3)*(pi)*(radius**3);
alert(volume)
}*/
/*var number=prompt("Type the number");
if (number<0) {
    alert("This number is negative.");
}
else if (number>0){
    alert("This number is positive");

}
else{
    alert("This number is zero");
}*/
/*var limit = prompt("Type the limit:")
let i= 0 ;
for (i=2;i<=limit; i ++){
    console.log(i);
}*/

/*let limit= Number(prompt("Enter the limit for the table of 3:"));
console.log("Using for the loop:");
for(let i= 0; i <=limit; i++){
  console.log("3 x " + i + " = " + (3 * i));
} 
console.log ("Using while loop:");
let j = 0;
while (j<=limit) {
    console.log("3 x " + j + " = " + (3 * j));
    j ++;
}*/

function sendMail(){
    document.getElementById("mailsucess").innerHTML= 'Thanks for corfirm your mail.'
}

function guessNumber(number, random) {
    if (number >= 0 && number <= 100) {
        console.log("Número generado por el sistema:", random);
  
      if (number == random) {
        
        document.getElementById("answer").innerHTML = "Congrats! This is the number!";
      }
      // Otherwise...
      else {
        
        document.getElementById("answer").innerHTML = "Oh no! Is not the number. Try again.";
      }
  
    }
   
    else {
 
      document.getElementById("answer").innerHTML = "Please, type a valid number.";
    }
  }
  