import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-i-s-s31-list-size', 'Unit | Model | i-i-s-i-s-s31-list-size', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-i-s-s31-form',
    'model:i-i-s-i-s-s31-investment',
    'model:i-i-s-i-s-s31-list-inv',
    'model:i-i-s-i-s-s31-list-size',
    'model:i-i-s-i-s-s31-size',
    'model:i-i-s-i-s-s31-support',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
