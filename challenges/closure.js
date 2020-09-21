// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// the variable inside has the deepest Scope, therefore it has the ability to reach outside its scope for other variables. 
// in JS functions/variables are available from inside going out but not outer scoped vars/functions reaching inwards to other functions. since internal was declared inside myFunction(which has outer scope than nestedfunction), nested function has the ability to access the internal variable

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

const summation = counterNumber => {
  let total = 0
  for(counterNumber; counterNumber>0; counterNumber--){
    total += counterNumber;
  } return total;
}

// console.log(summation(6));