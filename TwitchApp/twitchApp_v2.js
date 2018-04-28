//VARIABLES
var livestreamURL = "https://wind-bow.gomix.me/twitch-api/streams/"
var usersURL = "https://wind-bow.gomix.me/twitch-api/users/"
var twitchChannels = ["freecodecamp", "loadingreadyrun", "unarmedoracle", "esl_sc2"];
var displayChannel = {
	"display": "block"
};
var hideChannel = {
	"display": "none"
};
var livestreamJSON, userInfoJson, streamerName, displayName, channelLogo, channelURL, streamedGame, streamTitle;

//==========
//RUN API INF0 WHEN PAGE LOADS

$(document).ready(function(){
	for(var i = 0; i < twitchChannels.length; i++){
		accessAPI(twitchChannels[i]);
	}
});

//==========
//FUNCTIONS TO GET INFO FROM THE API
function accessAPI(channelName){
	//GET USER INFO FROM API	
	var currentUserApiUrl = usersURL + channelName;
	$.ajax({
		type: "GET",
		url: currentUserApiUrl,
		dataType: "jsonp",
		cache: true,
		success: function(x){
			userInfoJSON = x;
			userInfo(userInfoJSON, channelName);
		},
		error: function(){
			alert("Channel does not exist");
		}
	});
	//GET LIVESTREAM INFO FROM API
	var currentChannelApiUrl = livestreamURL + channelName;
	$.ajax({
		type: "GET",
		url: currentChannelApiUrl,
		dataType: "jsonp",
		cache: true,
		success: function(x){
			livestreamJSON = x;
			livestreamInfo(livestreamJSON, channelName);
		},
		error: function(){
			alert("Channel does not exist");
		}
	});
}

function userInfo(json, nameOfChannel){
	streamerName = nameOfChannel;
	displayName = userInfoJSON.display_name;
	channelLogo = userInfoJSON.logo;
	channelURL = "https://www.twitch.tv/" + displayName;
	$("#" + streamerName).append("<a target='_blank' href='" + channelURL + "'><img class='channelLogo' src='" + channelLogo + "'><p class='streamerName'>" + displayName + "</p></a>");
}

function livestreamInfo(json, nameOfChannel){
	streamerName = nameOfChannel;
	if(livestreamJSON.stream != null){
		streamTitle = livestreamJSON.stream.channel.status;
		streamedGame = livestreamJSON.stream.game;
		$("#" + streamerName).addClass("online").removeClass("offline");
		$("#" + streamerName).append("<p class='isStreaming'> - " + streamedGame + " - Stream Title: " + streamTitle + "</p>");
	} else{
		$("#" + streamerName).addClass("offline").removeClass("online");
	}
}

//==========
//ADD A NEW CHANNEL
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		//grabbing new channel text from input
		var newChannel = $(this).val();
		$(this).val("");
		twitchChannels.push(newChannel);
		//create a new li and add to ul
		$("ul").append("<li id='" + newChannel + "'><span><i class='fa fa-trash'></i></span></li>");
		accessAPI(twitchChannels[twitchChannels.length - 1])
	}
});

//==========
//REMOVE CHANNEL
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//==========
//BUTTONS TO DISPLAY LIVE/OFFLINE CHANNELS
$("#allButton").click(function(){
	// getApiInfo();
	for(var i = 0; i < twitchChannels.length; i++){
		$("#" + twitchChannels[i]).css(displayChannel);
	}
	$(this).addClass("active");
	$("#onlineButton").removeClass("active");
	$("#offlineButton").removeClass("active");
});

$("#onlineButton").click(function(){
	// getApiInfo();
	hideAndShowChannels("offline");
	$(this).addClass("active");
	$("#offlineButton").removeClass("active");
	$("#allButton").removeClass("active");
});

$("#offlineButton").click(function(){
	// getApiInfo();
	hideAndShowChannels("online");
	$(this).addClass("active");
	$("#onlineButton").removeClass("active");
	$("#allButton").removeClass("active");
});

function hideAndShowChannels(channelStatus){
	for(var i = 0; i < twitchChannels.length; i++){
		if($("#" + twitchChannels[i]).hasClass(channelStatus)){
			$("#" + twitchChannels[i]).css(hideChannel);
		} else{
			$("#" + twitchChannels[i]).css(displayChannel);
		}
	}
}