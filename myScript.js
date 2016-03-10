function hello()
{
  document.getElementById("hello").innerHTML = "Hello World";
}
function namegreet(){
  var name = prompt("What is your name?");
 document.getElementById("namegreet").innerHTML = "Hello "+name;
}
function namegreetanb (){
  var name = prompt("What is your name?");
  if (name == "alice" || name == "bob") {
 document.getElementById("namegreetanb").innerHTML = "Hello "+name;
  } else{
     document.getElementById("namegreetanb").innerHTML = "Hello";   
  }

}
function sumn () {
	var n=parseInt(prompt("number to add"));
  document.getElementById("sumn").innerHTML = "the sum of numbers upto " + n + " is " + (n*(n+1)/2);
}
function sum3n5(){
	var n=parseInt(prompt("entet the special number"));
  var sum = 0;
  for (i=0;i<n;i++){
    if ((i%3 === 0 && i%5 !== 0) || (i%3 !== 0 && i%5 === 0)) { 
      sum += i; 
    }
  }
  document.getElementById("sum").innerHTML = "The result is " + sum;
}
function multiplication(m,n){
  var m=parseInt(prompt("entet the number"));
  var till = 12;
  var full = "";
  
  for (i=1;i<=till;i++)
  {
    full += m + " x " + i + " = " + m*i + "<br/>";
  }
  document.getElementById("full").innerHTML = full;
}

function leapyear(){
	var yr=parseInt(prompt("type the year"));
	var next=100;
    var lpyear="";
    while(next>0){
		if(yr % 4 == 0 && (yr % 100 !== 0||(yr % 100 == 0 && yr % 400 == 0)))
	     {
            lpyear += yr+",";
            next--;
         } 
         yr+=1; 
        
     }

document.getElementById("lpyear").innerHTML = lpyear;
}