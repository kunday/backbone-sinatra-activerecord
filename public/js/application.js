define(['backbone'], function (Backbone) {
  var router = Backbone.Router.extend({
    routes: {
      '': 'home'
    },
    home: function() {
    }
  });
  return router;
});
