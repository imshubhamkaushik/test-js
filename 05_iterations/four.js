// const coding = ['js','ruby','python','cpp']

// const values = coding.forEach((item) => {
//     return item
// });

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8]

// const newNums  = myNums.filter((num)=>num > 5)
// const newNums = myNums.filter((item)=>{
//     return item > 4
// })

// const newNums =[]

// myNums.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {
        bookName:"asd",
        bookYear:1998
    },
    {
        bookName:"qwe",
        bookYear:1990
    },
    {
        bookName:"zxc",
        bookYear:1995
    },
    {
        bookName:"iop",
        bookYear:1993
    },
    {
        bookName:"jkl",
        bookYear:1980
    },
]

// const userBooks =books.filter( (bk) => bk.bookYear == 1993)
const userBooks=books.filter( (bk) => {
    return bk.bookYear >=1990 
})

console.log(userBooks);

