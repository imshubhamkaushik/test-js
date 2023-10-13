//var c=300

let a=300
{}//curly braces are scopes
if (true) {
    let a=10
    const b=20
    // console.log(a,"Inner");
    
}

// console.log(a);
function one(){
    const username ="ho"

    function two(){
        const website ="youthoob"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if (true) {
    const username="hoo"
    if (username==="hoo") {
        const website=" youthoob"
        // console.log(username + website);
        
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++interesting+++++++++++++++++++++


function addone(num){
    return num + 1
}
addone(5)

const addTwo = function(num){
    return num +2
}
