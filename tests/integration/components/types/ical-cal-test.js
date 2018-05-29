import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { PojoEvent, EmberEvent } from '../../../helpers/events';
import { dasherize } from '@ember/string';

module('Integration | Component | types/ical-cal', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders PojoEvent', async function(assert) {
    this.set('PojoEvent', PojoEvent);
    await render(
      hbs`{{types/ical-cal id="test" event=PojoEvent text="Button Name"}}`
    );
    assert.equal(
      this.element.textContent.trim(),
      'Button Name',
      'renders `text` property as button text'
    );
    assert.dom('#test').hasAttribute('download');

    let download = this.element.querySelector('#test').getAttribute('download');
    assert.ok(
      download.startsWith(dasherize(PojoEvent.title.toLowerCase())),
      'the download property has the event title'
    );
    assert.ok(
      download.endsWith('.ics'),
      'download ends with `.ics` extenstion'
    );

    let href = this.element.querySelector('#test').getAttribute('href');
    assert.ok(
      href.startsWith(
        'data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0'
      ),
      'starts with correct iCal text'
    );

    // Template block usage:
    await render(hbs`
      {{#types/ical-cal id="test" event=PojoEvent}}
        Button Name
      {{/types/ical-cal}}
    `);

    assert.equal(
      this.element.textContent.trim(),
      'Button Name',
      'Renders block text'
    );
  });

  test('It renders an EmberObject Event', async function(assert) {
    let event = EmberEvent.create();
    this.set('EmberEvent', event);
    await render(
      hbs`{{types/ical-cal id="test" event=EmberEvent text="Button Name"}}`
    );
    assert.equal(
      this.element.textContent.trim(),
      'Button Name',
      'renders `text` property as button text'
    );
    assert.dom('#test').hasAttribute('download');

    let download = this.element.querySelector('#test').getAttribute('download');
    assert.ok(
      download.startsWith(dasherize(event.get('title').toLowerCase())),
      'the download property has the event title'
    );
    assert.ok(
      download.endsWith('.ics'),
      'download ends with `.ics` extenstion'
    );

    let href = this.element.querySelector('#test').getAttribute('href');
    assert.ok(
      href.startsWith(
        'data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0'
      ),
      'starts with correct iCal text'
    );
  });
});
