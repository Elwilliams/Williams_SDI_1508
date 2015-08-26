/**
 * Created by EWilliams on 8/23/15.
 */
//Erica Williams Functions Assignment//
// Week 4 SDI 1508//

//The Powerball has (5) random numbers between 1 and 59 plus (1) Powerball between 1 and 35//
//The Florida Lottery has 6 random numbers between 1 and 53//
//No numbers may repeat for either//

//Start Main code//

var lotteryType = prompt("Which lottery results do you want? \nPlease enter either Powerball or Florida Lottery");
//establish the variable lotteryType and users response.
console.log ("Which lottery results do you want? \nPlease enter either Powerball or Florida Lottery");//print user prompt to the console.
console.log("The user entered " + lotteryType);//print to the console the user's response with context string.

//Stop main code//

//Start function for a loop if user clicks last prompt//
function valType (mustEnter) { //defining the function

    var timesUserClicked = 1;//establish user clicking past prompt as a term.

    while (mustEnter === "") { //establishing the loop

        mustEnter = prompt("This cannot be left blank. \nPlease enter Powerball or Florida Lottery");//Prompt message for user

        timesUserClicked++;// establish a condition for the user just clicking ok without answering

        if (timesUserClicked === 10) { //establish after 10 clicks the user needs to reload... No numbers
            console.log("Please reload the page, The Type of Lottery must be chosen to deliver the correct result");
            break;//mark the break of the loop
        }
    }
    return mustEnter;
}

//End Function for a loop if the user clicks past prompt.

// Start function for a math object to create a random number//
function randomLotteryNum (max,min,num) {

    var randomLotNum = [];
    //Formula used (Max-Min) + 4

    for (var x = 0; x < num; x++) {
        randomLotNum[x] = Math.random() * (max - min) + 4;// To get a random number between 1 and 53
        randomLotNum[x]= Math.round(randomLotNum[x]); // To set the array to the random number and to the nearest whole number.
    }
    return randomLotNum;// out process from the function that gives us the random numbers///
}
// End function to create a random number
// Start Main Code

valType (lotteryType);//call function
console.log ("You entered " + lotteryType + " if it was Powerball or Florida Lottery your numbers will appear, if not reload the page");
//prints users response and if it matches one of the two possible values we will get random numbers.

var ranNumber; // variable for printing numbers to console.

if// conditional to choose The Florida Lottery
(lotteryType === "Florida Lottery") {/// if the user entered Florida Lottery correctly, they get the numbers..
    ranNumber = randomLotteryNum (53,1,6);
    console.log ("The Florida Lottery Numbers are " + ranNumber);

}else if //conditional to choose Powerball
(lotteryType === "Powerball") { ///if the user entered Powerball correctly, they get the numbers.
    ranNumber =randomLotteryNum (59,1,5);
    console.log ("The Powerball numbers are " + ranNumber);
    ranNumber =randomLotteryNum (35,1,1);
    console.log ("And the Powerball is" + ranNumber);
}
//End of conditional to generate correct numbers

console.log ("Did you win?");// closing comments

//end of code

