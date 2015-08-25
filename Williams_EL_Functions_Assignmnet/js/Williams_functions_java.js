/**
 * Created by EWilliams on 8/23/15.
 */
//Erica Williams Functions Assignment//
// Week 4 SDI 1508//

//The Powerball has (5) random numbers btwn 1 and 59 plus (1) Powerball btwn 1 and 35//
//The Florida Lottery has 6 random numbers btwn 1 and 53//
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

function correctVal (lotteryType) { //establish the function

        var rightValue ="Powerball || Florida Lottery"; //establish variable rightValue and it's values.

        while (lotteryType = ! rightValue){ // Establish a loop that will not break as it must be entered correctly

            lotteryType = prompt ("You can only enter either Powerball or Florida Lottery"); //prompt user to enter the correct value
            console.log ("You can only enter either Powerball or Florida Lottery"); //print mesage to the console
        }
}
//End Function for entering an incorrect value in the lotteryType//
//Start Main Code

correctVal (lotteryType);//call function
console.log (lotteryType);//print to the console
