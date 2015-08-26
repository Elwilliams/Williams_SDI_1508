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
function valType (lotteryType) { //defining the function

    var timesUserClicked = 1;//establish user clicking past prompt as a term.

    while (lotteryType === "") { //establishing the loop

        lotteryType = prompt("This cannot be left blank. \nPlease enter Powerball or Florida Lottery");//Prompt message for user

        timesUserClicked++;// establish a condition for the user just clicking ok without answering

        if (timesUserClicked === 10) { //establish after 10 clicks the user needs to reload... No numbers
            console.log("Please reload the page, The Type of Lottery must be chosen to deliver the correct result");
            break;//mark the break of the loop
        }
        console.log("You entered " + lotteryType + ".");//console message for no name entered //print user response to prompt
    }
}

//End Function for a loop if the user clicks past prompt.
//Starting Main Code

valType (lotteryType);//call function
console.log (lotteryType);// print the users input for lotteryType.

//Pause Main Code
//Start function for entering a value other than Powerball or Florida Lottery

function correctVal (rightValue) { //establish the function

        var rightValue ="Powerball || Florida Lottery"; //establish variable rightValue and it's values.

        while (lotteryType != rightValue){ // Establish a loop that will not break as it must be entered correctly

            lotteryType = prompt ("You can only enter either Powerball or Florida Lottery"); //prompt user to enter the correct value
            console.log ("You can only enter either Powerball or Florida Lottery"); //print mesage to the console
        }
}
//End Function for entering an incorrect value in the lotteryType//
//Start Main Code

correctVal (lotteryType);//call function
console.log (lotteryType);//print to the console

var ranNum;// variable for printing numbers to console.

// Pause main code
// Start function for a math object to create a random number//
function randomLotteryNum(max, min) {

    var ranLotArray = []; //unused array variable as it kept throwing undefined out
    //remained in code for future correction//however, it works without it...

    //Formula used (Max-Min) + 5

    var randomLotNum = Math.random() * (max - min) + 5;// To get a random number between 1 and 53
    randomLotteryNum =Math.round(randomLotNum); // To set the array to the random number and to the nearest whole number.

    return randomLotteryNum;// out process from the function that gives us the random numbers///
}
// End function to create a random number

// Start conditionals in Main Code

if// conditional to choose The Florida Lottery
(lotteryType === "Florida Lottery") {/// if the user entered Florida Lottery correctly, they get the numbers..
    console.log("Great! The Florida Lottery Numbers are coming right up"); //establishing the florida lottery formula
    ranNum = randomLotNum (53, 1, 6); //calling function to create the florida lotteries random numbers, Number 1
    console.log ("The Florida Lottery Numbers are " +  ranNum);
    ranNum = randomLotNum (53, 1, 6); //Number 2
    console.log (ranNum);
    ranNum = randomLotNum (53, 1, 6); //Number 3
    console.log (ranNum);
    ranNum = randomLotNum (53, 1, 6);//Number 4
    console.log (ranNum);
    ranNum = randomLotNum (53, 1, 6);//Number 5
    console.log (ranNum);
    ranNum = randomLotNum (53, 1, 6);//Number 6
    console.log (ranNum);

}else if//conditional to choose Powerball

(lotteryType === "Powerball") { ///if the user entered Powerball correctly, they get the numbers.
    console.log("Great! The Powerball Numbers are coming up....");// establishing the Powerball formula
    ranNum = randomLotNum (59,1,5); // Calling function for random number
    console.log ("The Powerball Numbers are ");// Number 1 w/ intro message
    console.log (ranNum);
    ranNum = randomLotNum (59,1,5); // Number 2
    console.log (ranNum);
    ranNum = randomLotNum (59,1,5); //Number 3
    console.log (ranNum);
    ranNum = randomLotNum (59,1,5);// Number 4
    console.log (ranNum);
    ranNum = randomLotNum (59,1,5); //Number 5
    console.log (ranNum);
    ranNum = randomLotNum (59,1,5); //Powerball/ number 6
    console.log ("And the Powerball is " + ranNum)
}
//End Conditional...
