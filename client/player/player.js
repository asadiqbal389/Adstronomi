Meteor.subscribe( "likevideos");
Template.iframeplayer.rendered = function() {
	var shrurl = window.location;
    	var url = window.location.pathname;
	var seltid = url.substring(url.lastIndexOf('/') + 1);
	Session.set("idCmt",seltid);
	Session.set("idgetCmt",seltid);
	HTTP.call("GET", "https://www.googleapis.com/youtube/v3/videos?id="+seltid+"&key="+Meteor.settings.public.youtubeApiKey+"&part=snippet,statistics,contentDetails",
		function (error, youtubeinforesult) {
		    	if (!error) {
			    	var youtubejson = JSON.parse(youtubeinforesult.content);
			    	$("#iframePlayerBox").html('<iframe width="100%" src="https://www.youtube.com/embed/'+youtubejson.items[0].id+'?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
			    	$(".vdoTitle").html('<a>'+youtubejson.items[0].snippet.title+'</a>');
			    	$(".sharebtn").html('<a href="http://www.facebook.com/share.php?u='+shrurl+'&title='+youtubejson.items[0].snippet.title+'" target="_blank" title="Facebook">'+
			    							'<span class="fa-stack fa-lg"><i class="fa fa-square-o fa-stack-2x"></i><i class="fa fa-facebook fa-stack-1x"></i></span>'+
			    						  '</a>'+
			    						 '<a title="Twitter" href="http://twitter.com/home?status='+youtubejson.items[0].snippet.title+' '+shrurl+'" target="_blank">'+
			    						 	'<span class="fa-stack fa-lg"><i class="fa fa-square-o fa-stack-2x"></i><i class="fa fa-twitter fa-stack-1x"></i></span>'+
			    						 '</a>'+
			    						  '<a title="Google+" href="https://plus.google.com/share?url='+shrurl+'" target="_blank">'+
			    						  	'<span class="fa-stack fa-lg"><i class="fa fa-square-o fa-stack-2x"></i><i class="fa fa-google-plus fa-stack-1x"></i></span>'+
			    						  '</a>'+ 
			    						  '<a title="Linkedin" href="http://www.linkedin.com/shareArticle?mini=true&url='+shrurl+'&title='+youtubejson.items[0].snippet.title+'" target="_blank">'+
			    						  	'<span class="fa-stack fa-lg"><i class="fa fa-square-o fa-stack-2x"></i><i class="fa fa-linkedin fa-stack-1x"></i></span>'+
			    						  '</a>');
		    	}
		});
}
Meteor.call("getVdoId", function(error, vdoIdSugResults) {
	Session.set("idsForSug",vdoIdSugResults);
});
Template.suggest.rendered = function() {
	var sugIds = Session.get("idsForSug");
	//var so rtArry = [];
	var vdo_dur = "";
	for (var i = 0; i < sugIds.length; i++) {
		HTTP.call("GET", "https://www.googleapis.com/youtube/v3/videos?id="+sugIds[i].videoid+"&key="+Meteor.settings.public.youtubeApiKey+"&part=snippet,statistics,contentDetails",
		  	function (error, youtubeinfoSugresult) {
		    		if (!error) {

		    			var youtubeSugjson = JSON.parse(youtubeinfoSugresult.content);
		    			vdo_dur = youtubeSugjson.items[0].contentDetails.duration
		    			$(".suggestList").append('<a href="/watch/'+youtubeSugjson.items[0].id+'" class="section--footer mdl-color--white mdl-grid sgtList" onclick="window.location.href = \'/watch/'+youtubeSugjson.items[0].id+'\'">'+
		    										'<div class="section__circle-container mdl-cell mdl-cell--5-col mdl-cell--2-col-phone">'+
										              	'<div class="section__circle-container__circle section__circle--big" style="background-image:url(\''+youtubeSugjson.items[0].snippet.thumbnails.medium.url+'\')"></div>'+
										           	'</div>'+
										           	'<div class="section__text mdl-cell mdl-cell--7-col-desktop mdl-cell--2-col-phone">'+
										              	'<h5>'+youtubeSugjson.items[0].snippet.title+'</h5>'+
										              	'<h6>Views: '+youtubeSugjson.items[0].statistics.viewCount+'</h6><h6>Durations: '+vdo_dur.replace("PT","").replace("H",":").replace("M",":").replace("S","")+'</h6>'+
										            '</div>'+
										          '</a>');  
		    			//console.log("count"+Number(youtubeSugjson.items[0].statistics.viewCount));
		    			//sortArry.push(youtu beSugjs on.items[0].statistics.viewCount);
		    		}
	   	});	
	}
}
Template.liketoggle.onRendered(function () {
	var urllikable = window.location.pathname;
	var seltlikableid = urllikable.substring(urllikable.lastIndexOf('/') + 1);
	var userLikedDataParsed = Meteor.users.find({"_id" : Meteor.userId()}).fetch();
	//console.log("userLikedDataParsed"+JSON.stringify(userLikedDataParsed[0].liksvdo));
	Meteor.defer(function() {
	//Meteor.call("liked",  function(error,likedresult){
	  //  if(!error){
	  	//var userLikedDataPar sed = likedresult[0].liksvdo;
	     
	      var checkLike = $("#likenddis");
		var checkedretun = $.inArray(seltlikableid.toString(), userLikedDataParsed[0].liksvdo)
			if(checkedretun == 1){
				checkLike.removeClass("is-checked");
				$("#switch-1").removeAttr("checked")
			}
			else if(checkedretun == -1){
				checkLike.addClass("is-checked");
				$("#switch-1").attr("checked");
			}
	     // }
	//});
	});
});

Template.liketoggle.events({
	'click #likenddis': function(e,t) {
		var urllike = window.location.pathname;
		var seltlikeid = urllike.substring(urllike.lastIndexOf('/') + 1);
		if($("#likenddis").hasClass("is-checked")){
			//console.log("seltlikeid " +seltlikeid);
			Meteor.call("likable", seltlikeid, function(error,result){
					    if(!error){
					        //console.log("like");
					        $("#likenddis").removeClass("is-checked");
					    }
			});
	  		return false;
	 	}
	 	else{
	 		Meteor.call("dislikable", seltlikeid, function(error,result){
		   		if(!error){
			        	$("#likenddis").addClass("is-checked");
			      }
			});
	  		return false;
	 	}	
      }
});
// Template.suggest.events({
// 	'click .sgtList': function(e,t) {
// 		console.log("href"+$(this).attr('href'));
// 	 	window.location.href = $(this).attr('href');
//       }
// });
// Template.coomentBox.events({
// 	'click .cmt-port-btn': function() {
// 	  	var cmmtBoxField = $('#commentBoxField').val();
// 	  	var flag = 1;
// 	  	var video_id = Session.get("idCmt");
// 	  	if(cmmtBoxField == ""){
// 	  		$("#commentBoxField").css('border','1px solid red');
// 	  		flag=0;
// 	  	}	
// 	  	if(flag == 1) {
// 		  	Meteor.call("portComments", cmmtBoxField, video_id, function(error,result){
// 				    if(error){
// 				        //console.log(e rror);
// 				        $('.erroCmt').html('Failed Upload.');
// 				    }
// 				    else{
// 				    		$("#commentBoxField").css('border','none');
// 		  				$('.erroCmt').html('Comment Successfully.');
// 			      		$('#commentBoxField').val('');
// 			  			//console.log(re sult);
// 				    }
// 			});
// 	  		return false;
// 	  	}
// 	}
// });
// Template.getcomments.rendered = function(){
// 		var video_id = Session.get("idgetCmt");
// 		Meteor.call("getCmts",  video_id, function(error,result){
// 		    	if(!error){
// 		    		var userPic = " ";
// 		        	for (var i = 0; i < result.length; i++) {
// 		        		var cmtDate = new Date(result[i].upldat);
// 		        		var user = Meteor.users.find({_id:result[i].userid}).fetch();
// 		        		if(Object.keys(user[0].services)[0] == "google") {
// 		        			userPic = user.services.google.picture;
// 		        		}	
// 		        		else if(Object.keys(user[0].services)[0] == "facebook") {
// 		        			userPic = "https://graph.facebook.com/v2.4/"+user[0].services.facebook.id+"/picture";
// 		        		}	
// 		        		if(user) {
// 		        			$(".cmtsList").append('<div class="mdl-card mdl-cell mdl-cell--12-col" style="box-shadow: none;min-height:134px;">'+
// 										            '<div class="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">'+
// 									       			'<div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">'+
// 											                	'<div class="section__circle-container__circle"  style="background:url(\''+userPic+'\') no-repeat center"></div>'+
// 											            '</div>'+
// 										              	'<div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">'+
// 											                	'<h5>'+user[0].profile.name+' at  '+cmtDate.toUTCString().replace(/\s*(GMT|UTC)$/, "")+'</h5><p>'+result[i].comment+'</p></div>'+
// 											      '</div>'+
// 									            '</div>');	
// 		        		}
// 	        		}
// 	        	}
// 		});
// 		this.rendered = true;
// };
