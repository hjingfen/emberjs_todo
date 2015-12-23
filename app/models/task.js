import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    finish: DS.attr('boolean', {defaultValue: false})
    
});
