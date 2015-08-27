Template.men.events({
  'click': function(e){
    var el = $(e.target);
    $( e.target ).parent().scrollTop()==0?$( e.target ).parent().scrollTop( 1000 ):$( e.target ).parent().scrollTop(0);
    //alert();
  }
});

Template.voteLive.events({
  'click .orangeButton': function(){
    Router.go('/vote');
  }
});

Template.textBlock.events({
  'scroll': function(e){
    var par = $(e.target).parent().height();
    var own = $(e.target).height();
    // //alert($(e.target).scrollLeft());
    // if (Session.get('scrollLeft') != $(e.target).scrollLeft() && Session.get('delay50')) {
    //     if (Session.get('scrollLeft')<$(e.target).width()){
    //       $(e.target).scrollLeft($(e.target).width() + 20);
    //     }
    //     else {
    //       $(e.target).scrollLeft(0);
    //     }
    //     Session.set('scrollLeft', $(e.target).scrollLeft());
    //
    // }
    //if ( $(e.target).offset().top <= $(e.target).scrollTop() )//$(e.target).parent().height()
    // $(e.target).html('<div></div>');
  },
  'click': function(e){
    var el = $(e.target);
    var elem;
    if($(e.target).parent().hasClass('textBlock')){
      elem = $(e.target).parent();
    }else if($(e.target).parent().parent().hasClass('textBlock')){
      elem = $(e.target).parent().parent();
    }else{
      elem = $(e.target);
    }
    elem.scrollLeft()==0?elem.scrollLeft( elem.width() + 8 ):elem.scrollLeft(0);
    if (elem.scrollLeft()!=0){
      elem.scrollTop(0);
    }
  }
});
