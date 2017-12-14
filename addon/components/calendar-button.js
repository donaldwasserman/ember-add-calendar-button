import Component from '@ember/component';
import layout from '../templates/components/calendar-button';
import {get} from '@ember/object';

const Button = Component.extend({
  layout,
  /*
   * Handler for conextual click actions
   */
  actions: {
    onClick(event) {
      get(this, 'onClick')(event);
    }
  }
});


Button.reopenClass({
  positionalParams: ['event']
})

export default Button;
