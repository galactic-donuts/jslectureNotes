// CHALLENGE 1
// Who's name is longer?

/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
 */

/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/

/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/ 
  
 /* Incorrect Answer 
 
 let name = 'Kelly Nighbert';
if (name > 9); {
console.log('Kiyas name is longer than');
} else{
    console.log ('Kelly Nighbert ');

let secondName = 'Kiya Jones'
if (secondName < 9); {
    console.log('Kiya');
} else {
    console.log ('Kiya Jones is shorter than Kelly Nighbert');
} */


// CHALLENGE 2 -- Correct Answer 
// Types Challenge
/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
*/
let myObject = {
    michael: 'string',
    dwight: 4,
    pam: true,
    ryan: {
        angela: 'sample'
    }
}
console.log(typeof myObject.ryan.angela); 
/* SILVER
Write a conditional that checks the type of one of the values stored in the object
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/
let myObject = {
    michael: 'string',
    dwight: 4,
    pam: true,
    ryan: {
        angela: 'sample'
    },
    creed: undefined
}
let value = myObject.creed; // undefined
if (typeof value === 'string') {
    console.log('this value is a string');
} else if (typeof value === 'number') {
    console.log('this value is a number');
} else if (typeof value === 'boolean') {
    console.log('this value is a boolean');
} else if (typeof value === 'object') {
    console.log('this value is an object');
} else {
    console.log('what are you?!');
}


