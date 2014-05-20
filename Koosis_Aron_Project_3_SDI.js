//Aron Koosis
//Project 3 SDI		 	  		  	  		  		  		  		  		
//1405


//Global Variables:

var javaAliens = "The aliens from java are trying to make me fail this course.";
var javaPain = "The pain caused by not getting a passing grade on an assignment.";
var javaNum = 8;

// function:


javaEvil = confirm ("Are the aliens evil and determined in their quest?");
if (javaEvil === true) {
	console.log ("Let us fight back!");
	}else{
	console.log("Let us leave.");
};	
var javaAttack = prompt("Please enter number of daily attacks between 1 and 100.");
javaAttack = parseInt (javaAttack);
var totalAttacks = javaAttack * 7;
console.log("That would make " + totalAttacks + " per week.");


var painLevel = function(javaAttack, hoursworked, grade) {
var painLevel = javaAttack * hoursworked * grade;
	console.log("The number of attacks multiplied by the hours worked and multiplied by the grade equals the amount of pain which comes out to be " + painLevel);
	return(painLevel);
	
};	
var armyCreate = function(numberofsoldiers, typesofsoldiers) {
	console.log("One way to fight the aliens is with an army");
	console.log("We have " + numberofsoldiers + " soldiers who are " + typesofsoldiers);
var armyFight = true;
if(armyFight === true){
	console.log("Then there is a chance for success");
	}else{
	console.log("We lose before we begin.");
};
	return(armyCreate);

};
//Array


var nameAlien = ["Basic","Dos","C Plus","Apple","Android"]; 
	console.log("Interesting Alien name is " + nameAlien[3]);

var alienWeapons = ["Toshiba","HP","IBM","Acer","Dell"];
	console.log("The amount of Alien weapons is " + alienWeapons.length + ". Then if you add two more this is what you get:");
	alienWeapons[5] = "Macintosh";
	alienWeapons[6] = "Gateway";
	console.log(alienWeapons);
	console.log ("The new amount of Alien weapons is " + alienWeapons.length);
	
var alienHelp;
alienHelp = prompt("What could you bring to the fight against the aliens", "Enter Knowledge or Determination.");
var winWar = function(Skill, Trait) {
	console.log("The recipe to win the war is " + Skill + " plus " + Trait + " plus " + alienHelp);	 

if(alienHelp === Knowledge) {
	console.log("That's very helpful to the cause.");
	}else{
	console.log("Great! Determination is the most important of all.");
};	
	
while(alienHelp === Knowledge){
	console.log("You will need determination too.");
	}else{
	console.log("You will need knowledge as well.");				
};	
return(winWar);
};	
	
	
//local variables:

var javaLoop = "A weapon used against the aliens.";
var painReduce = "A system that helps to reduce alien attacks.";
var focusFactor = "A company working to solve the alien invasion.";	

//while Loop

var alienRay = 100
while(alienRay > 0) { 	
	console.log (alienRay + " - The number of headaches given by the alien creatures.");
  	alienRay--;
};
	console.log("Finally, fewer headaches caused by the alien creatures.");
	
var seenAlien;
seenAlien=prompt("Have you seen the aliens?");
if (seenAlien === "Yes"){
	console.log("Don't stick around");
	}else{
	console.log("No worries.");
};	
	
console.log("hello world")
	
	
	
// function calls
painLevel(javaAttack, 8, 6);
armyCreate(10, "Teachers");
armyCreate(30, "Students");	  		  	
winWar(Focus,Patience);	  	  		  	
	  	