# ember-add-calendar-button

Add calendar entries with comfort and style.

[![Build Status](https://travis-ci.com/donaldwasserman/ember-add-calendar-button.svg?branch=master)](https://travis-ci.com/donaldwasserman/ember-add-calendar-button)

[![npm version](https://badge.fury.io/js/ember-add-calendar-button.svg)](https://badge.fury.io/js/ember-add-calendar-button)


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-add-calendar-button
```

Usage
------------------------------------------------------------------------------


Example usage:

```hbs
{{#calendar-button event onClick=(action "myActionHere") as |b|}}
  {{#b.google}}
    Add To Google
  {{/b.google}}
  {{#b.ical}}
    Add to Anything
  {{/b.ical}}
{{/calendar-button}}

```

The `event` object can be an EmberObject or pojo.
```js
  let event = Ember.object.create({
    start: moment(), //moment or string
    end: moment().add(4, 'hours'),
    title: 'Meeting with Tomster',
    description: 'Coffee to discuss Tomster and Zoey\'s upcoming raise',
    location: '1234 North Port, Nowhere USA'
  })
```

**Note:** Totally stole a lot of the code from [here](https://github.com/carlsednaoui/add-to-calendar-buttons)


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
