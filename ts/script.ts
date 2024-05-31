let a = 25;
console.log(typeof a)
let b: number = 55;
let c: string = "prasad"
let d: boolean = true
let e: undefined = undefined;
let f: null = null;
let g: number | string = "raj"
let h: number[] = [ 2, 5, 8, 7, 9 ]
let i: (number | string)[] = [ "raj", 25 ]
let j: any = "dhgjhg"
let k: any[] = [];

let fun = (a: number, b: number): number => a + b
function fun2(str:string):void
{
    console.log(str)
}
fun2("raj")

function fun3():never
{
    throw new Error("my error")
}

let l: [ number, string, boolean, number ] = [ 2, "hgh", true, 52 ]
//tuple

//interfaces
interface myObj{
    name: string,
    age: number,
    fn:(a:number)=>number
}

let obj:myObj = {
    name: "raj",
    age: 55885,
    fn: (a)=> a++,
}

// try to create an interface which accepts a basic registrration form which contains username,email,phno,pwd
interface regForm {
	username: string
	phno?: number
	email: string,
	password: string
}
type nsb = number | string | boolean //type aliases
let m: nsb = true
let n: nsb = "fjmfbvmfb"
let o: nsb = 88

type regForm2 = {
	username: string
	phno?: number
	email: string
	password: string
}
let myDetails:regForm2 = {
    username: "something",
    password: "something",
    email: "a@a.com"
}

const sum:myFun=(a, b)=>a+b
const sub:myFun=(a,b)=>a-b
const mul:myFun=(a,b)=>a*b
type myFun= (a:number,b:number)=>number


// Enums are used to specify some constants
enum days{
    sunday,
    monday,
    tuesday,
    thursday,
    friday,
    saturday
}
console.log(days.sunday, days[ 0 ]) //0
const inp = document.getElementById('inp')
const x= inp as HTMLInputElement
console.log(x.value)

// OOP
interface forA{
    name: string,
    salary: number,
    id:number
}
class A implements forA {
    name;
    salary;
    id;
    constructor(n:string,s:number,i:number)
    {
        this.name=n,
         this.salary=s,
         this.id=i
    }
}
let p= new A("raj",18000,25)




























