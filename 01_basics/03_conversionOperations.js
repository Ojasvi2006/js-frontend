let score = "Ojasvi"

console.log(typeof score);
console.log(typeof(score));

let valueInNum = Number(score)
console.log(typeof valueInNum);
console.log(valueInNum);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Ojasvi"

let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Ojasvi" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);                 //"33"
console.log(typeof stringNumber);          //string

// // ************** Operations ****************

let value = 3
let negValue = -value         
console.log(negValue);         //-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Ojasvi"

let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);          //unary plus---acts as Number(value)
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
console.log(num1, num2, num3);          //4 4 4

let gameCounter = 100
++gameCounter;                    
console.log(gameCounter);
