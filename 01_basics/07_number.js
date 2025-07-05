const score=100 //one way of declaring a number
console.log(score);

//another method more approprriate as we can use properties and it shows return tyoe Number in output
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)) // widely used when large number hard to read so it terminates and shows until given example 2 decimale places 

const newnum= 23.8975;
console.log(newnum.toPrecision(3)); //shows precision of 3 number so it round offs to 23.9 if write 123.852 then it gives only 123 as only takes precision of 3 number

//for easy counting of zero use locale
const number= 10000000
console.log(number.toLocaleString());
//will apply commas according to un standars if india want
console.log(number.toLocaleString('en-IN'));

//many properties as like MIN_VALUE , MAX,epsilon ,isfinite....



//Math library
console.log(Math); //return type object
console.log(Math.abs(-4)) //gives absolute value mean convert - into +
console.log(Math.round(4.23));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9)) ;
console.log(Math.min(2,4,8,5));

console.log(Math.random()); //gives random number between 0 and 1
console.log((Math.random()*10)+1) //if we want aany number between 1 and 9 then *10 but in some cases it can be 0.04 so +1 ensures that min value is 1
console.log(Math.floor((Math.random()))); //for round off

//if we want in particular range then
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)
//will give between 10 and 20 as we added min so start from min and can give within range