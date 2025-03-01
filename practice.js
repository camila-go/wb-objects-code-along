/// ////////////// PROBLEM 1 ////////////////////

// Modify the function below to return the firstName property of the person object.  Use dot notation

function personName() {
  const person = {
    firstName: 'Sally',
    lastName: 'Smith',
    age: 29,
    location: 'Orem, UT',
  };
  return person.firstName; // Code here
}
console.log(personName());

/// ////////////// PROBLEM 2 ////////////////////

// Modify the function below to return the location property of the person object.  Use bracket notation

function personLocation() {
  const person = {
    firstName: 'Sally',
    lastName: 'Smith',
    age: 29,
    location: 'Orem, UT',
  };
  return person['location']; // Code Here
}
console.log(personLocation());
/// ////////////// PROBLEM 3 ////////////////////

//Use dot notation to add a new property to the object backpack called frontPocket with the value equal to "compass".

const backpack = {};
backpack.frontPocket='compass';
console.log(backpack.frontPocket);

// Code Here

/// ////////////// PROBLEM 4 ////////////////////

//Create a variable called userFirstName.  Assign it the value of the person's firstName property, using dot notation.

const person = {};

person['firstName'] = 'sally';
const userFirstName= person.firstName;
console.log(userFirstName);
// Code Here

/// ////////////// PROBLEM 5 ////////////////////

// In the function updateUser, change the user parameter's name to Ryan, change the value of pwHash to superSafe
// and change the value of username to ryan2020. After you have updated all the values return the object.

// The existing user looks like this:
 const someUser = {
  name: 'Sally Rally',
   pwHash: 'U+Ldlngx2BYQk',
   username: 'SallyRally801'
 };

function updateUser(user) {
  user.name = 'Ryan';
  user.pwHash = 'superSafe';
  user.username = 'ryan2020';
  return user;
  // Code Here
}
console.log(updateUser(someUser));

/// ////////////// PROBLEM 6 ////////////////////

// In the function updateProfile, update the value of the given property to the given value. Return the updated object.
//
// The existing profile looks like this:
const userProfile = {
   email: 'test@google.com',
    pwHash: 'V-9n5bQyu81z0',
    location: 'Denver, CO'
 }
//
// So updateProfile(userProfile, 'email', 'blah@yahoo.com') would update the email to 'blah@yahoo.com'

function updateProfile(profile, property, value) {
  // Code here
  profile.email = 'blah@yahoo.com';
  return profile.email;
}
console.log(updateProfile(userProfile));

/// ////////////// PROBLEM 7 ////////////////////

// Inside the maxedOut function, loop over the given object using a for...in loop
// to change all the object property values to "max".
// Return the updated object.
const obj = {
  fuelLevel:'low',
  snackLevel:'mid', 
  energyLevel:'high'};

function maxedOut(obj) {
  // REPLACE THIS WITH YOUR CODE
    for (let key in obj) {
      obj[key] = 'max';
    }
  return obj;
}
console.log(maxedOut(obj));

/// ////////////// PROBLEM 8 ////////////////////

// Do not edit the code below.
const state = {
  utah: 2942902,
  texas: 26956958,
  california: 38802500,
};
// Do not edit the code above.

// Loop through the given object. If a value is greater than 3,000,000 set it to 0.

function stateLooper(obj) {
  for (let key in obj){
    if (obj[key] > 3000000){
      obj[key] = 0;
    }
  }
  // REPLACE THIS WITH YOUR CODE
  return obj;
}
console.log(stateLooper(state));

/// ////////////// PROBLEM 9 ////////////////////

// Here is a function named cleanUser that will be passed an object
// Inside of this function, loop over the object so that every property with a falsy value is removed
// Once all falsy values and their properties are removed, return the object

const profileActive = {
  Sarah: 1,
  James: 0,
  Jimmmy: 1,
};

function cleanUser(obj) {
  // REPLACE THIS WITH YOUR CODE
    for (let key in obj) {
      if (!obj[key]) {
        delete obj[key]
      }
  }
  return obj;
}
console.log(cleanUser(profileActive));

/// ////////////// PROBLEM 10 ////////////////////

// Here we have a function called getValues that will take in an object.
// Return an array containing all the object's values.

function getValues(obj) {
  return Object.values(obj);
  // REPLACE THIS WITH YOUR CODE
}
console.log(getValues(state));

/// ////////////// PROBLEM 11 ////////////////////

// Use the spread operator to copy the given array.
// Then, add the string "copy" to the end of the copy and return the copy.
const fruits = ['papaya','mango','banana'];
function copyArray(arr) {
  const copy = [...arr];
  copy.push("copy");
  return copy;
  // REPLACE THIS WITH YOUR CODE
}
console.log(copyArray(fruits));

/// ////////////// PROBLEM 12 ////////////////////

// Use the spread operator to copy the given object.
// Then, add a new key-value pair {copy: true} to the end of the copy and return the copy.

function copyObject(obj) {
  const copy = { ...obj };
  copy['copy'] = true;
  return copy;
  // REPLACE THIS WITH YOUR CODE
}
console.log(copyObject(profileActive));
/// ////////////// PROBLEM 13 ////////////////////

// Do not edit the code below.
const animalCount = {
  cats: 2,
  dogs: 5,
  mice: 0,
};
// Do not edit the code above.

// Use object destructuring syntax to create variables for each of the properties of the
// animalCount object.
// Object destructuring to create variables for each property
const { cats, dogs, mice } = animalCount;

// Output the values of the variables
console.log(cats); // Output: 2
console.log(dogs); // Output: 5
console.log(mice); // Output: 0



/// ////////////// PROBLEM 14 ////////////////////

// Write a function called addition that takes in an array containing 2 numbers.
// In the function, use array destructuring to create variables for each of the numbers.
// Then return the sum of the two numbers.


function addition(numbers) {
  // Destructuring the array to extract the numbers
  const [num1, num2] = numbers;
  
  // Calculating the sum of the two numbers
  const sum = num1 + num2;
  
  // Returning the sum
  return sum;
}

// Example input array with two numbers
const numbers = [3, 7];

// Calling the addition function with the input array
const result = addition(numbers);

// Outputting the result (sum of the two numbers)
console.log(result); // Output: 10

// REPLACE THIS WITH YOUR CODE

/// ////////////// PROBLEM 15 ////////////////////

// Create a function called zooAnimals that will take an object parameter
// The object passed to this function will have the property names lion, tiger, and bear
// The values of these properties will be a number representing the count of that animal in the zoo
// Using object destructuring, return the total sum of the counts of these animals

// REPLACE THIS WITH YOUR CODE

function zooAnimals(animalAmount) {
  // Destructuring the object to extract the count of lion, tiger, and bear
  const { lion, tiger, bear } = animalAmount;
  
  // Calculating the total sum of the counts
  const total = lion + tiger + bear;
  
  // Returning the total sum
  return total;
}

// Example object representing animal counts
const animalAmount = {
  lion: 2,
  tiger: 3,
  bear: 1,
};

// Calling the zooAnimals function with the object
const totalCount = zooAnimals(animalAmount);

// Outputting the total sum
console.log(totalCount); // Output: 6

/// ////////////// PROBLEM 16 ////////////////////

// Now that you've practiced object destructuring inside of a function with that
// function's parameter, we will take it one step further.
// Instead of using object destructuring inside of the function, we can declare a
// destructured object as our parameter (see below for an example).
//
// const exampleObj = {one: 1, two: 2, three: 3}
//
// const immediatelyDestructured = ({one, two, three}) => {
//   return one + two + three
// }
//
// The function immediatelyDestructured has a parameter that is a destructured object.
// This is useful because we can immediately use the variables one, two and three in the
// function instead of having to destructure the object parameter inside of the function.
// If we were to invoke the function and pass in the exampleObj object below, the
// returned value would be 6.

// For this problem, write a function called greeting.
// Instead of giving it an object parameter, give it a destructured object as it's
// parameter.
// The properties of this object will be name and title.
// Return from this function a greeting sentence that should say "Hello, <title> <name>!".
// Title and name in this sentence should be replaced with the values of the
// destructured object variables.

// REPLACE THIS WITH YOUR CODE
function greeting({ name, title }) {
  // Creating the greeting sentence using the destructured variables
  const greetingSentence = `Hello, ${title} ${name}!`;
  
  // Returning the greeting sentence
  return greetingSentence;
}

// Destructured object with name and title properties
const individual = { name: 'Alice', title: 'Ms' };

// Calling the greeting function with the destructured object
const greetingMessage = greeting(individual);

// Outputting the greeting message
console.log(greetingMessage); // Output: Hello, Ms Alice!