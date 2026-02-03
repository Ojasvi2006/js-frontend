"use strict"; //treat all JS code as newer version

// alert(3 + 3)  //we are using nodejs, not browser


//Primitive dtypes:
/*
1. number: int and decimal values
2. bigint: very large integer values, ends with n
3. String: "",'',``
4. boolean: true/false
5. undefined: declared but not defined
6. null: absence of a value
7. Symbol: unique
*/

let a = 10;
let b =10.99;
console.log(typeof(a)); //number
console.log(typeof(b)); //number

let c = "hello";
let d ='hi';
let e=`hey`;
console.table(typeof(c));

let id = Symbol("123");
console.table(typeof(id));



//NON Primitive dtypes:
/*
1. Object
2. Array
3. Function
*/
