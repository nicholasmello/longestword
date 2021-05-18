var fs = require("fs");
var words = fs.readFileSync("words.txt").toString();
words = words.split("\n");

var badLetters = /[gkmqvwxzis-]/;
var longestAcceptableWord = [""];

for (var testWord of words) {
	if (!testWord.match(badLetters) && testWord.length >= longestAcceptableWord[0].length) {
		if (testWord.length === longestAcceptableWord[0].length) {
			longestAcceptableWord.push(testWord);
		} else {
			longestAcceptableWord = [];
			longestAcceptableWord[0] = testWord;
		}
	}
}
console.log(longestAcceptableWord);