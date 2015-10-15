//Youtubeurls = new Mongo.Collection('videourls');

// if (Meteor.isClient) {

	//Meteor.subscribe("users");
Template.uploadBtn.events({
	 'click .urlUpload': function(e,t) {
	 		Modal.show('uploadModal');
   }
});
Template.uploadModal.events({
	'click .urlSubmit': function() {
  	var vdoUrlLink = $('#videoUrl').val();
  	var vdoDes = $('#videoDes').val();
  	var vdocat = $('#videoCat').val();
  	var flag = 1;
  	if(vdoUrlLink == ""){
  		$("#videoUrl").css('border','1px solid red');
  		flag=0;
  	}	
  	else if(vdoDes == "") {
  		$("#videoDes").css('border','1px solid red');
  		flag=0;
  	}
  	else if(vdocat == ""){
  		$("#videoCat").css('border','1px solid red');
  		flag=0;
  	}	
  	if(flag == 1) {
	  	var video_id = vdoUrlLink.split('v=')[1];
      var ampersandPosition = video_id.indexOf('&');
      if(ampersandPosition != -1) {
          video_id = video_id.substring(0, ampersandPosition);
      }
      Meteor.call("uploadVdoId", video_id, vdoDes, vdocat,function(error,result){
		    if(error){
		        //console.log(error);
		        $('.erroUrl').html('Failed Upload.');
		    }
		    else{
		    	$("#videoUrl").css('border','none');
		    	$("#videoDes").css('border','none');
  				$('.erroUrl').html('Successfully Upload.');
	      	$('#videoUrl').val('');
	  			$('#videoDes').val('');
	  			//console.log(result);
		    }
			});
  		return false;
  	}
	}
});
Template.uploadModal.rendered = function() {
	(function() {
		[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
			new SelectFx(el);
		} );
	})();
}
//}


