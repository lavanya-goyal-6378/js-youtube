const accountId=23442
let accountEmail= "lavanya@gmail.com"
var accountPass = "1234"
accountCity="jaipur" //can also define variable like this
let accountState; //gives undefined as output
// accountId=2 //this is not allowed as we defined constant
//and its value cannot be changed
//let and var are 2 methods to define variable in js
//but we do not use var because of block and functional scope

accountEmail="goyal6378"
accountPass="2345"
accountCity="Bengaluru"

console.log(accountId)
//instead of writting too many console we can use table
//where it gives output of multiple values simultaneously

console.table([accountId,accountEmail,accountPass,accountCity,accountState])
