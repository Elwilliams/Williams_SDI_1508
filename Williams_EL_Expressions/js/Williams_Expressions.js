/**
 * Created by EWilliams on 8/8/15.
 */
// Erica Lauren Williams//
// SDI Week 2 Expressions//

// Area of a Trapezoid is (b1+b2)/2 times h

//Sample hard value trapezoid formula//
    //Thia formula includes assignment operator example and array//
console.log ("This is a hard value test formula for the area of a Trapezoid");
var b1 = 10; //define variable b1
var b2 = 12; //define variable b2
console.log ("The first side of the trapezoid is " + b1);//print to console var b1 value
console.log ("The second side of the trapezoid is " + b2);//print to console var b2 value

var baseArray = [b1, b2];//define array
console.log (baseArray);//print to console the array variables to check accuracy

//begin assignment operator example//
var trapSides =3; //define variable and value//
trapSides ++; //addition operator//
console.log (trapSides); //print to console addition assignment operator//
trapSides --; //subtraction operator//
console.log (trapSides); //print to concole subtraction assignment operator//
//end assignment operator example//

var total = baseArray [0] + baseArray[1];// addition w/ array using index
console. log (total);// print to console the addition of array w/ index

var h = 14;//define variable h
console.log ("The height is " + h);//print to console variable h

var area = (total/2)*h;//definition of formula
console.log ("The area of a trapezoid with bases of 10 & 12 and a height of 14 is " + area); //print to console
//This is a working formula for the area of a trapezoid for edge 1 10, edge 2 12, height 10//

//User Prompted Area of a Trapezoid//

alert("To find the area of a trapezoid \nPlease Enter Base Edge 1, Base Edge 2, and the height in the next three windows"); //alert the user
console.log ("Please Enter Base Edge 1, Base Edge 2, and the height of the Trapezoid in the next 3 windows");//print alert message to console.

var userB1 = prompt ("Please Enter Base Edge 1"); //prompt 1 for value of userB1
console.log ("Please Enter Base Edge 1");//print to console
console.log (userB1);//print to console

var userB2 = prompt ("Please Enter Base Edge 2"); // prompt 2 for the user to get an area
console.log ("Please Enter Base Edge 2");//print to console
console.log (userB2); //print to console

var userH = prompt ("Please Enter Height"); // prompt 3 for the user to get an area
console.log ("Please Enter Height");//print to console
console.log (userH);//print to console

var userTotal = Number(userB1) + Number(userB2);//step 1 in formula for prompts
console.log (userTotal);//print to console

var userArea = (userTotal)/2 * userH; //solution prompt for user
console.log (userArea);//print to console

alert ("The area of your trapezoid is " + userArea);//show user the area of the trapezoid
console.log ("The area of the trapezoid is " + userArea);// print out area of the trapezoid

//End of the calculator for a trapezoid//


