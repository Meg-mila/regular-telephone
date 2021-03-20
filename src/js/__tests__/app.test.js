import changePhoneNumber from '../app';

test('check number 8 (927) 000-00-00', () => {
  expect(changePhoneNumber('8 (927) 000-00-00')).toBe('+79270000000');
});
test('check number +7 960 000 00 00', () => {
  expect(changePhoneNumber('+7 960 000 00 00')).toBe('+79600000000');
});
test('check number +86 000 000 0000', () => {
  expect(changePhoneNumber('+86 000 000 0000')).toBe('+860000000000');
});
test('check number ++ 000 000 00003', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    changePhoneNumber('++ 000 000 00003');
  }).toThrow();
});
test('check number +86 000 000 0000203', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    changePhoneNumber('+86 000 000 0000203');
  }).toThrow();
});
