/**
 * Created by EWilliams on 8/23/15.
 */
//Erica Williams Functions Assignment//
// Week 4 SDI 1508//

//The Powerball has (5) random numbers between 1 and 59 plus (1) Powerball between 1 and 35//
//The Florida Lottery has 6 random numbers between 1 and 53//
//No numbers may repeat for either//

//Start Main code//

var lotteryType = prompt("Which lottery results do you want? \nPlease enter either Powerball or Florida Lottery");//establish global variable w/ a user prompt for which type of result the user needs.
//establish the variable lotteryType and users response.
console.log ("Which lottery results do you want? \nPlease enter either Powerball or Florida Lottery");//print user prompt to the console.
console.log("The user entered " + lotteryType);//print to the console the user's response with context string.

//Pause main code//
//Start function for a loop if user clicks past prompt//
//The formula for a random number will only work with 2 exact values, "Powerball or Florida Lottery"//
function valType (mustEnter) { //defining the function

    var timesUserClicked = 1;//establish user clicking past prompt as a term.

    while (mustEnter === "") { //establishing the loop if user enters nothing

        mustEnter = prompt("This cannot be left blank. \nPlease enter Powerball or Florida Lottery");//Prompt message for user if the do not enter a value

        timesUserClicked++;// Establish a count on the amount of times the user clicks

        if (timesUserClicked === 10) { //establish after 10 clicks the user needs to reload the page...
            console.log("Please reload the page, The Type of Lottery must be chosen to deliver the correct result");
            break;//mark the break of the loop
        }
    }
    return mustEnter; //returned value from function.
}

// End Function for a loop if the user clicks past prompt.
// Start function for a math object to create a random number//

function randomLotteryNum (max,min,num) { //establish the function, name of function, and the terms to call below//

    var randomLotNum = [];/// establish a variable array for the numbers
    //Formula used to generate a random lottery number (Max-Min) + num -2

    for (var x = 0; x < num; x++) { //loop for creating multiple random numbers
        randomLotNum[x] = Math.random() * (max - min) + num - 2;// Math object formula to calculate the numbers.
        randomLotNum[x] = Math.round(randomLotNum[x]); //Additional math section to round to the nearest whole number.

    }
    return randomLotNum;// value from the function.
}
// End function to create a random number
// Start Main Code

valType (lotteryType);//call function valType
console.log ("You entered " + lotteryType + " if it was Powerball or Florida Lottery your numbers will appear, if not reload the page");
//prints users response and if it matches one of the two possible values we will get random numbers, if not user needs to reload and enter the exact value.

var ranNumber; // variable for printing numbers to console.

if// conditional if Florida Lottery results were asked for by user
(lotteryType === "Florida Lottery") {/// if the user entered Florida Lottery correctly, they get these lottery numbers..
    ranNumber = randomLotteryNum (53,1,6); //call returned value from function randomLotteryNum, randomLotNum with terms of Max 53, Min 1, 6 times.
    alert ("The Florida Lottery Numbers are " + ranNumber + "\nDid you win?");//alert the user what the numbers are
    console.log ("The Florida Lottery Numbers are " + ranNumber); //deliver lottery numbers with context string

}else if //conditional if Powerball results were asked for by the user.
(lotteryType === "Powerball") { ///if the user entered Powerball correctly, they get these lottery numbers.
    ranNumber =randomLotteryNum (59,1,5); //call returned value from function randomLotteryNum, randomLotNum with terms of Max 59, Min 1, 5 times.
    alert ("The Powerball numbers are " + ranNumber + " The next window will reveal the Powerball");
    console.log ("The Powerball numbers are " + ranNumber); //print to the console the results with a context string.

    ranNumber =randomLotteryNum (35,1,1);//call returned value from function randomLotteryNum, randomLotNum with terms of Max 35, Min 1, 1 time.
    alert ("The Powerball is "+ ranNumber + " \nDid you win?");//alert the user of the Powerball number
    console.log ("And the Powerball is " + ranNumber);//print to the console the Powerball number with context string.
}
//end of code//

