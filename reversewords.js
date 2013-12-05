/** 
    (c) Sergio Morales 2013
    CodeEval Challenge: Reverse Words
    Date Solved: 12/05/13
**/

var fs = require("fs");
var util = require("util");

// Retrieve data from file, delimited by newlines
var file = fs.readFileSync(process.argv[2]);
var linearr = file.toString().split('\n');

// Iterate through each line
linearr.forEach(function (line) {
    // If the line is not empty, split line by words and reverse
    if(line !== "") {
        var words = line.split(' ');
        for(var i = words.length - 1; i >= 0; --i) {
                // Print the words in reverse order
                util.print(words[i] + " ");
        }
        // End line. process.stdout.write() valid as well
        util.print('\n');
    }
});
