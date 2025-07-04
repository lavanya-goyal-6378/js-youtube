//two types of datatypes primitive and reference
//primitive 7types
//String return type string 
//Number ,Boolean,null->object(return type),undefined,BigInt,Symbol(for uniqueness)->symbol

//non primitive/refrence
//array-> object
//objects->object
//Functions-> function
//javascript is dynamically typed language because we do not have to define the datatype at that time 
//it understands at run time

const score=100 //we do need to define that 100 is int
const scorevalue=10.5

const id=Symbol('123')
const newid=('123')
console.log(id===newid); //so even it is same but symbol uniquely diffrentiates them so it gives false

const bigNumber= 76448259n //for bigint apply n

//non primitive
//array 
const arr=["lala","goyal"]

//object simply in curly braces
const letobj={
    name :"lavanya",
    age:20,
}
//function normal as c++
const func= function(){
    console.log("hello world");
}
//checkreturn type of each 
//example
const temperature=null
console.log(typeof temperature) //gives object



//memory allocation
//stach (primitive) where we get copy
//heap(non-primitve) where we got refrence 
//stack example
const username="lavanya"
let anothername=username
anothername="goyal"

console.log(username);
console.log(anothername); //the value is changed as we get copy of data

//heap
let userone = {
    email:"lala@goyal.com",
    age:20
}
let usertwo = userone
usertwo.email="lavanya@goyal.com"

console.log(userone.email);
console.log(usertwo.email);
//it changes in both because both are refrencing to the same data so both value changes
