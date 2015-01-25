import Ember from 'ember';
import startApp from 'ember-comp/tests/helpers/start-app';

var App;

module('Integration - Landing Page', {
  setup: function(){
    App = startApp();
  },
  teardown: function(){
    Ember.run(App, 'destroy');
  }
});

test('Should welcome me to Ember Project', function(){
  visit('/').then(function(){
    equal(find('#title').text(), 'BeyHive/Ember');
  });
});

test('Should be clickable back to root', function(){
  visit('/about').then(function(){
    click('a.js-header#home').then(function(){
      notEqual(find('#body-title').text(), 'About');
    });
  });
});