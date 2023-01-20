"use strict";
// 원시타입
const isTrue = true;
// Boolean
let flag = true;
// String
const text = 'hello TypeScript!';
// Number
const num = 7;
// Array
const arr = [1, 2, 3];
// Array 리터럴
const fruits = ['🍎', '🍌', '🍓'];
// Tuple
const me = ['yondo123', 27];
// Object
const game = {
    title: 'FIFA22',
    price: 640000
};
//Non-null assertion operator
let canBeNull;
console.log(canBeNull);
// Function
//(arg1: type, arg2: type..) :return type
function sum(a, b) {
    return a + b;
}
// void
function logger(message) {
    console.log(`[LOG]: ${message}`);
}
