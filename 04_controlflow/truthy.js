const userEmail = "h@a.bc"
if (userEmail){
    console.log("Got user email");
}else{
    console.log("dont have email");
}

//**falsy values**

//false, 0, -0,BigInt 0n, "", null, undefined, NaN

//**truthy values**

//"0", 'false', " ", [], {} , function(){}(Empty Function)

// if(userEmail.length===0){
//     console.log("Array is empty");
// }

const emptyObj={}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator(??): null undefined

let val1

// val1 = 5??10
// val1 = null ?? undefined

val1 = null ?? 10 ?? 10
val2 = undefined ?? null
console.log(val1);
console.log(val2);


// terniary operator

//conditon ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than  80") : console.log("more than 80");;

