// task 1
function hero(bullets, dragons){
let neededBullet = dragons * 2;
if(bullets >= neededBullet){
return true
}else{
return false
}
}
console.log(hero());

// task 2
function simpleMultiplication(number) {
if(number % 2 === 0){
return number * 8
}else{
return number * 9
}
}
console.log(simpleMultiplication(5));

// task 3
function makeUpperCase(str) {
return str.toUpperCase()
}
console.log(makeUpperCase('hello'));

// task 4
function basicOp(operation, value1, value2){
switch(operation){
    case '+':
    return value1 + value2
    break;
    case '-':
    return value1 - value2
    break;
    case '*':
    return value1 * value2
    break;
    case '/':
    return value1 / value2
    break;
}
}
console.log(basicOp('+', 5, 3)); 
console.log(basicOp('-', 10, 4)); 
console.log(basicOp('*', 7, 6))
console.log(basicOp('/', 8, 2));

// task 5

function booleanToString(b){
return `${b}`
}
console.log(booleanToString(true));

//   task 6

function greet(){
let greet = "hello world!"
return greet
}
console.log(greet());

//   task 7
const stringToNumber = function(str){
return Number(str);
}
console.log(stringToNumber('200'));

//   task 8
function boolToWord( bool ){
if(bool == true){
    return "Yes"
}else{
    return "No"
}
}
//   task 9
function makeNegative(num) {
let neg = 0 - num;
if(num > 0){
    return neg;
}else{
    return num
}
}
console.log(makeNegative(5));

// task 10
function opposite(number) {
let opposite = 0 - number;
return opposite
}
console.log(opposite(20));

// task 11
function numberToString(num) {
let strinNum = num.toString()
return strinNum
}
console.log(numberToString(5));

// task 12
function evenOrOdd(number) {
if (number % 2 === 0) {
    return "Even";
} else {
    return "Odd";
}
}
console.log(evenOrOdd(5));

// task13
function multiply(a, b){
return a * b
}
console.log(multiply(5, 10));