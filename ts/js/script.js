"use strict";
let a = 25;
console.log(typeof a);
let b = 55;
let c = "prasad";
let d = true;
let e = undefined;
let f = null;
let g = "raj";
let h = [2, 5, 8, 7, 9];
let i = ["raj", 25];
let j = "dhgjhg";
let k = [];
let fun = (a, b) => a + b;
function fun2(str) {
    console.log(str);
}
fun2("raj");
function fun3() {
    throw new Error("my error");
}
let l = [2, "hgh", true, 52];
let obj = {
    name: "raj",
    age: 55885,
    fn: (a) => a++,
};
let m = true;
let n = "fjmfbvmfb";
let o = 88;
let myDetails = {
    username: "something",
    password: "something",
    email: "a@a.com"
};
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
// Enums are used to specify some constants
var days;
(function (days) {
    days[days["sunday"] = 0] = "sunday";
    days[days["monday"] = 1] = "monday";
    days[days["tuesday"] = 2] = "tuesday";
    days[days["thursday"] = 3] = "thursday";
    days[days["friday"] = 4] = "friday";
    days[days["saturday"] = 5] = "saturday";
})(days || (days = {}));
console.log(days.sunday, days[0]); //0
const inp = document.getElementById('inp');
const x = inp;
console.log(x.value);
class A {
    constructor(n, s, i) {
        this.name = n,
            this.salary = s,
            this.id = i;
    }
}
let p = new A("raj", 18000, 25);
