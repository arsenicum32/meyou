Router.configure({

  // the appNotFound template is used for unknown routes and missing lists
  //notFoundTemplate: 'appNotFound',

  // show the appLoading template whilst the subscriptions below load their data
  //loadingTemplate: 'appLoading',

  // wait on the following subscriptions before rendering the page to ensure
  // the data it's expecting is present

});

dataReadyHold = null;

if (Meteor.isClient) {
  Router.route('/', {
    template: 'main'
  });
  Router.route('/vote', {
    template: 'voteScreen'
  });
  Router.route('/voteRes',{
    template: 'voteResult'
  });

  // Router.map(function() {
  //   this.route('main', {path: '/'});
  // });
}

// Router.route('home', {
//   path: '/',
//   action: function() {
//     Router.go('listsShow', Lists.findOne());
//   }
// });
