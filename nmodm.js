/**
  (c) Sergio Morales 2013
  CodeEval Challenge: N Mod M
  Date Solved: 12/7/13
**/

var fs  = require("fs");
var util = require("util");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        // Split n and m by comma delimiter
        n = Number(line.substr(0, line.search(",")));
        m = Number(line.substr(line.search(",")+1));
        
        // n % m
        while(n > m) {
            n -= m;
        }
        util.print(n + " \n");
    }
});
