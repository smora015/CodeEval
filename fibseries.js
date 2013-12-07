/** 
  (c) Sergio Morales 2013
  CodeEval Challenge: Fibonacci Series
  Date Solved: 12/07/13
**/

var fs  = require("fs");
var util = require("util");

// Define fibonacci as a recursion function
function fib( n ){
    if(n === 0)
        return 0;
    if(n === 1)
        return 1;
    else
        return fib(n-1)+fib(n-2);
}

// Obtain file
fs.readFileSync(process.argv[2]).toString().split('\n').forEach( function(line) {
    if(line !== "") {
        // For each line, claculate the fibonacci number
        var n = Number(line);
        util.print(fib(n) + "\n");
    } 
});
