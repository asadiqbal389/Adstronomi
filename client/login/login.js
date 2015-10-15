
Template.loginbtnSoc.events({
	"click .btn-facebook": function() {
      Meteor.loginWithFacebook({
         requestPermissions: ['email']
         }, function(err){
             if (!err) 
              console.log("Facebook login successful")
          }
      )
    },
   "click .btn-google": function() {
       Meteor.loginWithGoogle({
         requestPermissions: ['email']
         }, function(err){
             if (!err)
              console.log("Google login successful")
          }
       )
   }
});
Template.userInfo.events({
 	"click .logout": function(){
	   		Meteor.logout();
	   }
});
