const user={
    username:"hoho",
    price:999,

    welcomeMessage: function(){
        //console.log(`${this.username},welcome`);//this keyord= current context
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);//this command differs in browser and nodejs
//browser gives window object and node gives empty object


//this works in object not in function

// const chai = function() {
//     let username="hiii"
//     console.log(this.username);
// }
// chai()

const chai =()=>{
    let username="hohoho"
    console.log(this);
}
//chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo = (num1,num2) =>  num1+num2 //implicit function
// const addTwo=(num1,num2) => (num1+num2)
const addTwo = (num1,num2)=>({username: "hohooho"})

console.log(addTwo(3,4));

const myArray=[2,5,3,7,8]
myArray.forEach()