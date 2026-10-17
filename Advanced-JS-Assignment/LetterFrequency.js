var readlinesync = require('readline-sync');

var text = readlinesync.question('Enter a string: ');
var frequencies = {};
var i;
var ch;
var firstRepeated = 'blank';

if (text.length === 0) {
	console.log('Please enter at least one character.');
} else {
	text = text.toLowerCase();

	for (i = 0; i < text.length; i++) {
		ch = text[i];

		if (ch >= 'a' && ch <= 'z') {
			if (frequencies[ch] === undefined) {
				frequencies[ch] = 1;
			} else {
				frequencies[ch] = frequencies[ch] + 1;
			}
		}
	}

	var letters = Object.keys(frequencies).sort();

	if (letters.length === 0) {
		console.log('No letters found in the input.');
	} else {
		console.log('Letter frequencies:');
		for (i = 0; i < letters.length; i++) {
			ch = letters[i];
			console.log(ch + ': ' + frequencies[ch]);
		}
	}

	for (i = 0; i < text.length; i++) {
		ch = text[i];
		if (ch >= 'a' && ch <= 'z' && frequencies[ch] > 1) {
			firstRepeated = ch;
			break;
		}
	}

	console.log('First letter that appears more than once: ' + firstRepeated);
}
