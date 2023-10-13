function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}
// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2) 
// }
// function addTwoNumbers(number1,number2){
//     // let result = number1+number2
//     // return result
//     return number1+number2
// }
// const result = addTwoNumbers(4,4)
// console.log("result" , result);

// function loginUserMessage(username){
//     if (username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// function loginUserMessage(username){
//     if (!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Hello"))
// console.log(loginUserMessage("hello"));

function calculateCartPrice(...num1){//... rest and spread 
    return num1
}

// console.log(calculateCartPrice(2,5,34,5))

const user={
    username:"hi",
    price:"211"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
}
// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray=[200,400,100]

function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue([230,123,1244,124]));