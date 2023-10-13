//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();
//chai()

//Syntax()()->function definition ()->executionSt //IIFE
//To remove pollution of the variable of global scope

((name)=>{
    console.log(`db connected2 ${name} `);
})('name');
