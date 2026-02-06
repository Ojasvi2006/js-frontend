console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);         //JavaScript converts the string to a number
console.log("02" > 1);

console.log(null > 0);               //In comparisons (> < >= <=) --- null becomes 0
                                     //In equality (==) --- null only equals undefined
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);           //undefined becomes NaN in numeric comparisons
                                       //Any comparison with NaN is always false
console.log(undefined > 0);
console.log(undefined < 0);


// === Strict Equality: checks---type and value

console.log("2" === 2);