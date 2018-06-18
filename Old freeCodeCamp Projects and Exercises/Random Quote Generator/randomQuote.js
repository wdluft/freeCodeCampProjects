var quotes = [
	{
		"quote": "We must all either wear out or rust out, every one of us. My choice is to wear out.",
		"author": "Theodore Roosevelt"
	},
	{
		"quote": "It's not what happens to you, but how you react to it that matters.",
		"author": "Epictetus"
	},
	{
		"quote": "The best revenge is not to be like that.",
		"author": "Marcus Aurelius"
	},
	{
		"quote": "There is good in everything, if only we look for it.",
		"author": "Laura Ingalls Wilder"
	},
	{
		"quote": "You have no responsibility to live up to what other people think you ought to accomplish. I have no responsibility to be like they expect me to be. It's their mistake, not my failing.",
		"author": "Richard Feynman"
	},
	{
		"quote": "I don't feel pressure, either. I don't give a toss about it. I spent the afternoon of Sunday, July 9, 2006, in Berlin sleeping and playing the PlayStation. In the evening, I went out and won the World Cup.",
		"author": "Andrea Pirlo"
	},
	{
		"quote": "All we have to decide is what to do with the time that is given us.",
		"author": "Gandalf"
	},
	{
		"quote": "It is wonderful how much may be done if we are always doing.",
		"author": "Thomas Jefferson"
	},
	{
		"quote": "Perserverance in almost any plan is better than fickleness and fluctuation.",
		"author": "Alexander Hamilton"
	},
	{
		"quote": "You make your choices, and then your choices make you. Every decision, no matter how slight, alters the trajectory of your life.",
		"author": "Darren Hardy"
	},
	{
		"quote": "I wish to have as my epitaph: 'Here lies a man who was wise enough to bring into his service men who knew more than he.'",
		"author": "Andrew Carnegie"
	},
	{
		"quote": "Character is fate",
		"author": "Heraclitus"
	}
];

var person          = document.querySelector("#person");
var theQuote        = document.querySelector("#theQuote");
var quoteButton     = document.querySelector("#quoteButton");
var tweetThisButton = document.querySelector("#tweetThisButton");
var randomQuote     = {};

newQuote();

quoteButton.addEventListener("click", function(){
	newQuote();
});

tweetThisButton.addEventListener("click", function(){
      openURL('https://twitter.com/intent/tweet?related=freecodecamp,IAmWillDl&url=https%3A%2F%2Fcodepen.io%2Fwdluft%2Ffull%2FPQbBRx%2F&text=' + 
      	encodeURIComponent('"' + randomQuote.quote + '" ' + randomQuote.author));
  });


function newQuote(){
	randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	theQuote.textContent = "\"" + randomQuote.quote + "\"";
	person.textContent = "-" + randomQuote.author;
}

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}