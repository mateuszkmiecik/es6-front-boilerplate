import test from 'tape';
import {bootstrap} from '../src/bootstrap';

test('bootstrap test', (assert) => {

  assert.equal(bootstrap("test"), "TEST");
  assert.end();
  
});
