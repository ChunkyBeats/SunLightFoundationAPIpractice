import Ember from 'ember';

export default Ember.Controller.extend({
  chamber: ["house", "senate"],
  actions: {
    submit: function() {
      this.transitionToRoute('committee', this.get('group'), this.get('house'));
    }
  }
});
