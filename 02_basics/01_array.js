// const myArr = [1,2,3,4,5]

/// myArr.push(6)
/// myArr.push(7)
/// myArr.pop() => removes the last element in array

// myArr.unshift(9) //=> insert element at the initial of an array
// myArr.shift() //=> removes the initial element of an array

// console.log(myArr.includes(9)); //=> results if element is there in Array
// console.log(myArr.indexOf(3));// => results the index of the element in an Array

// const newArr = myArr.join()// => joins the element of the array and print it as a String

// console.log("A",myArr);
// const myn1 = myArr.slice(1,3)//=>Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
// console.log(myn1);
// console.log("B",myArr)
// const myn2=myArr.splice(1,3) //=> Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// console.log("C",myArr);
// console.log(myn2);

//********************************************

const marvel=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

// marvel.push(dc)

// console.log(marvel);
// console.log(marvel[3][1]);


// const all= marvel.concat(dc)
// console.log(all);

// const all1=[...marvel,...dc]
// console.log(all1);

const arr1=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const arr1new=arr1.flat(Infinity)

console.log(arr1new);


console.log(Array.isArray("Hi"))
console.log(Array.from("Hi"));
console.log(Array.from({name:"hi"}));///interesting fact

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));