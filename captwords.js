/**
  (c) Sergio Morales 2013
  CodeEval Challenge: Capitalize Words
  Date Solved: 12/15/13
  
  *An HTML-JavaScript version of this is available.*
**/

var fs = require("fs");
var util = require("util");

fs.readFileSync( process.argv[2] ).toString().split('\n').forEach( function(line){
    if(line !== "") {
        var words = line.split(' ');
        for(var i = 0; i < words.length; ++i){
            var letter = words[i][0];
            letter = letter.toUpperCase();
            util.print(letter+words[i].substr(1)+" ");
        }
        util.print("\n");
    }
});
