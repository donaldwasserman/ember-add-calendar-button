import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | calendar button', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /calendar-button', async function(assert) {
    await visit('/');

    assert.dom('#test-id').exists();
    assert.dom('#test-google').hasText('Add to Goolge');
    assert.dom('#test-ical').hasText('Add to Anything');
  });
});
