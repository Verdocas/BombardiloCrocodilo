5>3;
//R: true
10<7;
//R: false
4=="4";
//R:true
4==="4";
//R: false
true!=false;
//R:true
0==false;
//R:true
0===false;
//R: false
"2">"10";
//R:true porque entre duas strings só conta o primeiro digito ou seja efetivamente 2>1 true
100 != "100";
//R: false
"a" > "A";
//R: True +, porque todos os caracteres têm um nnumro associado (ASCII TABLE)

let a = "Olá";
let b = "Mundo";
let c = a+" "+b

console.log (c)

let name = "Pedro"
let age = 23

console.log ("o meu nome é " + name + " e tenho " + age + " anos.")

let num = 100
let string = "100"

console.log (num+string)

let grades1 = 12
let grades2 = 16
let grades3 = 14

let passed = "you passed"
let failed = "you failed"

let avg = (grades1+grades2+grades3)/3

console.log (avg)

let height = 12
let base = 5 

let area = ((height*base)/2)

console.log (area);