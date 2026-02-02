const accId = 1234
let accEmail = "hello@gmail.com"
var accCity = "Jaipur"
acc=10

console.table([accId, accEmail, accCity, acc])

// accId=9890; //not allowed
accEmail = "hc.hc@com"
accCity = "Delhi"
acc=100
let accState;
var accS;

console.table([accId, accEmail, accCity, acc, accState, accS])

/*
prefer not to use var because of issue in block
and functional scope
*/ 


// Feature	                           var	                  let	       const
// Scope	                           Function scope	      Block scope  Block scope
// Can reassign value?	               ✅ Yes	            ✅ Yes	    ❌ No
// Can redeclare in same scope?	       ✅ Yes	            ❌ No	    ❌ No
// Hoisted?	                           ✅ Yes	            ✅ Yes	    ✅ Yes
// Initialized during hoisting?	       ✅ Yes (undefined)	❌ No (TDZ)	❌ No (TDZ)
// Block {} respect?	               ❌ No               	✅ Yes	    ✅ Yes
// Must assign value at declaration?   ❌ No	                ❌ No	    ✅ Yes