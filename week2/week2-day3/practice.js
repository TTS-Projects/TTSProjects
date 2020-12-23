
//implicit coercion
let x = 7 + 7 + 7;
console.log(x);
// Straight arithmetic resulting in a Number value. 
x = 7 + 7 + "7";
console.log(x);
// The first two 7's are calculated (14), the last 7
// is concatenated onto the 14 as a string. 
// resulting in a string value 
// "14" + "7" = "147" 
x =  7 + 7;
console.log(" x = " + (x+1) );
  // The entire expression is implicitly converted
  // into a string and concatenated. 
// "7" + 7 = "77"; "77" + 7 = "777" 