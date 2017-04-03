// Dive Deeper into Function Exercises

//Minium

// Your code here.
function min (a,b) {
return Math.min(a,b);
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Recursion

// Your code here.

function isEven (number) {
if (number %2 == 0) {
return true;
}
  else if (number%2 !=0) {
 return false;
  }
  else if (number < 0) {
  return isEven(number);
  }
  else {
  return isEven(n - 2);
  }

}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//Bean Counting

// Your code here.
function countChar(string, ch) {
  var numberOfLetter = 0;
  for (var i = 0; i < string.length; i++) {
   if (string.charAt(i) == ch) {
    numberOfLetter +=1;
}
  }
    return numberOfLetter;


};

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
