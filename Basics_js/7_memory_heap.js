// 2 types of memory Stack and Heap

// STack-----(Primitives)-----> 1. string, 2. number, 3. boolean, 4. null, 5. undefined, 6. symbol, 7. bigint
/* provide the copy of the value to the variable, so when we change the value of one variable, it does not affect the other variable. */


// Heap-----(Non-Primitives)-----> 1. object, 2. array, 3. function, 4. symbol, 5. date, 6. regexp

// provide original value reference

// ---------------------------------------Example of Stack and Heap in JavaScript---------------------------------------


let myMobile = "Samsung"; // Stack memory
let myMobile2 = myMobile; // Stack memory

console.log(myMobile); // Samsung