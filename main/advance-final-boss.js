/*global scope
let x=10;
function display(){
    console.log(x);
}
display();


//function scope
function s(){
    let x=10;
    console.log(x);
}
s();



// block scope
if (true) {
    let x=10;
    let y=20;

    console.log(x);
    console.log(y);
}*/
//hosting 

// console.log(name);
// let name="John";
// the period btw the start of the block and variable declartation is called 
// closure -> Next topic 
// the closure occur when inner fun remember the variabke of iuter function even after the oute function 

// function outer (){
//     let c =0;
//     function inner(){
//         c++;
//     }
//     return inner;
//     let Increment=outer;
// }
// let i = outer();
// console.log(i);
// higher order function 
// create higher higher.js

// function cal(a,b,operation){
//     return operation(a,b);
// }
// function add(a,b){
//     return a+b;
// }
// function multi(a,b){
//     return a*b;
// }
// let a = cal(3,4,add);
// console.log(a);
// higherorder function .map
function calculate(a , b , operation)
{
    return operation(a,b);
}
function add(x,y)
{
   return x+y;
}
function multiply(x,y)
{
    return x*y;
}
//console.log(cacluate(10 , 30 , add()))

//.Map
let number = [1,2,3,4,50];
//for(i =0;i<number.length;i++)
//{
  //  number[i] = number[i]*2;
//}
let squares = number.map(function(number)
{
    return number*number;
});
// console.log(squares);
// let evenNumber = number,filter(number => {number%2==0});
let total = number.reduce((Sum ,number)=>{
    return Sum + number;
})
// console.log(total);
let max = number.reduce((max,number)=>{
    return number>max?number:max;
})
console.log(max);
let min = number.reduce((min,number)=>{
    return number<min?number:min;
})
console.log(min);