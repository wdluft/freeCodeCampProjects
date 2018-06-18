//VARIABLES
var livestreamURL = "https://wind-bow.gomix.me/twitch-api/streams/"
var usersURL = "https://wind-bow.gomix.me/twitch-api/users/"
var livestreamJSON;
var userInfoJSON;
var twitchChannels = ["freecodecamp", "loadingreadyrun", "kate", "unarmedoracle", "anch0r1", "esl_sc2"];
var displayChannel = {
	"display": "block"
};
var hideChannel = {
	"display": "none"
};

//==========
//RUN API INF0 WHEN PAGE LOADS

$(document).ready(function(){
	getApiInfo();
});

//==========
//FUCNTION TO CHECK CHANNEL INFO
function getApiInfo(){
	for(var i = 0; i < twitchChannels.length; i++){
		getUserInfo(twitchChannels[i]);
		getLivestreamInfo(twitchChannels[i]);
	}
}

//==========
//FUNCTIONS TO GET INFO FROM THE API
function getLivestreamInfo(channelName){
	var currentChannelApiUrl = livestreamURL + channelName;
	$.ajax({
		type: "GET",
		url: currentChannelApiUrl,
		dataType: "jsonp",
		cache: true,
		success: function(x){
			livestreamJSON = x;
			livestreamInfo(livestreamJSON, channelName);
		}
	});
}

function getUserInfo(channelName){
	var currentUserApiUrl = usersURL + channelName;
	$.ajax({
		type: "GET",
		url: currentUserApiUrl,
		dataType: "jsonp",
		cache: true,
		success: function(x){
			userInfoJSON = x;
			userInfo(livestreamJSON, channelName);
		}
	});
}

function userInfo(json, nameOfChannel){
	var streamerName = nameOfChannel;
	var displayName = userInfoJSON.display_name;
	var channelLogo = userInfoJSON.logo;
	$("#" + streamerName).html("<img class='channelLogo' src='" + channelLogo + "'><p class='streamerName'>" + displayName + "</p>");
}

function livestreamInfo(json, nameOfChannel){
	var streamerName = nameOfChannel;
	if(livestreamJSON.stream != null){
		var channelURL = livestreamJSON.stream.channel.url;
		var streamTitle = livestreamJSON.stream.channel.status;
		var channelLogo = livestreamJSON.stream.channel.logo;
		var displayName = livestreamJSON.stream.channel.display_name;
		// console.log(streamerName + "is live");
		$("#" + streamerName).addClass("online").removeClass("offline");
		$("#" + streamerName).html("<img class='channelLogo' src='" + channelLogo + "'><p class='isStreaming streamerName'><a target='_blank' href='" + channelURL + "'>" + displayName + " </a> - Stream Title: " + streamTitle + "</p>");
	} else{
		// console.log(streamerName + " is not live");
		$("#" + streamerName).addClass("offline").removeClass("online");
	}
}

//==========
//BUTTONS TO DISPLAY LIVE/OFFLINE CHANNELS
$("#allButton").click(function(){
	getApiInfo();
	for(var i = 0; i < twitchChannels.length; i++){
		$("#" + twitchChannels[i]).css(displayChannel);
	}
});

$("#onlineButton").click(function(){
	getApiInfo();
	hideAndShowChannels("offline");
});

$("#offlineButton").click(function(){
	getApiInfo();
	hideAndShowChannels("online");
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


//==============================
//GET USER INFO
// $.ajax({
// 		type: "GET",
// 		url: "https://wind-bow.gomix.me/twitch-api/users/loadingreadyrun",
// 		dataType: "jsonp",
// 	cache: true,
// 		success: function(x){
// 			livestreamJSON = x;
// 			apiSuccess(livestreamJSON, "loadingreadyrun");
// 		}
// });

//==============================
//GET CHANNEL INFO
// $.ajax({
// 		type: "GET",
// 		url: "https://wind-bow.gomix.me/twitch-api/channels/loadingreadyrun",
// 		dataType: "jsonp",
// 	cache: true,
// 		success: function(x){
// 			livestreamJSON = x;
// 			apiSuccess(livestreamJSON, "loadingreadyrun");
// 		}
// 	});