import Component from '@ember/component';
import layout from '../templates/components/button-base';
import moment from 'moment';
import { assert } from '@ember/debug';
import { get, computed } from '@ember/object';

export default Component.extend({
  layout,
  didRecieveAttrs() {
    this._super(...arguments);
    assert('`tagName` must be `a`', get(this, 'tagName') === 'a');
  },
  attributeBindings: ['href', 'target'],
  tagName: 'a',
  target: '_blank',
  href: computed('event.{start,end,description,title,location}', function() {
    let event = get(this, 'event');
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

  /**
   * Just pass click event up the chain
   * @private
   */
  click(event) {
    get(this, 'onClick')(event);
  },
  //Properties
  startTime: computed('event.start', function() {
    let start = get(this, 'event.start');
    return moment.isMoment(start) ? start : moment(start);
  }),
  endTime: computed('event.end', 'startTime', function() {
    let start = get(this, 'startTime');
    let end = get(this, 'event.end') || false;

    if (end) {
      return moment.isMoment(end) ? end : moment(end);
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
  // Args = { start, duration, location, description }
  generateHref() {
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

    return pairs.join('&');
  }
});
