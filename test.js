import test from 'ava';
import m from '.';

test('Start screensaver', async t => {
	await m();
	t.pass();
});
