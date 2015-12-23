import Ember from 'ember';

export default Ember.Route.extend({

    model(){
        // return [{
        //     name: 'first task',
        //     finish: false
        // },
        // {
        //     name: 'second task',
        //     finish: true
        // }];

        return this.store.findAll('task');
    }
});
