let a: string = "raj" // assertion
let b = 25 //inference
console.log(typeof a, typeof b)
console.log("hi")
//
let x: number = 5
//number - any numerical
let str: string = `prasad`
let y: boolean = true
console.log(typeof y)
let z: undefined = undefined
let x1: null = null
let srn: number | string = "hdgh"
srn = 25
let s: any = 25
let myarr: number[] = [5, 6, 25]
// i have to store [26,"raj"]
let myarr2: (number | string)[] = [26, "raj"]
//tuple
let myarr3: [number, string] = [26, "raj"]
// functions will two values to give data types- arguments, return type

function sum(a: number, b: number): void {
	console.log(a + b)
}
sum(5, 6)
// write a basic sum function which adds two strings and returns the result
function sum2(a: string, b: string): string {
	return a + b
}
sum2("Hello", "world")
const sum3 = (a: string, b: string): string => a + b
try {
	function bomb():never {
		throw "some exception"
	}
	bomb()
} catch (err) {
	console.log(err)
}
// type alias,inference,OOP
