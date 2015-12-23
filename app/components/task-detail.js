import Ember from 'ember';

export default Ember.Component.extend({

    content: null,

    name: Ember.computed.oneWay('content.name'),

    finish: Ember.computed.alias('content.finish'),

    classNames: ['task-detail'],

    classNameBindings: ['finish:finish'],

    tagName: 'li',

    finishDidChange: Ember.observer('finish', function(){
      this.get('content').save();
    }),

    actions: {
      delete(){
        this.get('content').destroyRecord();
      }
    }

});
