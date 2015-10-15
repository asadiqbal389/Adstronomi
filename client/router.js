Router.configure({
	layoutTemplate: 'homemain',
      //loadingTemplate: 'launchscreen',
	waitOn: function () {
    return [
    	Meteor.subscribe("users"),
      Meteor.subscribe("vids")
    ];
  }
});

// Router.route('/', {name: 'catCards'});
//Router.route('/', {name: 'catAutoCards'});
Router.route('/', function () {
  	this.render('catCards');
  	this.render('catAutoCards', {to: 'automobiles'});
  	this.render('catLifeCards', {to: 'lifestyle'});
  	this.render('catFoodCards', {to: 'food'});
  	this.render('catTechCards', {to: 'tech'});
  	this.render('catNsfwCards', {to: 'nsfw'});
});
// Router.route('/', function () {
// 	this.render('catAutoCards');
// });
Router.route('/recently-added', {name: 'cardcatsingle'});
Router.route('/automobiles', {name: 'cardcatauto'});
Router.route('/lifestyle', {name: 'cardcatlife'});
Router.route('/food', {name: 'cardcatfood'});
Router.route('/tech', {name: 'cardcattech'});
Router.route('/nsfw', {name: 'cardcatnsfw'});
Router.route('/watch/:videoid', {
		name: 'iframeplayer',
		data: function() { return Youtubeurls.findOne(this.params.videoid); }
});

