//for of

// for (const iterator of object) {
    
// }

const arr = [1,2,3,4,5]

// for (const val of arr) {
//     console.log(val);
    
// }

// const greeting  = "hello world"
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
    
// }

//Maps

// const map =new Map()
// map.set('IN','India')
// map.set('US','United States of America')
// map.set('FR','France')

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key, ':-', value);
    
// }
// const myObject ={
//     'game1':'NFS',
//     'game2':'Spoiderman'
// }

// for (const [key,value] of myObject){
//     console.log(key,':-',value);
// }

const myObject = {
    js:'javascript',
    cpp:'C++',
    rb:'ruby',

}

// for (const key in myObject) {
//     // console.log(myObject[key]);
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const prog = ["js","ruby","py"]

// for (const key in prog) {
//     console.log(prog[key]);
// }

// const map =new Map()
// map.set('IN','India')
// map.set('US','United States of America')
// map.set('FR','France')

// for (const key in object) {// no iternation on map using forin loop
//     console.log(key);
// }

//foreach

const coding = ['js','ruby','python','cpp']

// coding.forEach(  function (i) {
//     console.log(i);
// } )


// coding.forEach((i)=>{
//     console.log(i);
// })

// function printMe(i){
//     console.log(i);
// }

// coding.forEach(printMe)

coding.forEach((item,index,array)=>{
    console.log(item,index,array);
})
const myCoding = [
    {
        languageName: "js",
        languageFileName: "js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"C",
        languageFileName:"c"
    }
]

myCoding.forEach((item)=>{
    // console.log(item.languageFileName);
    // console.log(item.languageName);
    console.log(`Language File Name: ${item.languageFileName} | Language Name : ${item.languageName}`);
})