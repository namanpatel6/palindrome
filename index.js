module.exports = Phrase;

String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}

String.prototype.blank = function() {
	return this === '' || this.match(/^\s+$/) !== null 
}

function palindrome(string) {
	let processedContent = string.toLowerCase();
	return processedContent === reverse(processedContent);
}

//Defines a Phrase object
function Phrase(content) {
	this.content = content;

	this.processor = function(string) {
		return string.toLowerCase();
	}

	//Returns content processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.letters().toLowerCase();
	}

	//Returns the letters in the content.
	// For example:
	//   new Phrase("Hello, world!").letters() === "Helloworld"
	this.letters = function() {
		return Array.from(this.content).filter(c => c.match(/[a-zA-Z]/)).join("");
	}

	//Returns true if the phrase is a palindrome, false otherwise.
	this.palindrome = function() {
		return this.processedContent() === this.processedContent().reverse();
	}

	//Makes the phrase LOUDER.
	this.louder = function() {
		return this.content.toUpperCase();
	}
}

function TranslatedPhrase(content, translation) {
	this.content = content;
	this.translation = translation;

	//Returns translation processed for plaindrome testing
	this.processedContent = function processedContent() {
		return this.processor(this.translation);
	}
}

TranslatedPhrase.prototype = new Phrase();