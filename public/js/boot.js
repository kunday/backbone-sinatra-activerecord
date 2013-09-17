require.config({
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: [
      'underscore',
      'jquery'
      ],
      exports: 'Backbone'
    },
    'jquery_ui': {
      deps: [
        'jquery'
      ]
    },
    'jquery_ui_sortable': {
      deps: [
      'jquery',
      'jquery_ui'
      ]
    }
  },
  paths: {
    jquery: 'js/vendor/jquery',
    jquery_ui: 'js/vendor/jquery-ui',
    jquery_ui_sortable: 'js/vendor/jquery.ui.sortable',
    underscore: 'js/vendor/underscore',
    backbone: 'js/vendor/backbone',
    text: 'js/vendor/text'
  }
});
require(['js/application', 'jquery_ui', 'jquery_ui_sortable'], function(ApplicationRouter) {
  var app = new ApplicationRouter();
  Backbone.history.start();
});