import Ember from 'ember';
import startApp from 'ember-comp/tests/helpers/start-app';
import Pretender from 'pretender';

var App, server;

module('Integration - Best Hits Page', {
  setup: function(){
    App = startApp();
    var hits = [
      {
        id: 1,
        name: 'Partition',
        description: 'description here',
        },
      {
        id: 2,
        name: 'Drunk in Love'
      },
      {
        id: 3,
        name: '**Flawless**'
      },
    ];

    server = new Pretender(function(){
      this.get('/api/hits', function(req){
        return [200, {"Content-Type": "application/json"}, JSON.stringify({ hits: hits})];
      });

      this.get('/api/hits/:id', function(req){
        var hit = hits.find(function(h){
          if (h.id === parseInt(req.params.id, 10)) {
            return h;
          }
        });

        return [200, {"Content-Type": "application/json"}, JSON.stringify({hit: hit})];
      });
    });
  },
  teardown: function(){
    Ember.run(App, 'destroy');
    server.shutdown();
  }
}); 

test('Should link to hits from home', function(){
  visit('/').then(function(){
    click('a:contains("Hits")').then(function(){
      equal(find('#body-title').text(), 'Hits');
    });
  });
});

test('Should list all hits', function(){
  visit('/hits').then(function(){
    equal(find('#body-title').text(), 'Hits');    
    equal(find('a:contains("Partition")').length, 1);
    equal(find('a:contains("Drunk in Love")').length, 1);
    equal(find('a:contains("**Flawless**")').length, 1);
  });
});

test('Should be clickable to a hit page', function(){
  visit('/hits').then(function(){
    click('a:contains("Partition")').then(function(){
      equal(find('.js-hit-title').text(), "Partition");
    });
  });
});

test('Should be able to visit hit page', function(){
  visit('/hits/1').then(function(){
    equal(find('.js-hit-title').text(), 'Partition');
    equal(find(".js-hit-desc").text(), 'description here');
  });
});