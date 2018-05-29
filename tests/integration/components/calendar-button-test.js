import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { PojoEvent } from '../../helpers/events';

module('Integration | Component | calendar-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('TestEvent', PojoEvent);

    // Template block usage:
    await render(hbs`
      {{#calendar-button TestEvent as |b|}}
        {{#b.google id="test-google"}}
          Add to Google
        {{/b.google}}
        {{#b.ical id="test-ical"}}
          Add to Anything
        {{/b.ical}}
      {{/calendar-button}}
    `);

    assert.dom('#test-google').hasAttribute('href');
    assert.dom('#test-ical').hasAttribute('href');
    assert.dom('#test-ical').hasAttribute('download');
  });
});
