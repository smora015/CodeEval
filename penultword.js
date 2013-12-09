/**
  (c) Sergio Morales 2013
  CodeEval Challenge: Penultimate Word
  Date Solved: 12/08/13
**/

var fs = require("fs");
var util = require("util");

fs.readFileSync( process.argv[2] ).toString().split('\n').forEach( function(line){
    if(line !== "") {
        var string = line.split(' ');
        util.print( string[ string.length-2] + "\n");
    }
});
