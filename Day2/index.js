// Activity 1: Arithmetic Operations
// • Task 1: Write a program to add two numbers and log the result to the console.
// • Task 2: Write a program to subtract two numbers and log the result to the console.
// • Task 3: Write a program to multiply two numbers and log the result to the console.
// • Task 4: Write a program to divide two numbers and log the result to the console.
// • Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console

// Task 1

let a= 12
let b = 33

console.log(a+b)

//Task 2

let c= 42
let d= 33

console.log(c-d)

// Task 3
let e=45
let f=32

console.log(e*f)

// Task 4
let g= 36
let h= 4 

console.log(g/h)

// Task 5
let i= 44
let j= 3

console.log(i%j)


// Activity 2: Assignment Operators
// • Task 6: Use the += operator to add a number to a variable and log the result to the console.
// • Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.


let k= 23
console.log(k);
k+=5
console.log(k)


let l=45
console.log(l)
l-=6
console.log(l);


// Activity 3: Comparison Operators
// • Task 8: Write a program to compare two numbers using > and < and log the result to the console.
// • Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
// • Task 10: Write a program to compare two numbers using == and === and log the result to the console.

// task 8
let noA=45
let noB=32
if (noA>noB){
    console.log("number A is greater",noA)
} else{
    console.log("number B is greater");
}

//task 9
let noC=45
let noD=32
let noE=43
if (noC>=noD){
    console.log("number A is greater",noC)
} else if(noE<=noD){
    console.log("number B is greater",noD);
}else {console.log("number c is greater",noE)}


// Task 10
let aNo=32
let bNo="32"

if(aNo==bNo){
    console.log("true");
}else{
    console.log("false");
    
}
if(aNo===bNo){
    console.log("true");   
}else {
    console.log("false");
    
}






// Activity 4: Logical Operators
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.


// task 11

if ((a>0)&&(b>0)){
    console.log("both condition true");
}
// task 12
if ((c>0)||(d<50)){
    console.log("true");
}

// task 13
if(!0){
    console.log("value negated ")
}





// Activity 5: Ternary Operator
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console
let noPositive= 1
noPositive>0?console.log("No is Positive"):console.log("No is negative");
