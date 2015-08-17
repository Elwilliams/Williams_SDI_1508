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


//define variable cashOnHand with a user prompt. Print to the console both the statement and the user's answer with a context string//
var cashOnHand = prompt ("Please enter the amount of money you want to use to pay off your balances? ");
console.log ("Please enter the amount of money you want to use to pay off your balances? ");//print the statement to the console.
console.log ("The amount of cash to pay of debit is " + cashOnHand);//User's answer with a context string.

        //establish a second prompt if the user leaves it blank. printed the statement to the console.
    if (cashOnHand === ""){
    cashonHand = prompt("You must enter a value in this field, please try again.\nPlease enter the amount of cash you have to pay off debt?");
    console.log ("You must enter a value in this field, please try again.\nPlease enter the amount of cash you have to pay off debt?");
        //establish an alert if there are no funds, nothing can be paid off.
    } else if (cashOnHand === "0"){
    cashOnHand = alert("If you have no cash to pay down debit, you cannot pay off any credit cards.");
    console.log ("If you have no cash to pay down debit, you cannot pay off any credit cards.");//print alert statement to the console.
}
//define variable noOfCards with a user prompt. Print to the console both the statement and the user response with a context string.
var noOfCards = prompt ("Please enter the number of credit cards you currently have");
console.log ("Please enter the number of credit cards you currently have");//print the prompt statement to the console.
console.log ("The number of cards is " +noOfCards);//print to console user respose with context string

             //establish a prompt if the user does not answer the question.
         if (noOfCards === ""){
        noOfCards = prompt ("You must enter a value in this field, please try again. \nPlease enter the amount of credit cards you have");
        console.log ("You must enter a value in this field, please try again. \nPlease enter the amount of credit cards you have");
}

//define variable amtofDebt and print the statement and the user response with context string to the console. 
var amtOfDebt = prompt ("What is the total amount of debit you have?");

        if (amtOfDebt === ""){
            amtofDebt = prompt("You must answer this question, \n How much debt do you owe?");
            console.log ("You must answer this question, \n How much debt do you owe?");
        }else if (amtofdebit === "0"){
            amtofdebit = alert("You have no debit, Put your cash in the bank!");
        }

