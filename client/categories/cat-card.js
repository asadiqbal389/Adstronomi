
Meteor.call("getVdoId", function(error, vdoIdresults) {
	var jsonthumbList = [ ];
	var vdo_dur = "";
	for (var i = 0; i < vdoIdresults.length; i++) {
		Meteor.http.call("GET", "https://www.googleapis.com/youtube/v3/videos?id="+vdoIdresults[i].videoid+"&key="+Meteor.settings.public.youtubeApiKey+"&part=snippet,statistics,contentDetails",
			  function (error, youtubeinfoListresult) {
			    if (!error) {
			    	var youtubejson = JSON.parse(youtubeinfoListresult.content);
			    	vdo_dur = youtubejson.items[0].contentDetails.duration
			    	jsonthumbList.push({
			    						   "imgthbList" : youtubejson.items[0].snippet.thumbnails.medium.url,
			    						   "title" : youtubejson.items[0].snippet.title,
			    						   "duration" : vdo_dur.replace("PT","").replace("H",":").replace("M",":").replace("S",""),
			    						   "views" : youtubejson.items[0].statistics.viewCount,
			    						   "ids" :  youtubejson.items[0].id	 
    									})
			    	Session.set("jsonArrListThum", jsonthumbList);
			    }
		  });
	}

});
		

Template.cardcatsingle.helpers({
	getCatList : function() {
		return Session.get("jsonArrListThum")
	}
});

Meteor.call("getVdoAutoId", function(error, vdoIdautoresults) {
	var jsonthumbList = [ ];
	var vdo_dur_auto = "";
	for (var i = 0; i < vdoIdautoresults.length; i++) {
		Meteor.http.call("GET", "https://www.googleapis.com/youtube/v3/videos?id="+vdoIdautoresults[i].videoid+"&key="+Meteor.settings.public.youtubeApiKey+"&part=snippet,statistics,contentDetails",
			  function (error, youtubeautoinfoListresult) {
			    if (!error) {
			    	var youtubeautojson = JSON.parse(youtubeautoinfoListresult.content);
			    	vdo_dur_auto = youtubeautojson.items[0].contentDetails.duration
			    	jsonthumbList.push({"imgthbListauto" : youtubeautojson.items[0].snippet.thumbnails.medium.url,
			    						   "titleauto" : youtubeautojson.items[0].snippet.title,
			    						   "durationauto" : vdo_dur_auto.replace("PT","").replace("H",":").replace("M",":").replace("S",""),
			    						   "viewsauto" : youtubeautojson.items[0].statistics.viewCount,
			    						   "idsauto" :  youtubeautojson.items[0].id	 
    									})
			    	Session.set("jsonArrListAutoThum", jsonthumbList);
			    }
		  });
	}

});
		

Template.cardcatauto.helpers({
	getCatAutoList : function() {
		return Session.get("jsonArrListAutoThum")
	}
});

Meteor.call("getVdoLifeId", function(error, vdoIdliferesults) {
	var jsonthumbList = [ ];
	var vdo_dur_life = "";
	for (var i = 0; i < vdoIdliferesults.length; i++) {
		Meteor.http.call("GET", "https://www.googleapis.com/youtube/v3/videos?id="+vdoIdliferesults[i].videoid+"&key="+Meteor.settings.public.youtubeApiKey+"&part=snippet,statistics,contentDetails",
			  function (error, youtubelifeinfoListresult) {
			    if (!error) {
			    	var youtubelifejson = JSON.parse(youtubelifeinfoListresult.content);
			    	vdo_dur_life = youtubelifejson.items[0].contentDetails.duration
			    	jsonthumbList.push({"imgthbListlife" : youtubelifejson.items[0].snippet.thumbnails.medium.url,
			    						   "titlelife" : youtubelifejson.items[0].snippet.title,
			    						   "durationalife" : vdo_dur_life.replace("PT","").replace("H",":").replace("M",":").replace("S",""),
			    						   "viewslife" : youtubelifejson.items[0].statistics.viewCount,
			    						   "idslife" :  youtubelifejson.items[0].id	 
    									})
			    	Session.set("jsonArrListLifeThum", jsonthumbList);
			    }
		  });
	}

});
		

Template.cardcatlife.helpers({
	getCatLifeList : function() {
		return Session.get("jsonArrListLifeThum")
	}
});

Meteor.call("getVdofoodId", function(error, vdoIdfoodresults) {
	var jsonthumbList = [ ];
	var vdo_dur_food = "";
	for (var i = 0; i < vdoIdfoodresults.length; i++) {
		Meteor.http.call("GET", "https://www.googleapis.com/youtube/v3/videos?id="+vdoIdfoodresults[i].videoid+"&key="+Meteor.settings.public.youtubeApiKey+"&part=snippet,statistics,contentDetails",
			  function (error, youtubefoodinfoListresult) {
			    if (!error) {
			    	var youtubefoodjson = JSON.parse(youtubefoodinfoListresult.content);
			    	vdo_dur_food = youtubefoodjson.items[0].contentDetails.duration
			    	jsonthumbList.push({"imgthbListfood" : youtubefoodjson.items[0].snippet.thumbnails.medium.url,
			    						   "titlefood" : youtubefoodjson.items[0].snippet.title,
			    						   "durationfood" : vdo_dur_food.replace("PT","").replace("H",":").replace("M",":").replace("S",""),
			    						   "viewsfood" : youtubefoodjson.items[0].statistics.viewCount,
			    						   "idsfood" :  youtubefoodjson.items[0].id	 
    									})
			    	Session.set("jsonArrListFoodThum", jsonthumbList);
			    }
		  });
	}

});
		

Template.cardcatfood.helpers({
	getCatFoodList : function() {
		return Session.get("jsonArrListFoodThum")
	}
});

Meteor.call("getVdotechId", function(error, vdoIdtechresults) {
	var jsonthumbList = [ ];
	var vdo_dur_tech = "";
	for (var i = 0; i < vdoIdtechresults.length; i++) {
		Meteor.http.call("GET", "https://www.googleapis.com/youtube/v3/videos?id="+vdoIdtechresults[i].videoid+"&key="+Meteor.settings.public.youtubeApiKey+"&part=snippet,statistics,contentDetails",
			  function (error, youtubetechinfoListresult) {
			    if (!error) {
			    	var youtubetechjson = JSON.parse(youtubetechinfoListresult.content);
			    	vdo_dur_tech = youtubetechjson.items[0].contentDetails.duration
			    	jsonthumbList.push({"imgthbListtech" : youtubetechjson.items[0].snippet.thumbnails.medium.url,
			    						   "titletech" : youtubetechjson.items[0].snippet.title,
			    						   "durationtech" : vdo_dur_tech.replace("PT","").replace("H",":").replace("M",":").replace("S",""),
			    						   "viewstech" : youtubetechjson.items[0].statistics.viewCount,
			    						   "idstech" :  youtubetechjson.items[0].id	 
    									})
			    	Session.set("jsonArrListTechThum", jsonthumbList);
			    }
		  });
	}

});
		

Template.cardcattech.helpers({
	getCatTechList : function() {
		return Session.get("jsonArrListTechThum")
	}
});

Meteor.call("getVdonsfwId", function(error, vdoIdnsfwresults) {
	var jsonthumbList = [ ];
	var vdo_dur_nsfw = "";
	for (var i = 0; i < vdoIdnsfwresults.length; i++) {
		Meteor.http.call("GET", "https://www.googleapis.com/youtube/v3/videos?id="+vdoIdnsfwresults[i].videoid+"&key="+Meteor.settings.public.youtubeApiKey+"&part=snippet,statistics,contentDetails",
			  function (error, youtubensfwinfoListresult) {
			    if (!error) {
			    	var youtubensfwjson = JSON.parse(youtubensfwinfoListresult.content);
			    	vdo_dur_nsfw = youtubensfwjson.items[0].contentDetails.duration
			    	jsonthumbList.push({"imgthbListnsfw" : youtubensfwjson.items[0].snippet.thumbnails.medium.url,
			    						   "titlensfw" : youtubensfwjson.items[0].snippet.title,
			    						   "durationnsfw" : vdo_dur_nsfw.replace("PT","").replace("H",":").replace("M",":").replace("S",""),
			    						   "viewsnsfw" : youtubensfwjson.items[0].statistics.viewCount,
			    						   "idsnsfw" :  youtubensfwjson.items[0].id	 
    									})
			    	Session.set("jsonArrListNsfwThum", jsonthumbList);
			    }
		  });
	}

});
		

Template.cardcatnsfw.helpers({
	getCatNsfwList : function() {
		return Session.get("jsonArrListNsfwThum")
	}
});
