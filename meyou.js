if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('scrollLeft', 0);
  Session.setDefault('delay50', false);


  setInterval(function(){
    Session.set('delay50', !Session.get('delay50'));
  }, 10);
  // Template.main.helpers({
  //   counter: function () {
  //     return Session.get('counter');
  //   }
  // });
  //
  Template.main.events({
    'scroll': function (e) {
      // increment the counter when button is clicked
        $(e.target).children().scrollTop(parseInt(Math.random(100)));

    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
