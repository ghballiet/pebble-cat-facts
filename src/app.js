var UI = require('ui');
var ajax = require('ajax');

// show a loading screen while we fetch some data

var loading = new UI.Card({
  title: 'Cat Facts!',
  body: 'Fetching new cat fact, one sec...'
});

loading.show();

// make the ajax call for cat facts

ajax(
  {
    url: 'http://catfacts-api.appspot.com/api/facts?number=1',
    type: 'json'
  },
  function(data, status, request) {
    var fact = data.facts[0];
    var card = new UI.Card({
      title: 'Cat Fact!',
      body: fact
    });
    card.show();
  }, 
  function(error, status, request) {
    var card = new UI.Card({
      title: ':(',
      body: 'Something went horribly wrong.'
    });
    card.show();
  }
);