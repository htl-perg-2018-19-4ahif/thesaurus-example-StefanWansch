let ar = process.argv.slice(2);
const fs = require('fs')
let fileName = "openthesaurus.txt"

if (ar.length == 0) {
    console.log("Please specify words");
} else {
    read(ar);
}

function read(array) {
    fs.readFile(fileName, 'utf8', function (err, contents) {
        let ar = contents.split("\n");
        let word = "";
        for (let i = 0; i < array.length; i++) {
            if (!contents.includes(array[i]))
                console.log(array[i] + ": No matches found");
        }
        for (let i = 0; i < ar.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (ar[i].includes(array[j])) {
                    let arWords = ar[i].split(";");
                    for (let k = 0; k < arWords.length && word == ""; k++) {
                        if (arWords[k].includes(array[j])) {
                            console.log(arWords[k] + ": ");
                            word = arWords[k];
                        }
                    }
                    for (let k = 0; k < arWords.length; k++) {
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