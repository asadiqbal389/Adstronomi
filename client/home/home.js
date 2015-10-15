//Meteor.subscribe( "vids");

Template.carousel.onRendered(function () {
  	this.$('#carousel').slick({
	   	dots: false,
	  	infinite: false,
	  	speed: 300,
	  	adaptiveHeight:true,
	  	mobileFirst: true,
	  	respondTo: 'slider',
	  	slidesToShow: 10,
	  	slidesToScroll: 1,
	  	responsive: [
					    {
					      breakpoint: 1024,
					      settings: {
					        slidesToShow: 3,
					        slidesToScroll: 3
					      }
					    },
					    {
					      breakpoint: 600,
					      settings: {
					        slidesToShow: 2,
					        slidesToScroll: 2
					      }
					    },
					    {
					      breakpoint: 480,
					      settings: {
					        slidesToShow: 3,
					        slidesToScroll: 1
					      }
	    					}
	    				]
	});
});
Template.carouselauto.onRendered(function () {
  	this.$('#carouselauto').slick({
	   	dots: false,
	  	infinite: false,
	  	speed: 300,
	  	adaptiveHeight:true,
	  	mobileFirst: true,
	  	respondTo: 'slider',
	  	slidesToShow: 10,
	  	slidesToScroll: 1,
	  	responsive: [
					    {
					      breakpoint: 1024,
					      settings: {
					        slidesToShow: 3,
					        slidesToScroll: 3
					      }
					    },
					    {
					      breakpoint: 600,
					      settings: {
					        slidesToShow: 2,
					        slidesToScroll: 2
					      }
					    },
					    {
					      breakpoint: 480,
					      settings: {
					        slidesToShow: 3,
					        slidesToScroll: 1
					      }
	    					}
	    				]
	});
});
Template.carousellife.onRendered(function () {
  	this.$('#carousellife').slick({
	   	dots: false,
	  	infinite: false,
	  	speed: 300,
	  	adaptiveHeight:true,
	  	mobileFirst: true,
	  	respondTo: 'slider',
	  	slidesToShow: 10,
	  	slidesToScroll: 1,
	  	responsive: [
					    {
					      breakpoint: 1024,
					      settings: {
					        slidesToShow: 3,
					        slidesToScroll: 3
					      }
					    },
					    {
					      breakpoint: 600,
					      settings: {
					        slidesToShow: 2,
					        slidesToScroll: 2
					      }
					    },
					    {
					      breakpoint: 480,
					      settings: {
					        slidesToShow: 3,
					        slidesToScroll: 1
					      }
	    					}
	    				]
	});
});

Template.carouselfood.onRendered(function () {
  	this.$('#carouselfood').slick({
	   	dots: false,
	  	infinite: false,
	  	speed: 300,
	  	adaptiveHeight:true,
	  	mobileFirst: true,
	  	respondTo: 'slider',
	  	slidesToShow: 10,
	  	slidesToScroll: 1,
	  	responsive: [
					    {
					      breakpoint: 1024,
					      settings: {
					        slidesToShow: 3,
					        slidesToScroll: 3
					      }
					    },
					    {
					      breakpoint: 600,
					      settings: {
					        slidesToShow: 2,
					        slidesToScroll: 2
					      }
					    },
					    {
					      breakpoint: 480,
					      settings: {
					        slidesToShow: 3,
					        slidesToScroll: 1
					      }
	    					}
	    				]
	});
});

Template.carouseltech.onRendered(function () {
  	this.$('#carouseltech').slick({
	   	dots: false,
	  	infinite: false,
	  	speed: 300,
	  	adaptiveHeight:true,
	  	mobileFirst: true,
	  	respondTo: 'slider',
	  	slidesToShow: 10,
	  	slidesToScroll: 1,
	  	responsive: [
					    {
					      breakpoint: 1024,
					      settings: {
					        slidesToShow: 3,
					        slidesToScroll: 3
					      }
					    },
					    {
					      breakpoint: 600,
					      settings: {
					        slidesToShow: 2,
					        slidesToScroll: 2
					      }
					    },
					    {
					      breakpoint: 480,
					      settings: {
					        slidesToShow: 3,
					        slidesToScroll: 1
					      }
	    					}
	    				]
	});
});

Template.carouselnsfw.onRendered(function () {
  	this.$('#carouselnsfw').slick({
	   	dots: false,
	  	infinite: false,
	  	speed: 300,
	  	adaptiveHeight:true,
	  	mobileFirst: true,
	  	respondTo: 'slider',
	  	slidesToShow: 10,
	  	slidesToScroll: 1,
	  	responsive: [
					    {
					      breakpoint: 1024,
					      settings: {
					        slidesToShow: 3,
					        slidesToScroll: 3
					      }
					    },
					    {
					      breakpoint: 600,
					      settings: {
					        slidesToShow: 2,
					        slidesToScroll: 2
					      }
					    },
					    {
					      breakpoint: 480,
					      settings: {
					        slidesToShow: 3,
					        slidesToScroll: 1
					      }
	    					}
	    				]
	});
});
Meteor.call("getVdoId", function(error, vdoIdresults) {
	var jsonthumb = [ ];
	for (var i = 0; i < vdoIdresults.length; i++) {
		Meteor.http.call("GET", "https://www.googleapis.com/youtube/v3/videos?id="+vdoIdresults[i].videoid+"&key="+Meteor.settings.public.youtubeApiKey+"&part=snippet,statistics,contentDetails",
			function (error, youtubeinforesult) {
			    	if (!error) {
				    	var youtubejson = JSON.parse(youtubeinforesult.content);
				    	jsonthumb.push({"imgthb" : youtubejson.items[0].snippet.thumbnails.default.url});
				    	// testVariable.set(jsonthumb);
				    	Session.set("jsonArrThum", jsonthumb);
			    	}
		});
		
      }
});

Meteor.call("getVdoAutoId", function(error, vdoIdAutoresults) {
	var jsonautothumb = [ ];
	for (var i = 0; i < vdoIdAutoresults.length; i++) {
		Meteor.http.call("GET", "https://www.googleapis.com/youtube/v3/videos?id="+vdoIdAutoresults[i].videoid+"&key="+Meteor.settings.public.youtubeApiKey+"&part=snippet,statistics,contentDetails",
			function (error, youtubeAutoinforesult) {
			    	if (!error) {
				    	var youtubeautojson = JSON.parse(youtubeAutoinforesult.content);
				    	jsonautothumb.push({"imgautothb" : youtubeautojson.items[0].snippet.thumbnails.default.url});
				    	//testVariable.set(jsonthumb);
				    	Session.set("jsonArrAutoThum", jsonautothumb);
			    	}
		});
      }
});
Meteor.call("getVdoLifeId", function(error, vdoIdLiferesults) {
	var jsonlifethumb = [ ];
	for (var i = 0; i < vdoIdLiferesults.length; i++) {
		Meteor.http.call("GET", "https://www.googleapis.com/youtube/v3/videos?id="+vdoIdLiferesults[i].videoid+"&key="+Meteor.settings.public.youtubeApiKey+"&part=snippet,statistics,contentDetails",
			function (error, youtubeLifenforesult) {
			    	if (!error) {
				    	var youtubelifejson = JSON.parse(youtubeLifenforesult.content);
				    	jsonlifethumb.push({"imglifethb" : youtubelifejson.items[0].snippet.thumbnails.default.url});
				    	//testVariable.set(jsonthumb);
				    	Session.set("jsonArrLifeThum", jsonlifethumb);
			    	}
		});
      }
});
Meteor.call("getVdofoodId", function(error, vdoIdFoodresults) {
	var jsonfoodthumb = [ ];
	for (var i = 0; i < vdoIdFoodresults.length; i++) {
		Meteor.http.call("GET", "https://www.googleapis.com/youtube/v3/videos?id="+vdoIdFoodresults[i].videoid+"&key="+Meteor.settings.public.youtubeApiKey+"&part=snippet,statistics,contentDetails",
			function (error, youtubeFoodnforesult) {
			    	if (!error) {
				    	var youtubeFoodjson = JSON.parse(youtubeFoodnforesult.content);
				    	jsonfoodthumb.push({"imgfoodthb" : youtubeFoodjson.items[0].snippet.thumbnails.default.url});
				    	//testVariable.set(jsonthumb);
				    	Session.set("jsonArrFoodThum", jsonfoodthumb);
			    	}
		});
      }
});

Meteor.call("getVdotechId", function(error, vdoIdtechresults) {
	var jsontechthumb = [ ];
	for (var i = 0; i < vdoIdtechresults.length; i++) {
		Meteor.http.call("GET", "https://www.googleapis.com/youtube/v3/videos?id="+vdoIdtechresults[i].videoid+"&key="+Meteor.settings.public.youtubeApiKey+"&part=snippet,statistics,contentDetails",
			function (error, youtubeTechnforesult) {
			    	if (!error) {
				    	var youtubeTechjson = JSON.parse(youtubeTechnforesult.content);
				    	jsontechthumb.push({"imgtechthb" : youtubeTechjson.items[0].snippet.thumbnails.default.url});
				    	//testVariable.set(jso nthumb);
				    	Session.set("jsonArrTechThum", jsontechthumb);
			    	}
		});
      }
});

Meteor.call("getVdonsfwId", function(error, vdoIdnsfwresults) {
	var jsonnsfwthumb = [ ];
	for (var i = 0; i < vdoIdnsfwresults.length; i++) {
		Meteor.http.call("GET", "https://www.googleapis.com/youtube/v3/videos?id="+vdoIdnsfwresults[i].videoid+"&key="+Meteor.settings.public.youtubeApiKey+"&part=snippet,statistics,contentDetails",
			function (error, youtubeNsfwnforesult) {
			    	if (!error) {
				    	var youtubeNsfwjson = JSON.parse(youtubeNsfwnforesult.content);
				    	jsonnsfwthumb.push({"imgnsfwthb" : youtubeNsfwjson.items[0].snippet.thumbnails.default.url});
				    	//testVariable.set(jso nthumb);
				    	Session.set("jsonArrNsfwThum", jsonnsfwthumb);
			    	}
		});
      }
});
Template.carouselnsfw.helpers({
	getYouNsfwIds: function() {
		
		return  Session.get("jsonArrNsfwThum");
      }
});

Template.carouseltech.helpers({
	getYouTechIds: function() {
		return  Session.get("jsonArrTechThum");
      }
});

Template.carouselfood.helpers({
	getYouFoodIds: function() {
		return  Session.get("jsonArrFoodThum");
      }
});
Template.carousellife.helpers({
	getYouLifeIds: function() {
		return  Session.get("jsonArrLifeThum");
      }
});
Template.carouselauto.helpers({
	getYouAutoIds: function() {
		return  Session.get("jsonArrAutoThum");
      }
});
Template.carousel.helpers({
	getYouIds: function() {
		return  Session.get("jsonArrThum");
      }
});
