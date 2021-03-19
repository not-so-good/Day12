// Only change code below this line
function sumFibonacci(num) {
    var tempNum = 1;
    var prevNum = 1;
    var added = 0;
    while(tempNum <= num){
        if(tempNum % 2 !== 0){
            added += tempNum;
        }
    prevNum = tempNum - prevNum;
    tempNum += prevNum;    
    }
return added;
}
    
   
// Only change code above this line

console.log(sumFibonacci(1)); // Change this line
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;