import Ember from 'ember';
import startApp from 'ember-comp/tests/helpers/start-app';

var App;

module('Integration - About Page', {
  setup: function(){
    App = startApp();
  },
  teardown: function(){
    Ember.run(App, 'destroy');
  }
});

test('Should navigate to About page', function(){
  visit('/').then(function(){
    click("a.js-header#about").then(function(){
      equal(find('#body-title').text(), 'About');
    });
  });
});