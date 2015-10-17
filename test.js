import test from 'ava';
import fn from './';

test('Start screensaver', t => {
	t.plan(1);

	fn(err => {
		t.assert(!err, err);
	});
});
