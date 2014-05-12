// Peter StClair
// 05/08/14
// SDI Assignment: Project 1


// variables
var themePark = "\"Fun\" Land";
var coaster = "The Hurler";
var parkOpen = true
var numberOfTickets = 4;
var tickets
var myPrompt

 
// output
console.log("The name of the theme park is " + themePark);
console.log(themePark + " is open today");
console.log("The major attraction at \"FUN\" Land is " + coaster);
console.log("It costs " + numberOfTickets + " tickets to ride " + coaster);


		
if (parkOpen === true) {
		console.log("Awesome! You are gonna have a blast!!");
	    }else{
		console.log("Ok just wait outside until the park opens");
};

if (numberOfTickets >= 4) {
		console.log("You may enter the ride");
		}else{
		console.log("You need more tickets to ride");
};

myPrompt = prompt("How many tickets do you have?", "Enter amount here.")
		if (tickets >= 4){
		console.log("Great!");
		}else{
		console.log("Sorry");
};




