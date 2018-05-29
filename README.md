# ember-add-calendar-button

Add calendar entries with comfort and style.

[![Build Status](https://travis-ci.com/donaldwasserman/ember-add-calendar-button.svg?branch=master)](https://travis-ci.com/donaldwasserman/ember-add-calendar-button)

[![npm version](https://badge.fury.io/js/ember-add-calendar-button.svg)](https://badge.fury.io/js/ember-add-calendar-button)

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

### Installation

* `git clone <repository-url>`
* `cd my-addon`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
