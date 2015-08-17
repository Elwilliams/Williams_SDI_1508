/**
 * Created by EWilliams on 8/17/15.
 */
//SDI Week 3 **1508**//
//Erica Williams//
//Conditionals Week 3 assignmnet//

// Balance payoff decider //
// Prompt 1 = amount of money to use
// Prompt 2 = Number of Credit Cards
// Prompt 3 = amount of debit
// Prompt 4 = highest balance
// Prompt 5 = lowest balance

//define variable cashOnHand with a user prompt. Print to the console both the statement and the user's answer with a context string//
var cashOnHand = prompt ("Please enter the amount of money you want to use to pay off your balances? ");
console.log ("Please enter the amount of money you want to use to pay off your balances? ");
console.log ("The amount of cash to pay of debit is " + cashOnHand);

//establish a second prompt if the user leaves it blank.
    if (cashOnHand === ""){
    cashonHand = prompt(Number("You must enter a value in this field, please try again.\nPlease enter the amount of cash you have to pay off debt?"));

    } else if (cashOnHand === 0){
    cashOnHand = prompt("If you have no cash to pay down debit, you cannot pay off any credit cards.");

}

var noOfCards = prompt ("Please enter the number of credit cards you currently have");
console.log ("Please enter the number of credit cards you currently have");
console.log ("The number of cards = " +noOfCards);

if (noOfCards === ""){
    noOfCards = prompt ("You must enter a value in this field, please try again. \nPlease enter the amount of credit cards you have");
}

