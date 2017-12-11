import Component from '@ember/component';
import layout from '../templates/components/button-base';
import moment from 'moment';
import {assert} from '@ember/debug';
import {get, getWithDefault, computed} from '@ember/object';
import {alias} from '@ember/object/computed';

export default Component.extend({
  layout,
  didRecieveAttrs() {
    this._super(...arguments);
    assert('`tagName` must be `a`', get(this, 'tagName') === 'a')
  },
  attributeBindings: ['href', 'target'],
  tagName: 'a',
  target: '_blank',
  href: computed('event', function() {
    let event = get(this, 'event');

    debugger;
    let args = {
      startTime: get(this, 'startTime'),
      duration: get(this, 'duration'),
      endTime: get(this, 'endTime'),
      location: get(event, 'location'),
      description: get(event, 'description'),
      title: get(event, 'title')
    };

    return this.generateHref(args);
  }),

  //Properties
  startTime: computed(function() {
    let start = get(this, 'event.start');
    return (moment.isMoment(start)) ? start : moment(start);
  }),
  endTime: computed('event', function() {
    let start = get(this, 'startTime');
    let end = get(this, 'event.end') || false;

    if (end) {
      return (moment.isMoment(end)) ? end : moment(end);
    }

    return start.add(90, 'minutes');
  }),

  duration: computed('event', 'startTime', 'endTime', function() {
    if (get(this, 'event.duration')) {
      return get(this, 'event.duration');
    }

    let start = get(this, 'startTime'),
        end = get(this, 'endTime');

    return start.diff(end);
  }),

  // Must Implment by exented component
  // Should return encodeURI()'d string
  generateHref({start, duration, location, description}) {
    assert('Please BYO method in subclass', false);
  },
  /**
   * Convert object to querystring
   * @private
   */
  _toQString(props) {
    let keys = Object.keys(props);
    let pairs = keys.map(x => {
      return x + '=' + props[x];
    });

    return pairs.join('&')
  }
});
