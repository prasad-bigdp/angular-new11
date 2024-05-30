"use strict";
let a = "raj"; // assertion
let b = 25; //inference
console.log(typeof a, typeof b);
console.log("hi");
//
let x = 5;
//number - any numerical
let str = `prasad`;
let y = true;
console.log(typeof y);
let z = undefined;
let x1 = null;
let srn = "hdgh";
srn = 25;
let s = 25;
let myarr = [5, 6, 25];
// i have to store [26,"raj"]
let myarr2 = [26, "raj"];
//tuple
let myarr3 = [26, "raj"];
// functions will two values to give data types- arguments, return type
function sum(a, b) {
    console.log(a + b);
}
sum(5, 6);
// write a basic sum function which adds two strings and returns the result
function sum2(a, b) {
    return a + b;
}
sum2("Hello", "world");
const sum3 = (a, b) => a + b;
try {
    function bomb() {
        throw "some exception";
    }
    bomb();
}
catch (err) {
    console.log(err);
}
// type alias,inference,OOP
