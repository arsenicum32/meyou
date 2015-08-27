Template.voteScreen.events({
  'click .closePanel': function(){
    Router.go('/');
  },
  'click h1': function(){
    Router.go('/voteRes');
  }
});

Template.voteResult.events({
  'click .closePanel': function(){
    Router.go('/');
  }
});
