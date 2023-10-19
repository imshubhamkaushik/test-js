//filter

// const myNums = [1,2,3,4,5,6,7,8]

// // const newNums =  myNums.map( (num) =>num + 10)
// const newNums = myNums
//     .map((num) => num * 10)
//     .map((num) => num + 1 )
//     .filter((num) => num>=40)
// console.log(newNums);

//reduce

const myNums = [1,2,3]

// const myTotal  = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },3)

const myTotal = myNums.reduce((acc,curr) => acc + curr,0)
console.log(myTotal);