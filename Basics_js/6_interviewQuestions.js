
// Summary of DataTypes in JavaScript

// Primitives:

// Call by value: When a primitive value is assigned to a variable, the value is stored directly in the variable. When the variable is copied to another variable, a new copy of the value is created. Changes made to one variable do not affect the other.

// Primitive types:
// 1. string - collection of characters
// 2. number - numeric values
// 3. boolean - true or false
// 4. null - empty value
// 5. undefined - value not yet defined or not initialized
// 6. symbol - unique value
//  Example of symbol:
let sym1 = Symbol('foo');
let sym2 = Symbol('foo');
console.log(sym1 === sym2); // false
// 7. bigint - large integer

// Non-primitives/Reference types`:

// Call by reference: When a non-primitive value is assigned to a variable, the variable stores a reference to the value in memory. When the variable is copied to another variable, both variables point to the same value in memory. Changes made to one variable affect the other.

// Non-primitive types:
// 1. object - collection of properties
// 2. array - collection of values
// 3. function - reusable block of code
// 4. symbol - unique value
// 5. date - date and time
// 6. regexp - regular expression

// Array is a special type of object that can hold multiple values. It is an ordered collection of values, where each value is identified by an index. Arrays can hold values of any data type, including other arrays and objects.

const fruits = ["apple", "banana", "orange"]

console.log(fruits); // ["apple", "banana", "orange"]

// Object is a special type of object that can hold multiple properties. It is a collection of key-value pairs, where each key is a unique identifier and each value is associated with that key.
let person = {
    name: "John",
    age: 30,
    isMarried: false
};
console.log(person); // { name: "John", age: 30, isMarried: false }

// Function is a special type of object that can hold reusable blocks of code. It is a collection of statements that can be executed when the function is called. Functions can take parameters and return values.
let myFunction = function (a, b) {
    return a + b;
}
console.log(myFunction(1, 2)); // 3

function add(a, b) {
    return a + b;
}

console.log(add(1, 2)); // 3

let arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]
