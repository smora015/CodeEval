/**
  (c) Sergio Morales 2013
  CodeEval Challenge: MixedContent
  Date Solved: 12/08/13
**/


var fs = require("fs");
var util = require("util");

fs.readFileSync( process.argv[2] ).toString().split('\n').forEach( function(line){
    if(line !== "") {
        var string = line.split(',');
        
        var lcount = 0;
        var lcount1 = 0;
        for( var i1 = 0; i1 < string.length ; ++i1) {
            if( (string[i1][0] >= 'A' && string[i1][0] <= 'Z') ||
                (string[i1][0] >= 'a' && string[i1][0] <= 'z')) {
                    ++lcount;
            }
        }
        var ncount = 0;
        var ncount1 = 0;
        for( var j1 = 0; j1 < string.length ; ++j1) {
            if( !(string[j1][0] >= 'A' && string[j1][0] <= 'Z') &&
                !(string[j1][0] >= 'a' && string[j1][0] <= 'z')) {
                    ++ncount;
            }
        }
        for( var i = 0; i < string.length ; ++i) {
            if( (string[i][0] >= 'A' && string[i][0] <= 'Z') ||
                (string[i][0] >= 'a' && string[i][0] <= 'z')) {
                util.print(string[i]);
                ++lcount1;
                if(lcount1 < lcount) {
                    util.print(',');
                }
            }
        }
        util.print('|');
        for( var j = 0; j < string.length ; ++j) {
            if( !(string[j][0] >= 'A' && string[j][0] <= 'Z') &&
                !(string[j][0] >= 'a' && string[j][0] <= 'z')) {
                util.print(string[j]);
                ++ncount1;
                if(ncount1 < ncount) {
                    util.print(',');
                }
            }
        }
    }
    util.print('\n');
});
