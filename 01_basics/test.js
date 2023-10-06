console.log("HO");
const accountId=144553;
let accountEmail = "me@me.com"
var accountPassword = "12121212"
accountCity = "Jaipur"

let accountState ;
// accountId = 2 // not allowed

accountEmail="h@h.c"
accountPassword="21212"
accountCity="b"
/*
Prefer not to use
because of issue in block scope and functional scope
*/
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])

console.log(accountId);