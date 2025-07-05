const name="lavanya"
const repocount = 50

console.log(name +repocount+"value");
//old way not readable onstead use`` in which we can add variable by using $sign
console.log(`My name is ${name} and my repository count is ${repocount}`);

//declaration of string
const newgame= new String("lavanya") 
//output in console will give string lavanya and 
//at 0 it gives l so it not array but object where 0 is key and value is l also gives length and protype int his declaration method
//many protypes have different methods

console.log(newgame[0]);
console.log(newgame.__proto__); //gives empty object
console.log(newgame.length);
console.log(newgame.toUpperCase);
console.log(newgame.charAt(2));
console.log(newgame.indexOf('n'));

//if we want to divide into substring give arguments starting and ending number
//slice
const newstring = newgame.substring(0,4)
console.log(newstring); //the 4th index character will not be printed

const newnew = newgame.slice(-6,4)
console.log(newnew); //will reverse it

const nowname=  "   lava   "
console.log(nowname)
console.log(nowname.trim()); //removes extra spaces
//read documentation we have trim.start and trim.end also

const url = "http//afnjk%20goyal"
console.log(url.replace('%20' , '-')); //will replace %20 with -

console.log(url.includes('goyal')); //check if goyal is present in there or not

const hey = "lala-goyal-heyya"
console.log(hey.split('-')) ;//arguments are sepaerator and can also use limit along with it
//it spits on basis of sepearator