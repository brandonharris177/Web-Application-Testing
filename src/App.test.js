import strikeHandler from './components/Dashboard'

test('strikeHandler adds one strike', () => {
  expect(strikeHandler(1)).toBe(2);
  expect(strikeHandler(3)).toBe(0);
});

