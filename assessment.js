// PART 1

// *************
// * PROBLEM 1 *
// *************

// Given the following nested functions:
// !!!!!!!!! Don not use the console.log()!!!!!!!!!!!!!!

function daBears() {
    var isFurry = true;

    function papaBear() {
        var porridge = "Too Hot!";
        var chair = "Too Big!";
        var bed = "Too Hard!";
        var feeling = "Angry";

        function mamaBear() {
            var porridge = "Too Cold!";
            var bed = "Too Soft!";

            function babyBear() {
                var porridge = "Just right!";
                var chair = "Just right!";
                var bed = "Just right!";
                var feeling = "Whiny";
                var sleepy = "Very yes";
            }
        }
    }

    function goldilocks() {
        var feeling = "Hungry";
        var isFurry = false;
        var isDinner = true;
    }
}

// Remove entries from the following arrays until only correct answers remain.
// A correct answer will be an array of strings that are function names.

// Which function(s) access the "chair" variable and get "Too Big!"
// (Delete wrong answers, leave correct ones)

var fairyTale1 = ["papaBear", "mamaBear", "babyBear"];

// Which function(s) access the "feeling" variable and get "Hungry"
// (Delete wrong answers, leave correct ones)

var fairyTale2 = ["goldilocks"];

// Which function(s) access the "porridge" variable and get "Too Cold!"
// (Delete wrong answers, leave correct ones)

var fairyTale3 = [ "papaBear", "mamaBear"];

// Which function(s) access the "sleepy" variable and get undefined
// (Delete wrong answers, leave correct ones)

var fairyTale4 = [];

// Which function(s) access the isFurry variable and get true
// (Delete wrong answers, leave correct ones)

var fairyTale5 = ["daBears", "papaBear", "mamaBear", "babyBear", "goldilocks"];


// *************
// * PROBLEM 2 *
// *************

// Write a constructor function called Vehicle.  Vehicle should have a property
// called gasRemaining that is equal to 100.

var Vehicle = function(){
    this.gasRemaining = 100;
}

// Next, assign a function called drive to the Vehicle prototype.  When invoked,
// drive should subtract 25 from the gasRemaining property of any Vehicle your constructor
// function creates.

Vehicle.prototype.drive(){
    this.gasRemaining = this.gasRemaining - 25;
}

// Create 2 new Vehicles with the constructor function you made: one called "charger",
// the other called "mustang".  Using implicit context, invoke the drive method on
// "charger" once, and invoke it twice on "mustang".

// CODE HERE...

var charger = new Vehicle();
var mustang = new Vehicle

charger.drive();
mustang.drive();
mustang.drive();






// -----------------------------------------------------------------------------

// *************
// * PROBLEM 3 *
// *************


// For this problem, you will need to add a method to the String prototype named
// "grammarPolice".  When called on a string, "grammarPolice" will return a new string
//  where the first letter of every word is capitalized, while reverting the remainder
// of each word to lowercase.

// For example: "OH HELLO THERE" becomes "Oh Hello There"

// Your method may be passed punctuation, numbers or other non-letter characters
// and should neither modify them nor break when encountering them.




// CODE HERE...

String.prototype.grammarPolice(str){
    var arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {

        //use regex instead for non alphanumeric chars

        if (typeof arr[i][0] !== "number" && typeof arr[i][0] !== "," ){
           arr[i][0].toUpperCase() 
        }
        
    }

    str = arr.join(" ");

    return str
}



// *************
// * PROBLEM 4 *
// *************

// Write a function called valueType that has two parameters. It accepts two
// arguments. Your function will needto compare the passed-in values 
// and return a string based on that comparison, as follows:

// If the arguments are of the same type and have the same value, return "Exactly the same"

// If the arguments have the same value but are of different types, return "Same value, different types"

// In all other cases, return "Different values"

// CODE HERE...

function valueType (arg1, arg2){

    var condition1 = typeof arg1
    var condtion2 = typeof arg1


    if (condition1 === condtion2 && typeof arg1 === "string") {
        if (arg1 === arg2) {
            return "Exactly the same"
        }
    }

     if (condition1 === condtion2 && typeof arg1 === "number") {
        if (arg1 === arg2) {
            return "Exactly the same"
        }
    }

    if (Arra.isArray(arg2) && Arra.isArray(arg1)) {

        if (arg1.length !== arg1.length) {
            return "Different values"
        }

        for (var i = 0; i < arg1.length; i++) {
            var isEqual
            if (arg1[i] !== arg2[i]){
                return "Different values"
            } 
        }

        return "Exactly the same"

    }

    if (+arg2 && +arg2 && (+arg2 === +arg2)){
        return "Same value, different types"
    }


    if (condition1 === "object" && condition2 === "object") {

        if (Object.keys(arg1).length!== Object.keys(arg2).length){
        return "Different values"
        }



        for(var key in arg1){

            if(arg1[key] !== arg2[key]){
                return "Different values"
            }

        }

        return "Exactly the same"

    }

    if ((Array.isArray(arg1) && Array.isArray(arg2)=== false){
        ///loop through and return different if not equal

        //otherwise return "Same value, different types"



    }

    if (Array.isArray(arg2) && Array.isArray(arg1)=== false)) {

        ///loop through and return different if not equal

        //otherwise return "Same value, different types"


    }

    

    return "Different values"
   
}

// *************
// * PROBLEM 5 *
// *************

// Below is a variable called elephant which has been assigned an
// object with a name.

// Function large currently returns the following:
// 'My name is ' + this.name + ' and I am very heavy!'

// You must use explicit binding.
// In a variable called boundToElephant,
// assign it the value of the large function BOUND to the elephant object.

// When boundToElephant gets called, it should return this exact string:
// 'My name is Horton and I am very heavy!' (The above instructions should make this work.  No code needed for this paragraph)

var elephant = {
    name: 'Horton'
}
function large() {

    return 'My name is ' + this.name + ' and I am very heavy!'
}
  // CODE HERE...

  var boundToElephant = large.bind(elephant)

// *************
// * PROBLEM 6 *
// *************

// Write a function called deathStar.
// deathStar will take in two parameters:
// capacity (Function) and crew (object).
// Use explicit binding to give capacity the context of crew
// and return the bound function.

// CODE HERE...

function deathStar(capacity, crew){

   var fn = capacity.bind(crew);

   return fn
}


// *************
// * PROBLEM 7 *
// *************

// Create a function called accountingOffice.
// accountingOffice will take in a parameter:
// assets (Number),
// then return a closure function:
// The closure function will take in a parameter: liabilities (Number)
// The closure function will return the combined value of assets and liabilities.

// CODE HERE...


function accountingOffice (assets){

    var closureVar = assets;

    return function (liabilities){
        return closureVar - liabilities
    }


}
