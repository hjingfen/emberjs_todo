import Ember from 'ember';

export default Ember.Controller.extend({

  newTask: null,
  finishAll: null,

  actions: {
    createTask (){
      let name = this.get('newTask');
      let task = this.store.createRecord('task', {name, creatAt: new Date().getTime()});
      task.save();
      this.set('newTask', null);
    }
  }
});
