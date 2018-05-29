import moment from 'moment';
import EmberObject from '@ember/object';

const EmberEvent = EmberObject.extend({
  start: moment(), //moment or string
  end: moment().add(4, 'hours'),
  title: 'Meeting with Tomster',
  description: "Coffee to discuss Tomster and Zoey's upcoming raise",
  location: '1234 North Port, Nowhere USA'
});

const PojoEvent = {
  start: moment(), //moment or string
  end: moment().add(4, 'hours'),
  title: 'Meeting with Tomster',
  description: "Coffee to discuss Tomster and Zoey's upcoming raise",
  location: '1234 North Port, Nowhere USA'
};

export { EmberEvent, PojoEvent };
