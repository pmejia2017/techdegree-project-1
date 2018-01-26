//Quotes section (note: years and citation are not actual, just used for project purposes)

var quotes = [
	{
		quote: "Behind every great man is a woman rolling her eyes.", source: "Jim Carrey", citation: "Interview", year: "1999", tags: "Comedian"
	},
	
	{
		quote: "A day without sunshine is like, you know, night.", source: "Steve Martin", tags: "Comedian"
	},
	
	{
		quote: "Roses are red, violets are blue, I'm schizophrenic, and so am I.", source: "Oscar Levant", tags: "Actor"
	},
	
	{
		quote: "Smoking kills. If you're killed, you've lost a very important part of your life.", source: "Brooke Shields", citation: "Interview", year: "1984", tags: "Model/Actress"
	},
	
	{
		quote: "People all over the world recognize me as a spiritual leader.", source: "Steven Seagal", year: "2012", tags: "Actor"
	}	
];

// getRandomQuote function selects random quote from array object

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// printQuote function calls getRandomQuote function and displays the results

function printQuote() {
	var message = ""; 
	var returnedQuote = getRandomQuote();
    message += '<p class="quote">' + returnedQuote.quote + '</p>';
    message += '<p class="source">' + returnedQuote.source;
    if (returnedQuote.citation !== undefined) {
		message += '<span class="citation">' + returnedQuote.citation + '</span>';
	}
	if (returnedQuote.year !== undefined) {	
    	message += '<span class="year">' + returnedQuote.year + '</span>';
	}
	if (returnedQuote.tags !== undefined) {
		message += '<span class="tags">' + returnedQuote.tags + '</span></p>';
	}
	document.getElementById('quote-box').innerHTML = message;
}

// randomColor function selects a random color to display along with the random quote

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
    var backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	document.body.style.background = backgroundColor;	
}

// method to refresh a new quote and color after 10 seconds

window.setInterval(function() { printQuote(); randomColor(); }, 10000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);