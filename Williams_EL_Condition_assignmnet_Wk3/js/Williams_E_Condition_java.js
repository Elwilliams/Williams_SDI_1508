/**
 * Created by EWilliams on 8/17/15.
 */
//SDI Week 3 **1508**//
//Erica Williams//
//Conditionals Week 3 assignment//

// Balance payoff decider //
// Prompt 1 = amount of money to use
// Prompt 2 = Number of Credit Cards
// Prompt 3 = amount of debit

//define variable cashOnHand with a user prompt. Print to the console both the statement and the user's answer with a context string//
var cashOnHand = (Number(prompt("Please enter the amount of money you want to use to pay off your balances? ")));
console.log ("Please enter the amount of money you want to use to pay off your balances? ");//print the statement to the console.
console.log ("The amount of cash to pay off debit is " + cashOnHand);//User's answer with a context string.

        //establish a second prompt if the user leaves it blank. printed the statement to the console.
    if (cashOnHand === "") { //if statement if user does not enter a value.
        cashonHand = prompt("You must enter a value in this field, please try again.\nPlease enter the amount of cash you have to pay off debt?")
        console.log("You must enter a value in this field, please try again.\nPlease enter the amount of cash you have to pay off debt?")

        //establish an alert that states if the user enters 0 there is no funds to pay off debit.
    }else if
    (cashOnHand){
        console.log("Great let's move on");
}
// if and else if requirement
//define variable noOfCards with a user prompt. Print to the console both the statement and the user response with a context string.
var noOfCards = prompt ("Please enter the number of credit cards you currently have.");
console.log ("Please enter the number of credit cards you currently have");//print the prompt statement to the console.
console.log ("The number of cards is " +noOfCards);//print to console user response with context string

             //establish a prompt if the user does not answer the question.
         if (noOfCards === ""){ //conditional if the user enters no information
             noOfCards = prompt ("You must enter a value in this field, please try again. \nPlease enter the amount of credit cards you have");
        console.log ("You must enter a value in this field, please try again. \nPlease enter the amount of credit cards you have")
        }else{
             console.log ("Great let's move on to the next question."); //print to console if the user enters any value//
}
// if and else conditional example //
//define variable amtOfDebt and print the statement and the user response with context string to the console.
var amtOfDebt = prompt ("What is the total amount of debit you have?");//user prompt for the user's amount of debt
console.log ("What is the total amount of debit you have?");//print the prompt statement to the log
console.log ("The total debit is "+ amtOfDebt); //print to console the user's total debit

var timesUserClicked = 1;// establish a variable for the user just clicking away from the prompt

        //loop to continue to prompt the user for a value for the amount of debt the user has
        if (amtOfDebt === "") { //establish
            amtofDebt = prompt("You must answer this question, \nHow much debt do you owe?");//prompt the user the enter a value again
            console.log("You must answer this question, \nHow much debt do you owe?");//print to the console.
        }else{
            console.log ("Great let's move on to the next question."); //print to console message for else to move on
        }
//conditional if/else
//establish variable for the amount of debt divided by the number of cards.
var optAverage  = Number(amtOfDebt / noOfCards);//division expression to find the average of debt in relation to the amount of cards.
console.log ("The average debt in relation to the amount of cards is " + optAverage + " per card.");//printed answer with context string

//establish a variable for the total debt less what the user has to pay it off
var debtToCash = Number (amtOfDebt - cashOnHand);// subtraction expression to find the amount of debt left after using all of the users cash for pay down.
console.log ("The difference in debt to cash is " + debtToCash);// print the answer to the console with a context string
alert ("You will have " + debtToCash + " left in debt once you use all available cash to pay down your debt");//alert the user of the amount of debt left after the pay down.

var debtResult;//establish the variable debtResult for a logical operator to alert the user on how to pay off their debt and whether it is all paid.

debtResult  = (debtToCash <= 0) ? "Pay off all your cards, Congratulations you are out of debt" : "Pay off the smallest balance first, then the next smallest, and so on \nUp to the amount of cash you have on hand to pay down debt.";//ternary operator
console. log (debtResult);// print the statement that matches the 2 conditions.
alert (debtResult);//alert the user as to how to pay off their debt based on a ternary conditional operator

//establish a logical operator if user enters 0 for the amount of debt or the number of cards
if (amtOfDebt ==="0" && noOfCards === "0"){ //logical operator for 0's being entered in 2 of the prompts concerning their debt.
    console.log ("You have no debit to pay off!");//print to the console this statement is both statements are true.
}else{
    console.log ("You should pay off all your debt up to amount cash you have to pay debt, starting with the lowest balance and work your way up.");//print this if 1 or both user prompts = 0.
}
//Logical operator requirement
//end of code


