let score="3ab"

console.log(typeof score);
let valueinNum= Number(score) //use capital N format of data types
//so it converts string into number but if you find the 
//value of that then it will give nan which is not a number
console.log(typeof score);
console.log(valueinNum);
//NaN is also a data type
//if we take null as score then it can give 0 or Nan
//for undefined it gives nan and boolean true=1 and false=0
let isloggedin=1
let bolleanis=Boolean(isloggedin)
console.log(bolleanis);
//when empty string "" it gives false
//and if gives value"lava" it gives true

let somenum= 33
let stringis= String(somenum)
console.log(stringis);
console.log(typeof stringis);