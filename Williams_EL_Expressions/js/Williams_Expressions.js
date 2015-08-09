/**
 * Created by EWilliams on 8/8/15.
 */
// Erica Lauren Williams//
// SDI Week 2 Expressions//

// Area of a Trapezoid is (b1+b2)/2 times h

//Sample hard value trapezoid formula//
    //Thia formula is a test//
console.log ("This is a hard value test formula for the area of a Trapezoid");
var b1 = 10; //define variable b1
var b2 = 12; //define variable b2
console.log (b1);//print to console var b1 value
console.log (b2);//print to console var b2 value

var baseArray = [b1, b2];//define array
console.log (baseArray);//print to console the array

var total= b1 + b2; //addition step 1 in formula
console.log (total); //print to console

var h = 14;//define variable h
console.log (h);//print to console variable h

area = (total/2)*h;//definition of formula
console.log ("The area of a trapezoid with bases of 10 & 12 and a height of 14 is " + area); //print to console
//This is a working formula for the area of a trapezoid for edge 1 10, edge 2 12, height 10//

//Assignmnet begins//
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
console.log (userh);//print to console

alert ("The is area of the Trapazoid is");//alerting user the next field has the answer
console.log ("The is area of the Trapazoid is");//printing to console

var usertotal = Number(userB1)+ Number(userb2);//step 1 in formula for prompts
console.log (usertotal);//print to console

var userarea = (usertotal)/2 * userh; //solution prompt for user
prompt (userarea);//show user the area of the trapezoid
console.log (userarea);//print to console

//Assignment Operators requirement added in this section
var noofonions = 3;//definition
console.log (noofonions); //print to console
noofonions += 4;//addition assignment operator
console.log (noofonions);//print to console

var noofpears = 5;// definition
noofpears -= 5;//subtraction assignment operator
console.log (noofpears); //print to console

//Assignmnet Operators end //

