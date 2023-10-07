//Primitive

// 7 types: String, number, boolean, null, undefined, symbol, BigInt

//Reference(Non Primitive)

//Array, Objects, Functions
//JavaScript is a dynamically typed language, 
// which means that data types of variables are 
// determined by the value they hold at runtime and 
// can change throughout the program as we assign 
// different values to them.

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const BigNumber = 461131684616n

// The typeof Operator
// Runtime Semantics: Evaluation
// UnaryExpression : typeof UnaryExpression
// 1. Let val be ? Evaluation of UnaryExpression.
// 2. If val is a Reference Record, then
// a. If IsUnresolvableReference(val) is true, return "undefined".
// 3. Set val to ? GetValue(val).
// 4. If val is undefined, return "undefined".
// 5. If val is null, return "object".
// 6. If val is a String, return "string".
// 7. If val is a Symbol, return "symbol".
// 8. If val is a Boolean, return "boolean".
// 9. If val is a Number, return "number".
// 10. If val is a BigInt, return "bigint".
// 11. Assert: val is an Object.
// 12. NOTE: This step is replaced in section B.3.6.3.
// 13. If val has a [[Call]] internal slot, return "function".
// 14. Return "object".

//https://262.ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++++++++++++++++++++++++++++++

//Stack memory (primitive), Heap memory (primitive)

let myytname = "ytname"