import Component from '@ember/component';
import layout from '../templates/components/calendar-button';

const Button = Component.extend({
  layout
});


Button.reopenClass({
  positionalParams: ['event']
})

export default Button;
