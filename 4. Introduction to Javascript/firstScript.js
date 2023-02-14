// word length 
var tweet = prompt("Enter the tweet you want to publish:");
var length = tweet.length;
alert("you have entered around "+ length + " words. You have around "+ (280 - length) + " words");

// Slicing in javascript strings
var name = "Kavyajeet Bora";
name.slice(0,1)  // printing first character
name.slice(0,3)
name.slice(0,1)

// Tweeter character Slicing
var tweet = prompt("Enter the tweet you want to publish:");
alert(tweet.slice(0,140));

// Changing the string to uppercase/lowercase

var text = "Kavyajeet Bora";
text = text.toUpperCase();

// Capitalizing the first character of the string
var text = "Kavyajeet Bora";
var output = text.slice(0,1).toUpperCase() + text.slice(1,).toLowerCase();
alert(output);
