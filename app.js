var ar = process.argv.slice(2);
var fs = require('fs');
var fileName = "openthesaurus.txt";
if (ar.length == 0) {
    console.log("Please specify words");
}
else {
    read(ar);
}
function read(array) {
    fs.readFile(fileName, 'utf8', function (err, contents) {
        var ar = contents.split("\n");
        var word = "";
        for (var i = 0; i < array.length; i++) {
            if (!contents.includes(array[i]))
                console.log(array[i] + ": No matches found");
        }
        for (var i = 0; i < ar.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (ar[i].includes(array[j])) {
                    var arWords = ar[i].split(";");
                    for (var k = 0; k < arWords.length && word == ""; k++) {
                        if (arWords[k].includes(array[j])) {
                            console.log(arWords[k] + ": ");
                            word = arWords[k];
                        }
                    }
                    for (var k = 0; k < arWords.length; k++) {
                        if (arWords[k] != word) {
                            console.log("\t" + arWords[k]);
                        }
                    }
                    word = "";
                }
            }
        }
    });
}
