# ember-add-calendar-button

Add calendar entries with comfort and style.

Example usage:

```hbs
{{#calendar-button event as |b|}}
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

## Installation

* `git clone <repository-url>` this repository
* `cd ember-calendar-button`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
