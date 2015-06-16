import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/hearings?query=' + params.query + '&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var hearings = [];
      responseJSON.results.forEach(function(hearing) {
        hearings.push(hearing);
      });
      return hearings;
    });
  }
});
