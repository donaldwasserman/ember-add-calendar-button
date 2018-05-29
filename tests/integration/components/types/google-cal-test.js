import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { PojoEvent, EmberEvent } from '../../../helpers/events';

const GoogleCalendarBaseURl =
  'https://calendar.google.com/calendar/r/eventedit';

module('Integration | Component | types/google-cal', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a pojo event', async function(assert) {
    this.set('PojoEvent', PojoEvent);
    await render(
      hbs`{{types/google-cal id="test" event=PojoEvent text="Button Name"}}`
    );
    assert.equal(
      this.element.textContent.trim(),
      'Button Name',
      'renders `text` property as button text'
    );

    assert.dom('#test').hasAttribute('href');

    let href = this.element.querySelector('#test').getAttribute('href');

    assert.ok(
      href.startsWith(GoogleCalendarBaseURl),
      'starts with correct google calendar text'
    );
    assert.ok(href.endsWith('&sf=true&output=xml'), 'ends with correct text');
    let titleText = encodeURI(`text=${PojoEvent.title}`);
    let locationText = encodeURI(`location=${PojoEvent.location}`);
    assert.ok(href.includes(titleText), 'contains the correct title');
    assert.ok(href.includes(locationText), 'contains correct location');

    // Template block usage:
    await render(hbs`
      {{#types/google-cal id="test" event=PojoEvent}}
        Button Name
      {{/types/google-cal}}
    `);

    assert.equal(
      this.element.textContent.trim(),
      'Button Name',
      'Renders block text'
    );
  });

  test('it renders an Ember Object', async function(assert) {
    let event = EmberEvent.create();
    this.set('EmberEvent', event);
    await render(
      hbs`{{types/google-cal id="test" event=EmberEvent text="Button Name"}}`
    );
    assert.equal(
      this.element.textContent.trim(),
      'Button Name',
      'renders `text` property as button text'
    );
    assert.dom('#test').hasAttribute('href');

    let href = this.element.querySelector('#test').getAttribute('href');

    assert.ok(
      href.startsWith(GoogleCalendarBaseURl),
      'starts with correct google calendar text'
    );
    assert.ok(href.endsWith('&sf=true&output=xml'), 'ends with correct text');
    let titleText = encodeURI(`text=${event.get('title')}`);
    let locationText = encodeURI(`location=${event.get('location')}`);
    assert.ok(href.includes(titleText), 'contains the correct title');
    assert.ok(href.includes(locationText), 'contains correct location');
  });
});
