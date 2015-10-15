

Meteor.publish("users", function(){
  	return Meteor.users.find();
});
Meteor.publish("vids", function(){
  	return Youtubeurls.find();
});
Meteor.publish("likevideos", function(){
  	return Likesvideos.find();
});
Meteor.methods({
	uploadVdoId: function(video_id, vdoDes, vdoCat) {
		Youtubeurls.insert({
			videoid: video_id,
			des: vdoDes,
			category: vdoCat,
			upldat: new Date()
		});
	}
});
// Meteor.methods({
// 	liked: function() {		
// 		return Likesvideos.find({"user_id": Meteor.userId()}).fetch();
// 	}
// });		
Meteor.methods({
	likable: function(video_id) {
		Meteor.users.update(
			{"_id": Meteor.userId()},
			{ $push: { "liksvdo": video_id}}
		);
	}
});
Meteor.methods({
	dislikable: function(video_id) {
		Meteor.users.update(
			{"_id": Meteor.userId()},
			{ $pull: { "liksvdo": video_id}}
		);
	}
});
// Meteor.methods({
// 	liked: function() {
// 		Meteor.users.find({"_id": Meteor.userId()});
// 	}
// });
// Meteor.methods({
// 	portComments: function(cmt, vdoid) {
// 		Commentpost.insert({
// 			comment: cmt,
// 			vdoid: vdoid,
// 			userid: Meteor.userId(),
// 			upldat: new Date()
// 		});
// 	}
// });
Meteor.methods({
	getVdoId: function() {
      	return Youtubeurls.find().fetch().sort({upldat:-1});
  	}
}); 

Meteor.methods({
	getVdoAutoId: function() {
      	return Youtubeurls.find({"category":"automobile"}).fetch().sort({"upldat":-1});
  	}
}); 

Meteor.methods({
	getVdoLifeId: function() {
      	return Youtubeurls.find({"category":"lifestyle"}).fetch().sort({"upldat":-1});
  	}
}); 

Meteor.methods({
	getVdofoodId: function() {
      	return Youtubeurls.find({"category":"food"}).fetch().sort({"upldat":-1});
  	}
}); 

Meteor.methods({
	getVdotechId: function() {
      	return Youtubeurls.find({"category":"tech"}).fetch().sort({"upldat":-1});
  	}
}); 

Meteor.methods({
	getVdonsfwId: function() {
      	return Youtubeurls.find({"category":"nsfw"}).fetch().sort({"upldat":-1});
  	}
}); 
// Meteor.methods({
// 	getCmts: function(cmtvdoid) {
//       	return Commentpost.find({"vdoid" : cmtvdoid}).fetch();
//   	}
// }); 

// Meteor.methods({
// 	addlike: function(vdoid) {
//       	return Meteor.users.update();
//       	db.mycol.update({'_id': Meteor.userId()},{$set:{'likedisvdos': }})
//   	}
// }); 

// var Likesvdo = LikeableModel.extend();

// //BaseModel requires a prototype._collection so we do that here
// Likesvdo.prototype._collection = new Mongo.Collection("likesvideos", {
//     	transform: function(document){
//         	return new Likesvdo(document);
//     	}
// });

// //Add other protypal methods for this model

// //expose the collection on the Meteor global
// Meteor.likesvideos = Likesvdo.prototype._collection;