import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('legislators', {path: '/'}, function() {
    this.resource('contact', {path: 'contact/:zip'});
  });
  this.resource('bills', function() {
    this.resource('bill', {path: 'bill/:date'});
  });
  this.resource('committees', function() {
    this.resource('committee', {path: '/:group/:house'})
  });
  this.resource('hearings', function() {
    this.resource('hearing', {path: 'hearing/:query'})
  });
});

export default Router;
