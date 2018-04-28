var apiURL = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=";
var articleURL = "https://en.wikipedia.org/?curid="
var searchString;
var wikiJSON;
var searchURL;

//GET STRING INPUT FROM USER WHEN THEY HIT ENTER
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		searchString = $(this).val();
		console.log(searchString);
		searchURL = apiURL + searchString;
		$.ajax({
			type: "GET",
			url: "https://en.wikipedia.org/w/api.php",
			data: {action: "query", format: "json", prop: "extracts", generator: "search", exintro: 1, explaintext: 1, exsectionformat: "wiki", gsrsearch: searchString, gsrinfo: "totalhits|suggestion|rewrittenquery", gsrprop: "size|wordcount|timestamp|snippet"},
			dataType: "jsonp",
			cache: true,
			success: function(x){
				wikiJSON = x;
				getContent(wikiJSON);
			}
		});
	}
});

//GET STRING INPUT FROM USER WHEN THEY HIT SEARCH BUTTON
$("#searchButton").on("click", function(){
	searchString = $("#userInput").val();
	console.log(searchString);
	searchURL = apiURL + searchString;

	$.ajax({
		type: "GET",
		url: "https://en.wikipedia.org/w/api.php",
		data: {action: "query", format: "json", prop: "extracts", generator: "search", exintro: 1, explaintext: 1, exsectionformat: "wiki", gsrsearch: searchString, gsrinfo: "totalhits|suggestion|rewrittenquery", gsrprop: "size|wordcount|timestamp|snippet"},
		dataType: "jsonp",
		cache: true,
		success: function(x){
			wikiJSON = x;
			getContent(wikiJSON);
		}
	});
});

//SUCCESS FUNCTION FOR ACCESSING API
function getContent(data){
	var pageIDs = Object.getOwnPropertyNames(data.query.pages);
	for(var i = 0; i < pageIDs.length; i++){
		$(".searchResults").append("<div class=results><h3><a href='" + articleURL + pageIDs[i] + "' target='_blank'>" + data.query.pages[pageIDs[i]].title + "</a></h3><p>" + data.query.pages[pageIDs[i]].extract + "</p></div>");
	}
}

//TOGGLE ABILITY TO SEARCH
$(".fa-map-signs").click(function(){
	$("input[type='text']").fadeToggle(0);
	$("button[type='submit']").fadeToggle(0);
	$("#clickIcon").fadeToggle(0);
});